import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LolitaButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

const LolitaButton = ({ 
  children, 
  onClick, 
  className,
  variant = "primary" 
}: LolitaButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-cursive text-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-rose to-primary text-soft-white shadow-glow hover:shadow-glow-lg",
    secondary: "bg-lavender text-foreground hover:bg-primary hover:text-soft-white",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-soft-white",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default LolitaButton;
