import Link from "next/link";
import StreamingBio from "@/components/me/streaming-bio";

const bio =
    "AI/ML Engineer at Promptly Health, where I help make health data less chaotic and more accessible through AI-powered products. MSc in Software Engineering (Universidade do Minho & LMU Munich). I love bringing products from idea to production. Off the clock: lifting, running, nature, music, podcasts, travel, cinema, and keeping up with tech latest trends.";

export default function Home() {
    return (
        <section className="-mt-[12px] pt-0 md:mt-0 md:pt-8">
            <h1 className="sr-only">José Fonte — AI/ML Engineer</h1>
            <StreamingBio text={bio} />
            <p className="mt-8 font-mono text-sm text-muted-foreground">
                now <span className="text-signal">→</span> leading{" "}
                <Link
                    href="https://www.explore.promptlyhealth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline-offset-4 hover:text-signal hover:underline"
                >
                    Explore&apos;s Agent Harness
                </Link>{" "}
                <Link
                    href="https://www.linkedin.com/company/promptlyhealth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline-offset-4 hover:text-signal hover:underline"
                >
                    @ Promptly
                </Link>
            </p>
        </section>
    );
}
