"use client";

import { useState } from "react";
import Logo from "./Logo";
import { PrimaryButton } from "./PrimaryButton";
import SearchBar from "./SearchBar";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const [query, setQuery] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (v: string) => {
    console.log("Subscribe with:", v);
    // Subscribtion 
  };

  return (
    <footer className="w-full bg-[color:var(--color-card-bg)]">
      <div className="mx-auto flex max-w-md flex-col items-stretch px-6 py-16 text-[color:var(--color-blue-gray-300)]">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 text-regular font-['Eczar']">
            The latest in all things fantasy
          </p>
        </div>

        {/* Email Input + Button */}
        <div className="mt-8 space-y-4">
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
            className="w-full"
          />
        </div>

        {/* Checkbox */}
        <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed">
          <input
            type="checkbox"
            className="mt-[2px] h-4 w-4 rounded border border-[color:var(--color-card-stroke)] bg-transparent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I consent to receive newsletters via email.{" "}
            <a href="/terms" className="underline">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy policy
            </a>
            .
          </span>
        </label>

        {/* SocialLinks */}
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>

        <div className="mt-8 h-px w-full bg-[color:var(--color-card-stroke)]/20" />

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-[color:var(--color-blue-gray-400)]">
          © 2025 The Valthakan Times.{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline">
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
}
