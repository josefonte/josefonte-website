import { EducationDataType, data } from "@/data/education";
import EduWorkCard from "@/components/me/edu_work-card";
const eduData: EducationDataType[] = data;

function CustomFields(props: { index: number }) {
    const { index } = props;

    const coursesData = [
        "High Performance Computing, AI & ML, Cloud Applications and Services, Formal Methods, Software Development, Network Services Engineering",
        "Functional, Imperative and Object Oriented Programming, Algorithms & Performance, Operating Systems, Distributed Systems, DataBases, Computer Networks & Communications, Compilers & Language Processing, Artificial Intelligence, Machine Learning",
        "Calculus I and II, Linear Algebra, Material Science I and II, Technical Drawing, 3D Modelling/CAD",
    ];

    const skills = [
        "Performance Analysis (Profilling), Optimizations & Parallelized Execution, Data Analysis & Visualization, MicroServices, Restful APIs, Cloud Computing, Security, Scalability, Fault Tolerance, Load Balancing,",
        "Design Systems, Model & Deploy Data Layers, Different Programming Paradigms, Version Control, Debug, Test & Document",
        "",
    ];

    const profiles = {
        "Distribution Systems Profile":
            "Paradigms of Distributed Systems | Fault Tolerance | Large Scale Distributed Systems",

        "Software Engineering Profile":
            "Mobile Development | SW Analysis, Transformation and Testing | Data Science for SW Engineers",
    };
    return (
        <>
            {index == 0 ? (
                <div>
                    <div className="inline-block font-medium mr-1 underline">
                        Distribution Systems Profile
                    </div>{" "}
                    : {profiles["Distribution Systems Profile"]}
                    <div className="inline-block font-medium mr-1 underline">
                        Software Engineering Profile
                    </div>{" "}
                    : {profiles["Software Engineering Profile"]}
                </div>
            ) : null}
            {coursesData[index] !== "" ? (
                <div>
                    <div className="inline-block font-medium mr-1 ">
                        Relevant Courses :
                    </div>
                    {coursesData[index]}
                </div>
            ) : null}

            {skills[index] !== "" ? (
                <div>
                    <div className="inline-block font-medium mr-1">
                        Skills :
                    </div>
                    {skills[index]}
                </div>
            ) : null}
        </>
    );
}

export default function Education() {
    return (
        <div>
            {eduData.map((card, index) => (
                <EduWorkCard
                    key={index}
                    title={card.institution}
                    subtitle={card.course}
                    description={card.description}
                    badges={card.badges}
                    date={card.date}
                    location={card.location}
                    customFields={<CustomFields index={index} />}
                />
            ))}
        </div>
    );
}
