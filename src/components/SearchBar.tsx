"use client"
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;         
  value?: string;               
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  showIcon?: boolean;         
  label?: string;  
  formId?: string;            
}

export default function SearchBar({
  placeholder = "Search for Newsletters",
  value,
  onChange,
  onSubmit,
  showIcon = true,              
  label = "Search",  
  formId,           
}: SearchBarProps) {
  return (
    <form
      id={formId}  
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(value ?? "");
      }}
      className="h-[52px]"
    >
      <div
        className="group flex h-full w-full items-center gap-4 rounded-lg border border-[#302D9A]/30 bg-white/5 px-4 backdrop-blur-sm transition focus-within:border-[#302D9A]/50"
      >
        {showIcon && (
          <Search
            aria-hidden
            className="size-5 shrink-0 text-[color:var(--color-blue-gray-300)]"
          />
        )}

        <label htmlFor="search-input" className="sr-only">
          {placeholder}
        </label>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[16px] font-['inter'] placeholder:text-slate-300/80 focus:outline-none"
        />
      </div>
    </form>
  );
}
