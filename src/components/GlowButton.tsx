
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GlowButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: GlowButtonProps) => {
  const baseStyles = "font-medium rounded-full transition-all duration-300 transform hover:scale-105";
  
  const variantStyles = {
    primary: "bg-emerald text-white hover:bg-emerald/90",
    secondary: "bg-transparent border border-emerald text-emerald hover:bg-emerald/10",
    outline: "bg-transparent border border-white text-white hover:border-emerald hover:text-emerald",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GlowButton;
