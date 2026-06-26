import StreamingBio from "@/components/me/streaming-bio";

type TokenOptions = {
    className?: string;
    external?: boolean;
    href?: string;
};

const linkedTokenClass =
    "text-foreground/70 underline underline-offset-4 decoration-foreground/35 transition-colors hover:text-signal hover:decoration-signal";

const tokens = (text: string, options: TokenOptions = {}) =>
    (text.match(/\s*\S+\s*/g) ?? []).map((part) => ({
        ...options,
        text: part,
    }));

const paragraph = (text: string) => ({
    tokens: tokens(text),
});

const sections = [
    {
        prompt: "whoami",
        paragraphs: [
            paragraph(
                "Software Engineer with an MSc in Software Engineering (Universidade do Minho & LMU Munich)."
            ),
            paragraph(
                "Passionate about bringing products from idea to production with main interests in AI/ML, Robotics, Product Design, and Distributed Systems."
            ),
            paragraph(
                "Off the clock I love lifting, running, travelling, nature, podcasts, music, cinema, and keeping up with the latest tech trends."
            ),
        ],
    },
    {
        prompt: "now",
        paragraphs: [
            {
                tokens: [
                    ...tokens("Leading "),
                    {
                        className: linkedTokenClass,
                        external: true,
                        href: "https://www.explore.promptlyhealth.com/",
                        text: "Explore's Agent Harness",
                    },
                    { text: " " },
                    {
                        className: linkedTokenClass,
                        external: true,
                        href: "https://www.linkedin.com/company/promptlyhealth/",
                        text: "@ Promptly Health",
                    },
                    ...tokens(
                        ". Working on SoTA approaches to Agent Harness, Tool Design, Evals, and Monitoring/Observability."
                    ),
                ],
            },
        ],
    },
];

export default function Home() {
    return (
        <section className="-mt-[12px] pt-0 md:mt-0 md:pt-8">
            <h1 className="sr-only">José Fonte | AI/ML Engineer</h1>
            <StreamingBio sections={sections} />
        </section>
    );
}
