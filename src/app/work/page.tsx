import { WorkDataType, WorkData, VolWorkData } from "@/data/work";
import EduWorkCard from "@/components/me/edu_work-card";
const workData: WorkDataType[] = WorkData;
const volWorkData: WorkDataType[] = VolWorkData;

export default function Work() {
    return (
        <div>
            {workData.map((card, index) => (
                <EduWorkCard
                    key={index}
                    title={card.company}
                    subtitle={card.role}
                    description={card.description}
                    badges={card.badges}
                    date={card.date}
                    location={card.location}
                />
            ))}
            <div className="text-xl font-semibold underline">
                {" "}
                Voluntary Work
            </div>
            {volWorkData.map((card, index) => (
                <EduWorkCard
                    key={index}
                    title={card.company}
                    subtitle={card.role}
                    description={card.description}
                    badges={card.badges}
                    date={card.date}
                    location={card.location}
                />
            ))}
        </div>
    );
}
