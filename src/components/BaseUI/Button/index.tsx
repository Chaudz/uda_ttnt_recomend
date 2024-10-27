import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/base/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface CustomButtonProps extends MuiButtonProps {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  label?: string;
  color?: 'primary' | 'secondary' | 'error';
  variant?: 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  icon,
  iconPosition = 'start',
  label,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  className,
  children,
  fullWidth,
  disabled,
  loading = false,
  ...muiButtonProps
}) => {
  const baseClasses =
    'font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2 rounded-md cursor-pointer min-w-32';

  const disabledClasses = 'cursor-not-allowed opacity-50';

  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-4 py-2',
    large: 'text-lg px-6 py-3',
  };

  const colorClasses = {
    primary:
      variant === 'contained'
        ? 'bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 focus:ring-cyan-300'
        : 'text-cyan-500 border border-cyan-500 hover:bg-cyan-50 active:bg-cyan-100 focus:ring-2 focus:ring-cyan-300',
    secondary:
      variant === 'contained'
        ? 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 focus:ring-neutral-600'
        : 'text-neutral-900 border border-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-2 focus:ring-neutral-600',
    error:
      variant === 'contained'
        ? 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-300'
        : 'text-red-500 border border-red-500 hover:bg-red-50 active:bg-red-100 focus:ring-2 focus:ring-red-300',
  };

  return (
    <MuiButton
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${
        fullWidth ? 'w-full' : ''
      } ${iconPosition === 'end' ? 'flex-row-reverse' : ''} ${
        disabled ? disabledClasses : ''
      } ${className}`}
      {...muiButtonProps}
    >
      <div
        className={`flex items-center justify-center ${
          iconPosition === 'end' ? 'flex-row-reverse' : ''
        }`}
      >
        {icon && (
          <span className="inline-flex items-center justify-center">
            {icon}
          </span>
        )}
        <span className="text-center">{label || children}</span>
      </div>
    </MuiButton>
  );
};

export default Button;
