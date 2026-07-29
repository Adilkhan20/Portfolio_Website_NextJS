"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

function IconBox({ children }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center size-10 rounded-lg bg-gray-100 text-gray-600">
      {children}
    </div>
  );
}

export default function ContactCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.message,
  )}`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.projectType
        ? `Project inquiry: ${form.projectType}`
        : "Project inquiry",
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: siteConfig.phone || "0330-799-2299",
      href: `tel:${siteConfig.phone || "+923307992299"}`,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: siteConfig.social.github,
      href: siteConfig.social.github,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: siteConfig.social.linkedin,
      href: siteConfig.social.linkedin,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      value: "Message on WhatsApp",
      href: whatsappUrl,
      target: "_blank",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="mb-3 text-2xl font-bold tracking-[1em] text-black uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-1xl sm:text-2xl font-bold text-gray-900">
            Have a project or opportunity?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Reach out for full-stack development roles, freelance projects, or
            collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.target ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors"
              >
                <IconBox>{item.icon}</IconBox>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                Project Type
              </label>
              <input
                type="text"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                placeholder="Website, app, collaboration"
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about the project or opportunity."
                required
                rows={5}
                className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Send Message
              <svg
                className="h-4 w-4"
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
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
