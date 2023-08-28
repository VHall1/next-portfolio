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
  // <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>

  return clsx(
    'focus:ring-4 font-medium rounded-md focus:outline-none',
    {
      // Variants
      'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800':
        variant === 'primary',
      '1': variant === 'secondary',
      '2': variant === 'error',
      '3': variant === 'warning',
      '5': variant === 'info',
      'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300':
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
  variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export { Button, LinkButton };
