"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#services", label: "Services" },
    ],
    connect: [
      {
        href: `mailto:${siteConfig.email}`,
        label: "Email",
        icon: <FaEnvelope />,
      },
      {
        href: siteConfig.social.linkedin,
        label: "LinkedIn",
        icon: <FaLinkedin />,
      },
      { href: siteConfig.social.github, label: "GitHub", icon: <FaGithub /> },
      {
        href: siteConfig.social.instagram,
        label: "instagram",
        icon: <FaInstagram />,
      },
      {
        href: siteConfig.social.tiktok,
        label: "Tiktok",
        icon: <FaTiktok />,
      },
      {
        href: siteConfig.social.facebook,
        label: "Facebook",
        icon: <FaFacebook />,
      },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

      <Container className="py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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

            {/* Description */}
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Full-stack web developer creating responsive websites and reliable
              web applications. Transforming ideas into exceptional digital
              experiences.
            </p>

            {/* Quick Status */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                <span className="text-xs text-slate-400">
                  Available for projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-teal-300 transition-all duration-300"
                  >
                    <span className="h-px w-0 bg-teal-300/50 group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">
              Let's Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-sm text-slate-400 hover:text-teal-300 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center size-8 rounded-lg bg-white/5 border border-white/10 text-xs group-hover:bg-teal-300/10 group-hover:border-teal-300/30 transition-all duration-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className="mt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
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
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <span className="hidden sm:block text-slate-700">•</span>
            <p className="hidden sm:block">Based in {siteConfig.location}</p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Designed & Built with</span>

            <span>by Adil Khan</span>
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-300/10 to-transparent" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      </Container>
    </footer>
  );
}
