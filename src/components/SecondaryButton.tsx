import { ArrowLeft, ArrowRight } from "lucide-react";

export const SecondaryButton = ({
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
        [background:var(--gradient-yellow)] hover:bg-yellow-500
        text-[color:var(--color-blue-gray-900)]
        border border-[color:var(--color-yellow-300)]
        px-[var(--spacing-5)] py-3
        gap-[var(--spacing-1-5)]
        shadow-[var(--shadow-yellow)]
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
