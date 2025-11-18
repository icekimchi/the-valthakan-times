import { HiLockClosed } from "react-icons/hi";

type TagKey =
  | "monthly edition"
  | "deep dive/writers workshop"
  | "mid month update"
  | "dear crone quarterly"
  | "wanderings of the crone"
  | "audio edition"
  | "special edition";

const TAG_STYLES: Record<
  TagKey,
  {
    wrapper: string;
    text: string;
    locked?: boolean;
  }
> = {
  "monthly edition": {
    wrapper: "bg-[#302D9A]/20",
    text: "text-[color:var(--color-indigo-500)]",
  },
  "deep dive/writers workshop": {
    wrapper: "bg-[#064E3B]/20",
    text: "text-[color:var(--color-green-400)]",
    locked: true,
  },
  "mid month update": {
    wrapper: "bg-[#9D174D]/20",
    text: "text-rose-100",
  },
  "dear crone quarterly": {
    wrapper: "bg-violet-900/40",
    text: "text-[color:var(--color-pink-300)]",
  },
  "wanderings of the crone": {
    wrapper: "bg-[#78350F]/20",
    text: "text-[color:var(--color-yellow-400)]",
    locked: true,
  },
  "audio edition": {
    wrapper: "bg-[#1E3A8A]/30",
    text: "text-[color:var(--color-blue-300)]",
  },
  "special edition": {
    wrapper: "bg-[#991B1B]/20",
    text: "text-[color:var(--color-red-400)]",
  },
};

interface Props {
  tag?: string | null;
}

export function PostTag({ tag }: Props) {
  if (!tag) return null;

  const style = TAG_STYLES[tag as TagKey];

  if (!style) return null;

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`h-7 px-3 py-2 rounded-full inline-flex items-center gap-1 ${style.wrapper}`}
      >
        {style.locked && (
          <HiLockClosed className={`${style.text} w-4 h-4`} />
        )}

        <span
          className={`max-h-6 text-center text-sm font-semibold font-['Eczar'] leading-6 ${style.text}`}
        >
          {tag}
        </span>
      </span>
    </div>
  );
}
