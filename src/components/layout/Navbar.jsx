"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled
            ? "shadow-sm border-b border-gray-200"
            : "border-b border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between h-16">
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <span className="text-base font-semibold text-black">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ButtonLink
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              className="hidden md:inline-flex bg-gray-900 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md"
            >
              Contact Me
            </ButtonLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white pt-16">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base text-gray-800 border-b border-gray-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 text-center bg-gray-900 text-white text-sm py-3 rounded-md"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
