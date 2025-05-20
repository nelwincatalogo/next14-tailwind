'use client';

import {
  addDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import useLocalStorage from '@/core/hooks/utils/useLocalStorage';
import { cn } from '@/core/utils';

export interface DateRange {
  from: Date;
  to: Date;
}

export interface AdvancedDateRangePickerProps {
  className?: string;
  value?: DateRange;
  onChange?: (value: DateRange) => void;
}

export function AdvancedDateRangePicker({
  className,
  value = {
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  },
  onChange,
  ...props
}: AdvancedDateRangePickerProps) {
  const [date, setDate] = useLocalStorage('rangeDatePicker', value);
  const [isOpen, setIsOpen] = React.useState(false);

  const presets = [
    { label: 'Today', getValue: () => ({ from: startOfDay(new Date()), to: endOfDay(new Date()) }) },
    {
      label: 'Yesterday',
      getValue: () => ({ from: startOfDay(addDays(new Date(), -1)), to: endOfDay(addDays(new Date(), -1)) }),
    },
    { label: 'This Week', getValue: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }) },
    {
      label: 'Last Week',
      getValue: () => ({ from: startOfWeek(addDays(new Date(), -7)), to: endOfWeek(addDays(new Date(), -7)) }),
    },
    { label: 'This Month', getValue: () => ({ from: startOfMonth(new Date()), to: endOfMonth(new Date()) }) },
    {
      label: 'Last Month',
      getValue: () => ({ from: startOfMonth(subMonths(new Date(), 1)), to: endOfMonth(subMonths(new Date(), 1)) }),
    },
    {
      label: 'This Year',
      getValue: () => ({
        from: new Date(new Date().getFullYear(), 0, 1),
        to: new Date(new Date().getFullYear(), 11, 31),
      }),
    },
    {
      label: 'Last Year',
      getValue: () => ({
        from: new Date(new Date().getFullYear() - 1, 0, 1),
        to: new Date(new Date().getFullYear() - 1, 11, 31),
      }),
    },
  ];

  React.useEffect(() => {
    onChange?.(date);
  }, []);

  return (
    <div className={cn('grid gap-2')}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'min-w-max gap-2.5 justify-start text-left font-normal',
              !date && 'text-muted-foreground',
              className,
            )}
            {...props}
          >
            <CalendarIcon className="size-4" />
            {date?.from ? (
              <>
                {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
              </>
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 font-sans" align="start">
          <div className="flex h-[300px] flex-col">
            <ScrollArea className="min-h-[300px] flex-1">
              <div className="flex">
                <div className="w-32 space-y-1 border-r p-2">
                  {presets.map((preset) => (
                    <Button
                      key={preset.label}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs font-normal"
                      onClick={() => {
                        const newDate = preset.getValue();
                        setDate(newDate);
                        onChange?.(newDate);
                      }}
                    >
                      {preset.label}
                    </Button>
                  ))}
                </div>
                <div className="space-y-3 p-3">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setDate((prev) => {
                          const newDate = { ...prev, from: addDays(prev.from, -30), to: addDays(prev.to, -30) };
                          onChange?.(newDate);
                          return newDate;
                        });
                      }}
                    >
                      <ChevronLeft className="size-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setDate((prev) => {
                          const newDate = { ...prev, from: addDays(prev.from, 30), to: addDays(prev.to, 30) };
                          onChange?.(newDate);
                          return newDate;
                        })
                      }
                    >
                      <ChevronRight className="size-4" />
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Calendar
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={(newDate) => {
                        if (newDate) {
                          const _newDate = { from: newDate.from || date.from, to: newDate.to || date.to };
                          setDate(_newDate);
                          onChange?.(_newDate);
                        }
                      }}
                      numberOfMonths={2}
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row">
                    <Input
                      type="date"
                      value={format(date.from, 'yyyy-MM-dd')}
                      onChange={(e) => {
                        setDate((prev) => {
                          const newDate = { ...prev, from: new Date(e.target.value) };
                          onChange?.(newDate);
                          return newDate;
                        });
                      }}
                    />
                    <Input
                      type="date"
                      value={format(date.to, 'yyyy-MM-dd')}
                      onChange={(e) => {
                        setDate((prev) => {
                          const newDate = { ...prev, to: new Date(e.target.value) };
                          onChange?.(newDate);
                          return newDate;
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
