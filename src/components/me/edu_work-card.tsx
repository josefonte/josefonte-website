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
                                className="group inline-flex items-end gap-1 underline-offset-4 hover:text-signal hover:underline"
                            >
                                {title}
                                <ArrowUpRight className="mb-1 h-4 w-4 text-muted-foreground group-hover:text-signal" />
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
