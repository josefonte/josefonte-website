"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";

type StreamingToken = {
    className?: string;
    external?: boolean;
    href?: string;
    text: string;
};

type StreamingParagraph = {
    tokens: StreamingToken[];
};

type StreamingSection = {
    paragraphs: StreamingParagraph[];
    prompt: string;
};

type VisibleStreamingState = {
    done: boolean;
    visibleCounts: number[];
};

export function getVisibleStreamingState(
    count: number,
    tokenCounts: number[]
): VisibleStreamingState {
    const total = tokenCounts.reduce((sum, tokenCount) => sum + tokenCount, 0);
    let remaining = Math.min(Math.max(count, 0), total);

    return {
        done: remaining >= total,
        visibleCounts: tokenCounts.map((tokenCount) => {
            const visible = Math.min(remaining, tokenCount);
            remaining -= visible;
            return visible;
        }),
    };
}

function sectionText(section: StreamingSection) {
    return [
        `> ${section.prompt}`,
        ...section.paragraphs.map((paragraph) =>
            paragraph.tokens.map((token) => token.text).join("")
        ),
    ].join("\n");
}

// The bio reveals one token at a time, like a model streaming responses.
// Full text is always in the DOM for screen readers (sr-only) and no-JS
// (noscript); the animated copy is aria-hidden. prefers-reduced-motion shows
// everything at once with a steady caret.
export default function StreamingBio({
    sections,
}: {
    sections: StreamingSection[];
}) {
    const tokenCounts = useMemo(
        () =>
            sections.map(
                (section) =>
                    1 +
                    section.paragraphs.reduce(
                        (sum, paragraph) => sum + paragraph.tokens.length,
                        0
                    )
            ),
        [sections]
    );
    const totalTokens = tokenCounts.reduce(
        (sum, tokenCount) => sum + tokenCount,
        0
    );
    const [count, setCount] = useState(0);
    const { visibleCounts, done } = getVisibleStreamingState(count, tokenCounts);

    useEffect(() => {
        if (count >= totalTokens) return;
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        // setState stays inside the callback (no synchronous effect updates):
        // reduced motion jumps straight to the full text on the next tick.
        const id = setTimeout(
            () => setCount((c) => (reduce ? totalTokens : c + 1)),
            reduce ? 0 : 35
        );
        return () => clearTimeout(id);
    }, [count, totalTokens]);

    const caret = (
        <span
            className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-signal ${
                done ? "" : "animate-blink"
            }`}
        />
    );
    const renderToken = (token: StreamingToken, index: number) => {
        if (token.href) {
            return (
                <Link
                    key={index}
                    href={token.href}
                    target={token.external ? "_blank" : undefined}
                    rel={token.external ? "noopener noreferrer" : undefined}
                    className={token.className}
                >
                    {token.text}
                </Link>
            );
        }

        if (token.className) {
            return (
                <span key={index} className={token.className}>
                    {token.text}
                </span>
            );
        }

        return <Fragment key={index}>{token.text}</Fragment>;
    };
    const renderParagraphs = (
        section: StreamingSection,
        visibleCount: number,
        sectionDone: boolean
    ) => {
        let remaining = Math.max(visibleCount - 1, 0);

        return section.paragraphs.map((paragraph, paragraphIndex) => {
            const visibleTokens = Math.min(remaining, paragraph.tokens.length);
            remaining -= visibleTokens;

            if (visibleTokens === 0 && !sectionDone) return null;

            const paragraphDone =
                visibleTokens >= paragraph.tokens.length || sectionDone;

            return (
                <p
                    key={paragraphIndex}
                    className="mt-2 text-base leading-relaxed text-foreground/90 text-justify"
                >
                    {paragraph.tokens
                        .slice(0, visibleTokens)
                        .map(renderToken)}
                    {!paragraphDone ? caret : null}
                </p>
            );
        });
    };

    return (
        <div>
            {sections.map((section, sectionIndex) => {
                const visibleCount = visibleCounts[sectionIndex] ?? 0;
                if (visibleCount === 0) return null;

                const sectionDone = visibleCount >= tokenCounts[sectionIndex];

                return (
                    <section
                        key={section.prompt}
                        className={sectionIndex === 0 ? "" : "mt-8"}
                    >
                        <p className="font-mono text-sm">
                            <span className="text-signal">&gt;</span>{" "}
                            <span className="text-muted-foreground">
                                {section.prompt}
                            </span>
                            {visibleCount === 1 ? caret : null}
                        </p>
                        <div aria-hidden="true">
                            {renderParagraphs(
                                section,
                                visibleCount,
                                sectionDone
                            )}
                        </div>
                        <span className="sr-only">{sectionText(section)}</span>
                    </section>
                );
            })}
            <noscript>
                {sections.map((section, sectionIndex) => (
                    <section
                        key={section.prompt}
                        className={sectionIndex === 0 ? "" : "mt-8"}
                    >
                        <p className="font-mono text-sm">
                            <span className="text-signal">&gt;</span>{" "}
                            <span className="text-muted-foreground">
                                {section.prompt}
                            </span>
                        </p>
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                            <p
                                key={paragraphIndex}
                                className="mt-2 text-base leading-relaxed text-foreground/90 text-justify"
                            >
                                {paragraph.tokens.map(renderToken)}
                            </p>
                        ))}
                    </section>
                ))}
            </noscript>
        </div>
    );
}
