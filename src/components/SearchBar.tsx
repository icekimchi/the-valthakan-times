"use client"
import { Search } from "lucide-react";

/**
 * - Fixed: 390x52
 * - 8px radius, subtle 1px border with ~30% opacity
 * - Slight background blur
 */
export default function SearchBar({
  placeholder = "Search for Newsletters",
  value,
  onChange,
  onSubmit,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
}) {
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(value ?? "");
      }}
      className="w-[390px] h-[52px]"
    >
      <div
        className="group flex h-full w-full items-center gap-4 rounded-lg border border-[#302D9A]/30 bg-white/5 px-4 backdrop-blur-sm transition focus-within:border-[#302D9A]/50"
      >
        <Search aria-hidden className="size-5 shrink-0 opacity-80 group-focus-within:opacity-100" />

        <label htmlFor="search-input" className="sr-only">
          {placeholder}
        </label>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-slate-200 placeholder:text-slate-300/80 focus:outline-none"
        />
      </div>
    </form>
  );
}
