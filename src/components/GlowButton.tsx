
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
  const baseStyles = "font-medium rounded-full button-glow transition-all duration-300 transform hover:scale-105";
  
  const variantStyles = {
    primary: "bg-glow-cyan text-white shadow-glow-sm hover:shadow-glow-md",
    secondary: "bg-transparent border border-glow-cyan text-glow-cyan hover:bg-glow-cyan/10 shadow-glow-sm hover:shadow-glow-md",
    outline: "bg-transparent border border-white text-white hover:border-glow-cyan hover:text-glow-cyan",
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
