"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";

import { ReactElement, ReactNode, useState } from "react";

interface CardProps {
    title: string;
    titleHref?: string;
    subtitle: string;
    description: ReactNode[];
    badges?: string[];
    date: string;
    location?: string;
    customFields?: ReactElement;
}

export default function EduWorkCard({
    title,
    titleHref,
    subtitle,
    description,
    badges,
    date,
    location,
    customFields,
}: CardProps) {
    const [expanded, setExpanded] = useState(false);
    const hasMore = (badges?.length ?? 0) > 0 || Boolean(customFields);

    // Keep the external-link arrow glued to the last word so it never orphans
    // onto its own line when the title wraps (notably on mobile).
    const titleWords = title.trim().split(/\s+/);
    const lastWord = titleWords.pop() ?? title;
    const leadWords = titleWords.join(" ");

    return (
        <Card className="my-4 backdrop-blur-sm ">
            <CardHeader className="pb-3">
                <CardTitle className="flex flex-row justify-between items-center gap-3">
                    <div className="text-xl font-display tracking-tight">
                        {titleHref ? (
                            <a
                                href={titleHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group underline-offset-4 hover:text-signal hover:underline"
                            >
                                {leadWords && `${leadWords} `}
                                <span className="whitespace-nowrap">
                                    {lastWord}
                                    <ArrowUpRight
                                        aria-hidden
                                        className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px align-middle text-muted-foreground group-hover:text-signal"
                                    />
                                </span>
                            </a>
                        ) : (
                            title
                        )}
                    </div>
                    <div className="font-mono text-xs font-normal text-muted-foreground text-right shrink-0">
                        {location}
                    </div>
                </CardTitle>
                <CardDescription className="flex flex-row justify-between items-start gap-3">
                    <div className="text-sm">{subtitle}</div>
                    <div className="font-mono text-xs font-normal text-muted-foreground text-right shrink-0">
                        {date}
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className=" font-light text-sm	pb-5 leading-relaxed">
                <ul className=" list-disc ">
                    {description.map((point, index) => (
                        <li key={index} className="ml-3.5 mb-1.5">
                            {point}
                        </li>
                    ))}
                </ul>
                {expanded && customFields}
                {hasMore && (
                    <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-expanded={expanded}
                        className="mt-2 ml-auto flex flex-row items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {expanded ? "Show less" : "Read more"}
                        <ChevronDownIcon
                            className={`transition-transform ${
                                expanded ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                )}
            </CardContent>
            {expanded && (badges?.length ?? 0) > 0 && (
                <CardFooter className={`flex flex-row flex-wrap pb-4`}>
                    {badges?.map((badge, index) => (
                        <Badge
                            key={index}
                            variant="outline"
                            className="mr-2 mb-2 rounded-md font-mono text-[11px] font-normal text-muted-foreground"
                        >
                            {badge}
                        </Badge>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}
