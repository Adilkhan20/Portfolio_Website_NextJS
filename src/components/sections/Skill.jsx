"use client";

import Container from "@/components/ui/Container";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Responsive interfaces with clean component structure and reusable UI patterns.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description:
      "APIs, authentication, and real-time logic built around real workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Databases",
    description: "Structured data modeling for product and user data.",
    skills: ["MongoDB", "SQL", "Prisma"],
  },
  {
    title: "Tools",
    description: "Daily development tools for version control and shipping.",
    skills: ["Git", "GitHub", "Vercel"],
  },
];

export default function Skill() {
  return (
    <section id="skills" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl mb-10 text-center sm:mx-auto sm:mb-14">
          <span className="mb-3 text-2xl font-bold tracking-[1em] text-black uppercase">
            Skills
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
