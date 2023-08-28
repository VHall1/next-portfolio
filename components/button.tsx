'use client';

import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';

const Button: FC<
  PropsWithChildren<ButtonProps & JSX.IntrinsicElements['button']>
> = ({ children, className, size, variant }) => {
  return (
    <button
      type="button"
      className={getClassName({ className, size, variant })}
    >
      {children}
    </button>
  );
};

const LinkButton: FC<
  PropsWithChildren<ButtonProps & JSX.IntrinsicElements['a']>
> = ({ children, className, size, variant }) => {
  return (
    <button
      type="button"
      className={getClassName({ className, size, variant })}
    >
      {children}
    </button>
  );
};

function getClassName({
  className,
  size = 'md',
  variant = 'primary',
}: {
  className?: string | undefined;
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
}) {
  return clsx(
    'focus:outline-none focus:ring font-medium rounded-md',
    {
      // Variants
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300':
        variant === 'primary',
      'text-white bg-slate-600 hover:bg-slate-700 focus:ring-slate-300':
        variant === 'secondary',
      'text-white bg-red-700 hover:bg-red-800 focus:ring-red-500':
        variant === 'error',
      'text-white bg-amber-500 hover:bg-amber-600 focus:ring-amber-300':
        variant === 'warning',
      'text-white bg-green-700 hover:bg-green-800 focus:ring-green-500':
        variant === 'success',
      // Sizes
      'px-3 py-2 text-xs': size === 'xs',
      'px-3 py-2 text-sm': size === 'sm',
      'px-5 py-2.5 text-sm': size === 'md',
      'px-5 py-3 text-base': size === 'lg',
      'px-6 py-3.5 text-base': size === 'xl',
    },
    className
  );
}

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export { Button, LinkButton };
