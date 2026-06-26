"use client";

import { useEffect, useState } from "react";

// The bio reveals one word at a time, like a model streaming tokens — the one
// signature moment on the site. Full text is always in the DOM for screen
// readers (sr-only) and no-JS (noscript); the animated copy is aria-hidden.
// prefers-reduced-motion shows everything at once with a steady caret.
export default function StreamingBio({ text }: { text: string }) {
    const words = text.split(" ");
    const [count, setCount] = useState(0);
    const done = count >= words.length;

    useEffect(() => {
        if (count >= words.length) return;
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        // setState stays inside the callback (no synchronous effect updates):
        // reduced motion jumps straight to the full text on the next tick.
        const id = setTimeout(
            () => setCount((c) => (reduce ? words.length : c + 1)),
            reduce ? 0 : 35
        );
        return () => clearTimeout(id);
    }, [count, words.length]);

    return (
        <div>
            <p className="font-mono text-sm">
                <span className="text-signal">&gt;</span>{" "}
                <span className="text-muted-foreground">whoami</span>
            </p>
            <p className="mt-2 text-base leading-relaxed text-foreground/90">
                <span aria-hidden="true">
                    {words.slice(0, count).join(" ")}
                    <span
                        className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-signal ${
                            done ? "" : "animate-blink"
                        }`}
                    />
                </span>
                <span className="sr-only">{text}</span>
            </p>
            <noscript>
                <p className="mt-2 text-base leading-relaxed text-foreground/90">
                    {text}
                </p>
            </noscript>
        </div>
    );
}
