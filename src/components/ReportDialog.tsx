'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import DatePickerInput from '@/components/DatePickerInput';
import { Input } from '@/components/ui/input';
import { createReport } from '@/services/api';
import { components } from '@/@types/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useState } from 'react';

const TITLE = 'Relatar informações';
const SUBTITLE = 'Relate informações sobre o desaparecimento';

const today = new Date();

const formSchema = z.object({
  info: z.string().trim().nonempty(),
  date: z.date(),
  pictures: z.instanceof(FileList).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = Pick<components['schemas']['OcorrenciaDTO'], 'ocoId'>;

export default function ReportDialog({ ocoId }: Props) {
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createReport,
    onError: () => {
      toast.error(
        'Não foi possível registrar as informações. Por favor, tente novamente.',
      );
    },
    onSuccess: () => {
      toast.success('Informações registradas com sucesso!');

      handleOpenChange(false);
    },
  });

  function handleOpenChange(open: boolean) {
    if (!open) {
      form.reset();
    }

    setOpen(open);
  }

  function handleSubmit(data: FormSchema) {
    mutate({
      ...data,
      description: 'Fotos',
      ocoId,
    });
  }

  return (
    <Dialog
      open={open}
      preventClose={isPending}
      onOpenChange={handleOpenChange}
    >
      <DialogTrigger asChild>
        <Button className="md:self-start" title={SUBTITLE}>
          {TITLE}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>
            <DialogTitle>{TITLE}</DialogTitle>

            <DialogDescription>{SUBTITLE}</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <Form {...form}>
              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Informações:</FormLabel>

                    <FormControl>
                      <Textarea
                        placeholder="Informações a respeito da visualização da pessoa"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <DatePickerInput
                control={form.control}
                maxDate={today}
                name="date"
                label="Data:"
                placeholder="Data da visualização da pessoa"
              />

              <FormField
                control={form.control}
                name="pictures"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars -- see https://legacy.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag:~:text=In%20React%2C%20an%20%3Cinput%20type%3D%22file%22%20/%3E%20is%20always%20an%20uncontrolled%20component%20because%20its%20value%20can%20only%20be%20set%20by%20a%20user%2C%20and%20not%20programmatically.
                render={({ field: { value: _, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Fotos:</FormLabel>

                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        placeholder="Informações a respeito da visualização da pessoa"
                        onChange={(event) => onChange(event.target.files)}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button disabled={isPending} type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={!form.formState.isValid}
              loading={isPending}
            >
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
