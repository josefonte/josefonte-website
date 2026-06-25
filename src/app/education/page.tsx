import { EducationDataType, data } from "@/data/education";
import EduWorkCard from "@/components/me/edu_work-card";
const eduData: EducationDataType[] = data;

function CustomFields(props: { index: number }) {
    const { index } = props;

    const coursesData = [
        "",
        "High Performance Computing, AI & ML, Cloud Applications and Services, Software Development, Network Services Engineering",
        "Functional Programming, Imperative Programming, Object Oriented Programming, Algorithms and Complexity, Operating Systems, Distributed Systems, Databases, Computer Networks & Communications, Compilers & Language Parsers, Artificial Intelligence, Machine Learning",
        "Calculus I, Calculus II, Linear Algebra, Material Science I, Material Science II, Technical Drawing, 3D Modelling/CAD",
    ];

    const profiles = {
        "Distributed Systems Courses":
            "Paradigms of Distributed Systems | Large Scale Distributed Systems | Fault Tolerance",

        "Software Engineering Courses":
            "Mobile Software Development | SW Analysis, Transformation and Testing | Data Science for SW Engineers",
    };
    return (
        <>
            {index == 1 ? (
                <>
                    <div>
                        <div className="inline-block font-medium mr-1 underline">
                            Distributed Systems Courses
                        </div>{" "}
                        : {profiles["Distributed Systems Courses"]}
                    </div>
                    <div>
                        <div className="inline-block font-medium mr-1 underline">
                            Software Engineering Courses
                        </div>{" "}
                        : {profiles["Software Engineering Courses"]}
                    </div>
                </>
            ) : null}
            {coursesData[index] !== "" ? (
                <div>
                    <div className="inline-block font-medium mr-1 ">
                        {index == 1
                            ? "Other Relevant Courses :"
                            : "Relevant Courses :"}
                    </div>
                    {coursesData[index]}
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
