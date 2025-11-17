import { ArrowLeft, ArrowRight } from "lucide-react";
import type { MouseEventHandler } from "react";

type PrimaryButtonProps = {
  className?: string;
  text?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;                               
};

export const PrimaryButton = ({
  className = "",
  text = "Button text",
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}   
      disabled={disabled}
      className={`
        flex items-center justify-center flex-row
        w-full h-[40px]
        rounded-[8px]
        font-['Eczar'] font-semibold
        bg-indigo-600 hover:bg-indigo-700
        shadow-[var(--shadow-indigo)] 
        text-[color:var(--color-palette-white)]
        px-[var(--spacing-4)] py-[var(--spacing-2-5)]
        gap-[var(--spacing-1-5)]
        ${className}
      `}
    >
      {showLeftIcon && <ArrowLeft className="w-4 h-4" />}
      <span>{text}</span>
      {showRightIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};
