import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import type { Plan } from "@/constants/plans";
import { FiCheckCircle } from "react-icons/fi";

type PricingCardProps = Plan;

const badgeStyles = {
  primary: `
    bg-[#302D9A]/20
    text-[color:var(--color-indigo-500)]
  `,
  secondary: `
    bg-[#FFECC7]/8
    text-[color:var(--color-yellow-400)]
  `
};

const borderStyles = {
  primary: "border-indigo-500",
  secondary: "border-[#FCD34D]/10",
} as const;

const iconColorByType = {
  primary: "text-indigo-400",
  secondary: "text-[color:var(--color-yellow-400)]", // 혹은 text-amber-300 등
};

export default function PricingCard({
  badge,
  title,
  price,
  periodLabel,
  descriptions,
  ctaLabel,
  buttonType,
}: PricingCardProps) {
  return (
    <div className={`w-full rounded-2xl border ${borderStyles[buttonType]} bg-[color:var(--color-card-bg)] px-5 py-6 shadow-lg`}>
      <button
        className={`
            flex self-center mb-2 gap-2
            text-base font-semibold font-['Eczar']
            px-4 py-2 rounded-full
            ${badgeStyles[buttonType]}
        `}
        >
        {badge}
      </button>

      {/* title + price */}
      <div className="mt-4">
        <p className="text-white font-['Eczar']">{title}</p>
        <p className="heading-sp-h1 mt-2 font-['Italianno'] text-white">
          ${price}
          <span className="ml-1 align-baseline heading-sp-h2 font-normal text-[color:var(--color-blue-gray-400)]">
            {periodLabel}
          </span>
        </p>
      </div>

      {/* description list */}
      <ul className="mt-4 space-y-3 text-sm font-['inter'] text-[color:var(--color-blue-gray-300)]">
        {descriptions.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <FiCheckCircle
              className={`
                mt-0.5 flex-shrink-0
                ${iconColorByType[buttonType]}
              `}
              size={18}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
