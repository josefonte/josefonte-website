import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { ReactElement } from "react";

export interface ProjectsCardType {
    title: string;
    description: string;
    active: boolean;
    href?: string | undefined;
    repo_link?: string | undefined;
    icon?: ReactElement | undefined;
    date: string;
    badges?: string[] | undefined;
}

const data: ProjectsCardType[] = [
    {
        title: "University Projects",
        description:
            "All the projects I've done during my BSc and MSc in Software Engineering at the Universidade do Minho.",
        active: false,
        href: "",
        icon: <GitHubLogoIcon className="h-5 w-5 hover:scale-110 " />,
        date: "2020-2025",
        badges: [
            "Python",
            "Java",
            "C/C++",
            "Golang",
            "Haskell",
            "MySQL",
            "MERN Stack",
        ],
        repo_link: "https://github.com/josefonte/University",
    },
];

export { data };
