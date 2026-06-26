import { WorkDataType, WorkData, VolWorkData } from "@/data/work";
import EduWorkCard from "@/components/me/edu_work-card";
import PageHeader from "@/components/me/page-header";

export const metadata = { title: "Work" };

const workData: WorkDataType[] = WorkData;
const volWorkData: WorkDataType[] = VolWorkData;

export default function Work() {
    return (
        <div>
            <PageHeader path="work" />
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
            <h2 className="mt-10 mb-3 font-mono text-sm text-muted-foreground">
                <span className="text-signal">#</span> voluntary work
            </h2>
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
