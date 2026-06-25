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
        institution: "LMU München",
        course: "MSc in Software Engineering | ERASMUS Exchange",
        description: [
            "Exchange Year at one of Germany's top universities, LMU München.",
            "Courses: Deep Learning and Artificial Intelligence, Machine Learning, Automated Machine Learning, German Language Courses A1.1 · A1.2.",
            'MSc Thesis: "VLM Training – Unified Internal Rewards in GRPO" supervised by Dr. Yunpu Ma (LMU) and PhD Student Jinhe Bi (LMU/Huawei).',
        ],
        date: "Sep 2024 - Aug 2025",
        location: "Munich, Germany",
    },
    {
        institution: "Universidade do Minho",
        course: "MSc in Software Engineering",
        description: [
            "My first year of my master's was a combination of some broad courses and then specialization in my main interests: Distributed Systems and Software Development (Mobile & Web).",
        ],
        badges: [
            "OpenMP, MPI, CUDA",
            "Jupyter Notebooks, Numpy, Pandas, Scikit-learn, Seaborn, Matplotlib, TensorFlow, Keras",
            "Ansible, Docker, GCloud, GKE",
            "Golang",
            "Java Reactive gRPC, ZeroMQ, Erlang, Maelstrom",
            "Java (Android), React Native",
            "Documentation (LaTeX, Typst)",
        ],
        date: "Sep 2023 - Aug 2025",
        location: "Braga, Portugal",
    },
    {
        institution: "Universidade do Minho",
        course: "BSc in Software Engineering",
        description: [
            "Finished my BSc in Software Engineering and proceeded to an MSc in Software Engineering in order to deepen my knowledge in Distributed Systems, Software Development & Design and AI, ML & Data Science.",
            "The Bachelor's degree has a project‑based learning approach, so most of the subjects include a project, which made me develop the ability to design, build and test applications in a dynamic, collaborative and high‑pressure environment.",
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
        ],
        date: "2020 - 2023",
        location: "Braga, Portugal",
    },
    {
        institution: "Universidade do Minho",
        course: "BSc in Mechanical Engineering",
        description: [
            "Spent one year studying Mechanical Engineering and decided to change degrees to Software Engineering.",
        ],
        date: "2019 - 2020",
        location: "Braga, Portugal",
    },
];

export { data };
