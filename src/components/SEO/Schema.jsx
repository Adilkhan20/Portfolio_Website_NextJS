export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Adil Khan ",
          url: "https://iamaadilkhan.vercel.app",
          jobTitle: "Full-Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Adil Khan ",
          },
          sameAs: [
            "https://github.com/Adilkhan20",
            "https://www.linkedin.com/in/adil-khan-7b56a8367/",
            "https://www.instagram.com/adilkhan_2299?igsh=cG5peGYwdzR3Zjd0",
          ],
        }),
      }}
    />
  );
}
