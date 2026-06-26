import type { ReactNode } from "react";

export interface WorkDataType {
    company: string;
    role: string;
    description: ReactNode[];
    badges?: string[] | undefined;
    date: string;
    location?: string;
    link?: string;
}

const WorkData: WorkDataType[] = [
    {
        company: "Promptly Health",
        role: "AI/ML Engineer | Full-Time",
        description: [    
          "Working with AI in the medical domain at a high-growth Health Data startup.",
          "Part of a small team working on agents, medical data, post-training models, MLOps pipelines.",
(
            <span key="explore">
                Leading the development of{" "}
                <a
                    href="https://www.explore.promptlyhealth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-signal hover:underline"
                >
                    Explore
                </a>
                &apos;s Agent Harness. A platform to explore and build insights
                on medical databases through Natural Language. Work on Agent
                Harness, Tool Design, RAG Systems, Evals,
                Observability/Monitoring.
            </span>
          ),
          
        ],
        badges: [
            "Python",
            "FastAPI",
            "Agno",
            "OpenRouter | AWS Bedrock",
            "Langfuse",
            "QdrantDB",
            "OMOP CDM",
            "PostgreSQL",
            "Docker",
        ],
        date: "Mar 2025 - Present",
        location: "Porto, Portugal | Remote",
        link: "https://promptlyhealth.com/pt",
    },
    {
        company: "Promptly Health",
        role: "AI/ML Engineer | Summer Intern",
        description: [
            "Worked as an AI/ML Engineer, solo and with high agency.",
            "Project: Chat to DB — an agent to interact with medical databases.",
            "Researched, documented, developed and measured multiple PoCs with different SoTA approaches, and built an MVP with Streamlit.",
        ],
        badges: [
            "Python",
            "Langchain",
            "Ollama",
            "HuggingFace",
            "ChromaDB",
            "PostgreSQL",
            "Docker",
            "Streamlit",
        ],
        date: "Jun - Aug 2024",
        location: "Porto, Portugal | Remote",
        link: "https://promptlyhealth.com/pt",
    },
    {
        company: "Colégio João Paulo II",
        role: "Assistant Teacher of Robotics",
        description: [
            "Taught a weekly robotics extracurricular class to kids from the 1st to 9th grade, focused on logical thinking and the basics of computers, electronics and code.",
            "Participated in National/European Robotics Competitions with my students.",
            "Helped organize robotics events in the country.",
        ],
        badges: [
            "MicroBit",
            "Arduino",
            "Lego Mindstorms",
            "Scratch",
            "Bot'n Roll",
        ],
        date: "Sept 2021 - Jun 2024",
        location: "Braga, Portugal",
        link: "https://cjp.com.pt/",
    },
    {
        company: "Sngular Portugal",
        role: "Full-Stack Software Engineer | Summer Intern",
        description: [
            "Collaborated in a team of four summer interns to develop a JIRA App integrated in the Atlassian Ecosystem.",
            "The goal of the app was to manage tasks and subtasks inside JIRA tickets, with a backbone for admins to manage everything.",
            "At the end of the Summer Internship, my team was able to develop, implement and test every feature.",
        ],
        badges: [
            "MongoDB",
            "Express",
            "NodeJS",
            "React",
            "Atlassian Design System",
            "JIRA",
            "Confluence",
            "Git/GitLab",
        ],
        date: "Jun - Sept 2023",
        location: "Braga, Portugal",
        link: "https://www.linkedin.com/company/sngular/",
    },
    {
        company: "CodeVision",
        role: "Full-Stack Software Engineer | Summer Intern",
        description: [
            "Collaborated with a team to develop an internal tool that would connect international partners with the company.",
            "Worked with Entity ORM to manage multiple databases.",
            "At the end of the Summer Internship, I was able to deploy multiple features into production which made the experience really fulfilling.",
        ],
        badges: [
            ".NET Framework",
            "C#",
            "SQL Server",
            "Azure",
            "Git",
            "Entity ORM",
            "Agile",
        ],
        date: "Jun - Sept 2022",
        location: "Braga, Portugal",
        link: "https://www.e-schooling.com/en",
    },
];

const VolWorkData: WorkDataType[] = [
    {
        company: "CESIUM",
        role: "Member of Recreational Department",
        description: [
            "Help organize events for the student community around the informatics department.",
            "Integrated the Staff of SEI 2024 and 2025.",
        ],
        badges: [],
        date: "2023 - 2024",
        location: "Braga, Portugal",
        link: "https://cesium.di.uminho.pt/pt",
    },
    {
        company: "CoderDojo Braga",
        role: "Mentor",
        description: [
            "Teach kids how to code in a fun and engaging way.",
            "Teach classes on Scratch, Python and WebDev.",
        ],

        date: "2023 - 2024",
        location: "Braga, Portugal",
        link: "https://coderdojobraga.org/",
    },
    {
        company: "IEEE Student Branch UMinho",
        role: "Member of Program Committee",
        description: [
            "Help organize workshops, talks and other events targeted at the engineering academic community.",
            "Lead some technical workshops on SW Eng topics (Git/GitHub, Python, etc)",
        ],
        date: "2023 - 2025",
        location: "Braga, Portugal",
        link: "https://um.ieee-pt.org/",
    },
];

export { WorkData, VolWorkData };
