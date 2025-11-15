import { ArrowLeft, ArrowRight } from "lucide-react";

export const PrimaryButton = ({
  className = "",
  text = "Button text",
  showLeftIcon = true,
  showRightIcon = true,
}) => {
  return (
    <button
      className={`
        flex items-center justify-center flex-row
        w-full
        rounded-[8px]
        font-['Eczar'] font-semibold
        bg-indigo-600 hover:bg-indigo-700
        shadow-[var(--shadow-indigo)]
        text-[color:var(--color-palette-white)] text-[16px]
        px-[var(--spacing-5)] py-3
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
