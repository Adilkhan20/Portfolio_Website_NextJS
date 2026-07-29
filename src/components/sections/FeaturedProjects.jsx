
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-gray-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Some things I've built"
          description="A few projects that show how I approach full-stack development, from database design to real-time features."
        />

        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
