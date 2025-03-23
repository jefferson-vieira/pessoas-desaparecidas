'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import parseSearchParams from '@/utils/parse-search-params';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MIN_AGE_IN_YEARS = 1;

const SEX = ['MASCULINO', 'FEMININO'] as const;

const STATUS = ['DESAPARECIDO', 'LOCALIZADO'] as const;

const formSchema = z
  .object({
    name: z.string().trim().nullable(),
    sex: z.enum(SEX).nullable(),
    status: z.enum(STATUS).nullable(),
    minAge: z.number().int().min(MIN_AGE_IN_YEARS).nullable(),
    maxAge: z.number().int().min(MIN_AGE_IN_YEARS).nullable(),
  })
  .refine(
    ({ maxAge, minAge }) => !(maxAge && minAge && maxAge <= minAge),
    () => ({
      path: ['maxAge'],
      message: 'Idade máxima não pode ser menor que a idade mínima',
    }),
  );

type FormSchema = z.infer<typeof formSchema>;

export default function SearchPeople() {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      maxAge: null,
      minAge: null,
      name: null,
      sex: null,
      status: null,
    },
  });

  function handleClear() {
    form.reset();

    router.push('/');
  }

  function onSubmit(data: FormSchema) {
    const params = parseSearchParams(data);

    router.push(`/?${params.toString()}`);
  }

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Buscar pessoas</CardTitle>

          <CardDescription>
            Utilize os filtros para encontrar pessoas específicas.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field: { value, ...field } }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Nome:</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="ex.: Fulano da Silva"
                        value={value || ''}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex flex-wrap gap-6">
                <FormField
                  control={form.control}
                  name="minAge"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="whitespace-nowrap">
                        Idade mínima:
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Anos"
                          min={1}
                          step="1"
                          value={value || ''}
                          onChange={({ target: { value } }) =>
                            onChange(+value || null)
                          }
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="maxAge"
                  render={({ field: { value, onChange, ...field } }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="whitespace-nowrap">
                        Idade máxima:
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Anos"
                          min={1}
                          step="1"
                          value={value || ''}
                          onChange={({ target: { value } }) =>
                            onChange(+value || null)
                          }
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Sexo:</FormLabel>

                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value || ''}
                          className="flex"
                        >
                          {SEX.map((sex) => (
                            <FormItem key={sex} className="flex items-center">
                              <FormControl>
                                <RadioGroupItem value={sex} />
                              </FormControl>

                              <FormLabel>{sex}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Situação:</FormLabel>

                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value || ''}
                          className="flex"
                        >
                          {STATUS.map((status) => (
                            <FormItem
                              key={status}
                              className="flex items-center"
                            >
                              <FormControl>
                                <RadioGroupItem value={status} />
                              </FormControl>

                              <FormLabel>{status}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:self-end">
                <Button
                  type="button"
                  disabled={!form.formState.isDirty}
                  title="Limpar filtros"
                  variant="secondary"
                  onClick={handleClear}
                >
                  <Trash /> Limpar
                </Button>

                <Button
                  type="submit"
                  disabled={!form.formState.isDirty}
                  title="Filtrar pessoas"
                >
                  <SearchIcon /> Buscar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
