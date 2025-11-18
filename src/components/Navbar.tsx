"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import Logo from "./Logo";
import { useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";   
    } else {
      document.body.style.overflow = "auto";  
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-[#0C0922]/80
                    backdrop-brightness-[85%] backdrop-blur-[5px]
                    pl-5 pr-3.5 py-3 md:px-10 md:py-5 shadow-[0px_0px_20px_0px_rbga(67, 56, 202, 0.50)]">
      <div className="flex h-full items-center justify-between">
        <Logo/>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-[color:var(--color-blue-gray-50)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden text-white md:flex gap-6 justify-center text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 60px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 bg-[color:var(--color-blue-gray-900)] z-[100] md:hidden overflow-hidden"
          >
            <div className="h-full flex flex-col relative">
              {/* Menu Items */}
              <ul className="flex flex-col text-white text-lg text-center font-medium px-6">
                <li className="-mx-6 list-none">
                  <div className="ring-1 ring-[#302D9A]/20 divide-y divide-[#302D9A]/20 overflow-hidden">
                    {NAV_LINKS
                      .filter((l) => l.name !== "Patreon" && l.name !== "Shop")
                      .map((link) => (
                        <div key={link.name} className="py-[27px] flex items-center justify-center gap-3">
                          <img src={link.image} alt={link.name} className="h-5 w-5 object-contain" />
                          <Link href={link.href} onClick={() => setIsOpen(false)}>{link.name}</Link>
                        </div>
                      ))}
                  </div>
                </li>
                
                {/* Patreon & Shop */}
                <li className="list-none">
                  <div className="-mx-6 border border-[#302D9A]/20">
                    <div className="grid grid-cols-2 divide-x divide-[#302D9A]/20 items-stretch h-[159px]">
                      {NAV_LINKS.filter((l) => l.name === "Patreon" || l.name === "Shop").map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2-5 h-full py-[27px]"
                        >
                          <img src={link.image} alt={link.name} className="w-5 h-5" />
                          <span>{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>

              {/* Bottom Buttons */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-3 px-6 pb-6">
                <PrimaryButton text="Login" showLeftIcon={false} showRightIcon={false} />
                <SecondaryButton text="Partner With Us" showLeftIcon={false} showRightIcon={false} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
}
