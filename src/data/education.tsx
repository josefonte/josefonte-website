export interface EducationDataType {
    institution: string;
    course: string;
    description: string[];
    badges?: string[];
    date: string;
    location?: string;
}

const data: EducationDataType[] = [
    {
        institution: "Universidade do Minho",
        course: "MSc in Software Engineering",
        description: [
            "At the moment, I’m attending my first year in Software Engineering, with my main interests being Distributed Systems, Software Development(Mobile & Web), AI and Product Design.",
        ],
        badges: [
            "Golang",
            "Erlang",
            "React",
            "React Native | Expo",
            "NodeJS",
            "MongoDB",
            "Typst & LaTeX",
            "Jupyter Notebooks | Numpy | Pandas | SKlearn | Seaborn | MatplotLib | TensorFlow | Keras ",
            "CUDA | OpenMP | MPI",
            "Ansible | Docker | GCloud | GKE | Kubernetes",
        ],
        date: "2023 - Present",
        location: "Braga, Portugal",
    },
    {
        institution: "Universidade do Minho",
        course: "BSc in Software Engineering",
        description: [
            "Finished my BSc in Software Engineering with a 14.5/20 and proceeded to a MSc in Software Engineering in order to deepen my knowledge in Distributed Systems, Software Development & Design and AI, ML & Data Science.",
            "The Bachelors degree has a project‑based learning approach, so most of the subjects include a project, which made me develop the ability to design, build and test applications in a dynamic, collaborative and high‑pressure environment.",
        ],
        badges: [
            "Java",
            "Python",
            "MySQL",
            "C/C++",
            "C#",
            "Haskell",
            "MatLab",
            "Knime",
            "Git/Github",
            "LaTeX",
        ],
        date: "2020 - 2023",
        location: "Braga, Portugal",
    },
    {
        institution: "Universidade do Minho",
        course: "BSc in Mechanical Engineering",
        description: [
            "Spent one year studying mechanical engineering and decided to change courses to software engineering.",
        ],
        badges: ["Python", "AutoCAD", "Fusion 360"],
        date: "2019 - 2020",
        location: "Braga, Portugal",
    },
];

export { data };
