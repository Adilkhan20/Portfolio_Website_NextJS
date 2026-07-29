"use client";

import Container from "@/components/ui/Container";

export default function About() {
  const experiences = [
    {
      year: "2025",
      title: "Weather & Movie App",
      description:
        "Built responsive web apps using public APIs as part of learning full-stack development.",
    },
    {
      year: "2025 - 2026",
      title: "DTX Exchange",
      description:
        "Built a trading platform demo with real-time price updates using React and Node.js.",
    },
    {
      year: "2025",
      title: "Chat Application",
      description:
        "Built a real-time chat app with authentication and responsive UI.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-gray-50 py-20">
      <Container className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="mb-3 text-2xl font-bold tracking-[1em] text-black uppercases">
            About Me
          </span>

          <p className="mt-6 text-base leading-8 text-gray-700 max-w-2xl mx-auto">
            I&apos;m a Computer Science graduate and full-stack developer
            focused on React, Next.js, and Node.js. I enjoy building complete
            web applications &ndash; from the database up to the interface
            &ndash; and I&apos;m currently looking for opportunities to keep
            learning and contribute to real projects.
          </p>
        </div>

        <div className="mt-16  gap-8 lg:grid-cols-2 lg:gap-10 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              My Journey
            </h3>

            <div className="space-y-8 relative">
              <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-teal-200"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-teal-100 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">
                      {exp.year}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-2">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
