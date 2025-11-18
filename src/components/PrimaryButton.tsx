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
        w-full flex items-center justify-center flex-row
        rounded-[8px]
        font-['Eczar'] font-semibold
        bg-indigo-700 hover:bg-yellow-500
        text-white
        px-[var(--spacing-5)] py-3
        gap-[var(--spacing-1-5)]
        shadow-[var(--shadow-indigo)]
        transition-shadow duration-300
        ${className}
      `}
    >
      {showLeftIcon && <ArrowLeft className="w-4 h-4" />}
      <span>{text}</span>
      {showRightIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};
