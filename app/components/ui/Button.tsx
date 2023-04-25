'use client';

import { ButtonHTMLAttributes } from 'react';

import { IconType } from 'react-icons';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/libs/utils';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
  label: string;
  disabled?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonVariants = cva(
  'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full',
  {
    variants: {
      variant: {
        default: 'bg-rose-500 border-rose-500 text-white',
        outline: 'bg-white border-black text-black',
      },
      size: {
        default: 'text-md py-3 font-semibold border-2',
        small: 'text-sm py-1 font-light border-[1px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button: React.FC<IButtonProps> = ({ 
  label, 
  size,
  variant,
  disabled, 
  className,
  icon: Icon,
  onClick, 
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};
 
export default Button;