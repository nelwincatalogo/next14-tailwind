import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/core/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        success: 'border-green-300 bg-green-100 text-green-800 dark:text-slate-50',
        warning: 'border-yellow-300 bg-yellow-100 text-yellow-800 dark:text-slate-50',
        info: 'border-blue-300 bg-blue-100 text-blue-800 dark:text-slate-50',
        error: 'border-red-300 bg-red-100 text-red-800 dark:text-slate-50',
        gray: 'border-gray-300 bg-gray-100 text-gray-800 dark:text-slate-50',
        orange: 'border-orange-300 bg-orange-100 text-orange-800 dark:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
