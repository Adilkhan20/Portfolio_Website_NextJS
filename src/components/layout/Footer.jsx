"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
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
        label: "Instagram",
        icon: <FaInstagram />,
      },
      { href: siteConfig.social.tiktok, label: "TikTok", icon: <FaTiktok /> },
      {
        href: siteConfig.social.facebook,
        label: "Facebook",
        icon: <FaFacebook />,
      },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="#home"
              className="text-base font-semibold text-gray-900"
            >
              {siteConfig.name}
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Full-stack web developer creating responsive websites and web
              applications.
            </p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-gray-200 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Based in {siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
