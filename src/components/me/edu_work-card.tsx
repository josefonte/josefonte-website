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

import { ReactElement, useState } from "react";

interface CardProps {
    title: string;
    subtitle: string;
    description: string[];
    badges?: string[];
    date: string;
    location?: string;
    customFields?: ReactElement;
}

export default function EduWorkCard({
    title,
    subtitle,
    description,
    badges,
    date,
    location,
    customFields,
}: CardProps) {
    const [expanded, setExpanded] = useState(false);
    const hasMore = (badges?.length ?? 0) > 0;

    return (
        <Card className="my-4 backdrop-blur-sm ">
            <CardHeader className="pb-3">
                <CardTitle className="flex flex-row justify-between items-center">
                    <div className="text-xl">{title}</div>
                    <div className="text-sm font-normal	text-muted-foreground subpixel-antialiased ">
                        {location}
                    </div>
                </CardTitle>
                <CardDescription className="flex flex-row justify-between items-start">
                    <div className="text-sm">{subtitle}</div>
                    <div className="text-xs font-normal	text-muted-foreground subpixel-antialiased">
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
                        <Badge key={index} className="mr-2 mb-2">
                            {badge}
                        </Badge>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}
