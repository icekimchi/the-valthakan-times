"use client";
import { useState } from "react";
import Logo from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import SearchBar from "./SearchBar";


export default function Footer() {
    const [query, setQuery] = useState("");

    const handleSubmit = (v: string) => {
    console.log("Subscribe with:", v);
  };
    
    return (
      <div className="w-full px-5 py-20 items-center bg-[color:var(--card-bg-color)]">
        <Logo />
        <SearchBar
          placeholder="Enter your email"
          value={query}
          onChange={setQuery}
          onSubmit={handleSubmit} 
          showIcon={false}
        />
        <PrimaryButton
          text="Subscribe"
          showLeftIcon={false}
          showRightIcon={false}
          onClick={() => handleSubmit(query)}
        />
      </div>
    );
}