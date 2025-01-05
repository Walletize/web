'use client';

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { DayPicker, DropdownNavProps, DropdownProps, type DayPickerProps } from 'react-day-picker';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button, buttonVariants } from './button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export type CalendarProps = DayPickerProps;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      endMonth={new Date(2050, 11)}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'relative flex flex-col sm:flex-row gap-4',
        month: 'space-y-4',
        nav: 'flex items-center justify-between absolute w-full z-10 px-1',
        button_previous: cn(
          buttonVariants({
            variant: 'outline',
            className: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          }),
        ),
        button_next: cn(
          buttonVariants({
            variant: 'outline',
            className: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          }),
        ),
        month_caption: 'flex justify-center items-center h-7',
        caption_label: 'text-sm font-medium',
        month_grid: 'border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-muted-foreground w-9 font-normal text-xs',
        weeks: '',
        week: 'flex mt-2',
        day: 'p-0 first:text-red-500',
        outside: 'bg-accent/40',
        range_middle: 'bg-accent last:rounded-e-md first:rounded-s-md',
        range_start: 'bg-accent rounded-s-md',
        range_end: 'bg-accent rounded-e-md',
        ...classNames,
      }}
      captionLayout="dropdown"
      components={{
        DayButton({ modifiers, className, ...buttonProps }) {
          return (
            <Button
              variant="ghost"
              className={cn(
                className,
                'h-9 w-9 p-0 font-normal',
                modifiers?.today && 'bg-accent text-accent-foreground',
                modifiers?.selected &&
                  'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
                modifiers?.outside && 'pointer-events-none text-muted-foreground opacity-50',
                modifiers?.disabled && 'text-muted-foreground opacity-50',
                modifiers?.hidden && 'invisible',
                modifiers.range_middle &&
                  'rounded-none bg-accent text-accent-foreground first:rounded-s-md last:rounded-e-md hover:bg-accent hover:text-accent-foreground',
                modifiers.outside && modifiers.selected && 'bg-accent/40 text-muted-foreground',
              )}
              {...buttonProps}
              aria-selected={modifiers.selected || buttonProps['aria-selected']}
              aria-disabled={modifiers.disabled || buttonProps['aria-disabled']}
              aria-hidden={modifiers.hidden || buttonProps['aria-hidden']}
            />
          );
        },
        Chevron({ orientation, disabled, className }) {
          const Component =
            orientation === 'left'
              ? ChevronLeft
              : orientation === 'right'
                ? ChevronRight
                : orientation === 'up'
                  ? ChevronUp
                  : ChevronDown;

          return <Component className={cn('h-4 w-4', className)} aria-disabled={disabled} />;
        },
        Month: ({ children }: DropdownNavProps) => {
          return <div className="space-y-5">{children}</div>;
        },
        DropdownNav: ({ children }: DropdownNavProps) => {
          return <div className="z-10 mx-8 mt-2 flex w-full gap-2">{children}</div>;
        },
        Dropdown: ({ value, options, ...props }: DropdownProps) => {
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                props.onChange?.({
                  target: { value },
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger className="pr-1.5 focus:ring-0">
                <SelectValue>
                  {options?.find((option) => value?.toString() === option.value?.toString())?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {options?.map((option, id: number) => (
                  <SelectItem key={`${option.value}-${id}`} value={option.value?.toString() ?? ''}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };