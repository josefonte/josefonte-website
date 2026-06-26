import { ProjectsCardType, data } from "@/data/projects";
import ProjectsCard from "@/components/me/projects-card";
import PageHeader from "@/components/me/page-header";

export const metadata = { title: "Projects" };

const projectsData: ProjectsCardType[] = data;

export default function Projects() {
    return (
        <div>
            <PageHeader path="projects" />
            <div className="grid grid-cols-1 gap-3">
                {projectsData.map((project, index) => (
                    <ProjectsCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        active={project.active}
                        href={project.href}
                        repo_link={project.repo_link}
                        icon={project.icon}
                        date={project.date}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>
    );
}
