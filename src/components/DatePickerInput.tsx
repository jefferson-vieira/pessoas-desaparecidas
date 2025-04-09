'use client';

import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { formatDate } from '@/utils/date-time';

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  label: string;
  maxDate: Date;
  placeholder: string;
} & Omit<ControllerProps<TFieldValues, TName>, 'render'>;

export default function DatePickerInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ label, maxDate, placeholder, ...props }: Props<TFieldValues, TName>) {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    'overflow-hidden',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    formatDate(field.value)
                  ) : (
                    <span className="overflow-hidden text-ellipsis">
                      {placeholder}
                    </span>
                  )}

                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                disabled={{
                  after: maxDate,
                }}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
