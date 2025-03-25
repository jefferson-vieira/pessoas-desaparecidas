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

const TITLE = 'Relatar informações';
const SUBTITLE = 'Relate informações sobre o desaparecimento';

const formSchema = z.object({
  info: z.string().trim().nonempty(),
  date: z.date(),
  pictures: z.instanceof(FileList).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = Pick<components['schemas']['OcorrenciaDTO'], 'ocoId'>;

export default function ReportDialog({ ocoId }: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function clearForm() {
    form.reset();
  }

  function onSubmit(data: FormSchema) {
    console.log('data', data);

    createReport({
      ...data,
      description: 'Fotos',
      ocoId,
    });
  }

  return (
    <Dialog onOpenChange={clearForm}>
      <DialogTrigger asChild>
        <Button className="md:self-start" title={SUBTITLE}>
          {TITLE}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>

            <Button type="submit" disabled={!form.formState.isValid}>
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
