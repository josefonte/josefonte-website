import { EducationDataType, data } from "@/data/education";
import EduWorkCard from "@/components/me/edu_work-card";
import PageHeader from "@/components/me/page-header";

export const metadata = { title: "Education" };

function EduExtras({ entry }: { entry: EducationDataType }) {
    return (
        <>
            {entry.profiles?.map((profile) => (
                <div key={profile.label}>
                    <span className="inline-block font-medium mr-1 underline">
                        {profile.label}
                    </span>
                    : {profile.value}
                </div>
            ))}
            {entry.courses && (
                <div>
                    <span className="inline-block font-medium mr-1">
                        {entry.profiles
                            ? "Other Relevant Courses :"
                            : "Relevant Courses :"}
                    </span>
                    {entry.courses}
                </div>
            )}
        </>
    );
}

export default function Education() {
    return (
        <div>
            <PageHeader path="education" />
            {data.map((card, index) => {
                const hasExtras = Boolean(card.courses || card.profiles);
                return (
                    <EduWorkCard
                        key={index}
                        title={card.institution}
                        subtitle={card.course}
                        description={card.description}
                        badges={card.badges}
                        date={card.date}
                        location={card.location}
                        customFields={
                            hasExtras ? <EduExtras entry={card} /> : undefined
                        }
                    />
                );
            })}
        </div>
    );
}
