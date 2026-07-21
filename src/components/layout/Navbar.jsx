"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
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
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/10"
          : "bg-slate-950/20 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <Container className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="relative z-10 flex items-center gap-3 group"
        >
          {/* Logo Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative grid size-10 sm:size-12 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 text-white font-bold shadow-lg shadow-teal-500/20">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </div>
          </div>

          {/* Logo Text */}
          <div className="hidden sm:flex flex-col">
            <span className="text-sm sm:text-base font-bold text-white leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-xs text-teal-300/80 font-medium tracking-wide">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Contact Button - Desktop */}
          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            className="hidden lg:inline-flex bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white border-0 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30"
          >
            <span className="flex items-center gap-2">
              Let's Talk
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </ButtonLink>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 lg:hidden group"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative size-10 sm:size-12 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-slate-950 border-l border-white/10 shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Mobile Nav Items */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-semibold text-slate-300 hover:text-teal-300 hover:bg-white/5 transition-all duration-300 group"
                      >
                        <span className="text-xs font-bold text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                        <svg
                          className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 text-teal-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="mt-auto space-y-6">
                  {/* Contact Info */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-300/20">
                    <p className="text-sm text-slate-300 mb-2">
                      Let's work together!
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  {/* CTA Button */}
                  <ButtonLink
                    href={`mailto:${siteConfig.email}`}
                    className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white border-0 shadow-lg shadow-teal-500/20"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start a Project
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </ButtonLink>

                  {/* Social Proof */}
                  <div className="text-center">
                    <p className="text-xs text-slate-500">
                      Available for freelance • {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
