export interface WorkDataType {
    company: string;
    role: string;
    description: string[];
    badges?: string[] | undefined;
    date: string;
    location?: string;
}

const WorkData: WorkDataType[] = [
    {
        company: "Colégio João Paulo II",
        role: "Assistant Teacher of Robotics",
        description: [
            "In a weekly robotics class, I teach programming and robotics in a fun and engaging way to kids from the 1st to 8th grade.",
            "Participated in National/European Robotics Competition with my students.",
            "Helped organize robotics events in the country.",
        ],
        badges: [
            "MicroBit",
            "Arduino",
            "Lego Mindstorms",
            "Scratch",
            "Bot'n Roll",
        ],
        date: "2020 - Present",
        location: "Braga, Portugal",
    },
    {
        company: "Sngular Portugal",
        role: "Full-Stack Software Engineer | Summer Intern ",
        description: [
            "Collaborated in a team of four summer interns to develop a JIRA App integrated in the Atlassian Ecosystem.",
            " The goal of the app was to manage tasks and subtasks inside JIRA tickets, with a backbone for admins to manage everything.",
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
            "Git/Gitlab",
        ],
        date: "Jun - Sept 2023 ",
        location: "Braga, Portugal",
    },
    {
        company: "CodeVision",
        role: "Full-Stack Software Engineer | Summer Intern ",
        description: [
            "Collaborated with a team to develop an internal tool that would connect international partners with the company.",
            "Worked with Entity ORM to manage multiple databases.",
            "At the end of the Summer Internship, I was able to deploy multiple features into production which made the experience really fulfilling.",
        ],
        badges: [
            ".Net Framework",
            "C#",
            "SQL Server",
            "Azure",
            "Git",
            "Entity ORM",
            "Agile",
        ],
        date: "Jun - Sept 2022 ",
        location: "Braga, Portugal",
    },
];

const VolWorkData: WorkDataType[] = [
    {
        company: "CESIUM",
        role: "Member of Department Recreative",
        description: [
            "Help organize events for the student community around the department.",
            "Integrated the Staff of SEI 24.",
        ],
        badges: [],
        date: "Sept 2023 - Present ",
        location: "Braga, Portugal",
    },
    {
        company: "CoderDojo Braga",
        role: "Mentor",
        description: [
            "Teach kids how to code in a fun and engaging way.",
            "Teach classes on Scratch and Python.",
        ],

        date: "Sept 2023 - Present ",
        location: "Braga, Portugal",
    },
    {
        company: "IEEE Student Branch UMinho",
        role: "Member of Program Comitee",
        description: [
            "Help organize workshopts, talks and other events for the academic community.",
            'Taught a workshop on "Version Control - Git & Github".',
        ],
        date: "Sept 2023 - Present ",
        location: "Braga, Portugal",
    },
];

export { WorkData, VolWorkData };
