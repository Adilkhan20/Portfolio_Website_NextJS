const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iamaadilkhan.vercel.app";

const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "adilkhansumbal7@gmail.com";

export const siteConfig = {
  name: "Adil Khan",
  initials: "Adil",
  role: "Full-Stack Web Developer",
  location: "Pakistan",
  url: siteUrl,
  email,
  whatsapp: {
    number: "923307992299",
    message:
      "Hi Adil! I saw your portfolio and would like to discuss a project.",
  },
  description:
    "Adil Khan is a full-stack web developer specializing in Next.js, React, Node.js, Express, MongoDB and MySQL.",

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    github: "https://github.com/Adilkhan20",
    linkedin: "https://www.linkedin.com/in/adil-khan-7b56a8367/",
    instagram: "https://www.instagram.com/adilkhan_2299?igsh=cG5peGYwdzR3Zjd0",
    tiktok: "https://www.tiktok.com/@adilkhan.2299?_r=1&_t=ZS-98E3TRuQyfc",
    facebook: "https://www.facebook.com/share/1Fae4cpQSg/",
  },
};
