import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sign?: string;
  signPosition?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        type === 'date' ? 'block' : 'flex',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'password', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />

        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <EyeOff className="size-5 text-gray-400" /> : <Eye className="size-5 text-gray-400" />}
          </button>
        </div>
      </div>
    );
  },
);
InputPassword.displayName = 'InputPassword';

const InputSign = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sign, signPosition = 'right', className, type, ...props }, ref) => {
    return (
      <div className="relative">
        {signPosition === 'left' && (
          <div className="absolute inset-y-0 left-0">
            <div
              className={cn(
                'px-2 text-xs sm:text-base sm:px-4 border border-slate-300 h-full flex items-center rounded-l-md bg-gray-200 font-medium text-gray-600',
                props.disabled && 'bg-gray-100 border-slate-300',
              )}
            >
              {sign}
            </div>
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            signPosition === 'left' ? 'pl-[3.2rem] sm:pl-[4.8rem]' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {signPosition === 'right' && (
          <div className="absolute inset-y-0 right-0">
            <div
              className={cn(
                'px-2 text-xs sm:text-base sm:px-4 border border-slate-300 h-full flex items-center rounded-r-md bg-gray-200 font-medium text-gray-600',
                props.disabled && 'bg-gray-100 border-slate-300',
              )}
            >
              {sign}
            </div>
          </div>
        )}
      </div>
    );
  },
);
InputSign.displayName = 'InputSign';

export { Input, InputPassword, InputSign };
