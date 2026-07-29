"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4"
      />
    </svg>
  );
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white lg:grid-cols-2">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]">
        <Image
          src={project.image}
          alt={`${project.title} application interface`}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {project.breadcrumb || project.category}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {technology}
            </span>
          ))}
        </div>
        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md flex items-center gap-2"
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </ButtonLink>
            )}

            {project.githubUrl && (
              <ButtonLink
                href={project.githubUrl}
                variant="secondary"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-semibold px-4 py-2.5 rounded-md flex items-center gap-2"
              >
                <svg
                  className="h-4 w-4"
                  fill="#374151"
                  viewBox="0 0 24 24"
                  style={{ color: "#374151" }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
