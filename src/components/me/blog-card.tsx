import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { IoLogoMedium } from "react-icons/io5";

interface CardProps {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    img?: string;
    categories: string[];
}

function cleanAndAddDot(inputString: string) {
    const withoutHtml = inputString.replace(/<figure>[\s\S]*?<\/figure>/g, "");
    const withoutTags = withoutHtml.replace(/<\/?[^>]+(>|$)/g, "");
    const withDots = withoutTags.replace(/(\.)(?![0-9])/g, "$1 ");
    const withLineBreaks = withDots.replace(/<br\s*\/?>/g, "\n");

    return withLineBreaks;
}

function convertDate(date: string) {
    const dateObject = new Date(date);

    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        dateObject
    );
    const year = dateObject.getFullYear();

    return `${month}, ${year}`;
}

export default function BlogCard({
    title,
    description,
    pubDate,
    link,
    img,
    categories,
}: CardProps) {
    const date = convertDate(pubDate.split(/\s+/)[0]);
    const desc = cleanAndAddDot(description);

    return (
        <Link href={link} target="_blank">
            <Card className="my-4 group hover:cursor-pointer hover:border-primary/70 hover:shadow-md backdrop-blur-sm">
                <CardHeader className="pb-1">
                    <CardTitle className="flex flex-row justify-between items-center">
                        <div className="text-xl">{title}</div>
                    </CardTitle>
                </CardHeader>
                <CardContent className=" font-light text-sm	pb-4">
                    <div className="flex flex-row gap-6 justify-between text-justify h-[100px] ">
                        <div className="w-full text-ellipsis overflow-hidden whitespace-pre-line">
                            {desc.replace(/^\n+/, "")}
                        </div>
                        {img && (
                            <Image
                                src={img}
                                alt={img}
                                width={500}
                                height={500}
                                priority={true}
                                className=" max-w-28 object-cover rounded-md"
                            />
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row justify-between pb-3">
                    <div className="flex flex-row gap-2 items-center h-6">
                        <div className="text-sm font-normal	text-muted-foreground">
                            {date}
                        </div>
                        <Separator orientation="vertical" />
                        <div className=" flex flex-row gap-2 ">
                            {categories.map((category, index) => (
                                <Badge key={index}> {category}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="group relative inline-flex h-8 w-10 items-center justify-center overflow-hidden font-medium text-primary transition-all duration-800 group-hover:w-32">
                        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-800 group-hover:opacity-100">
                            <span className="flex flex-row gap-1 items-center text-sm group-hover:underline">
                                <IoLogoMedium /> Read More
                            </span>
                        </div>
                        <div className="absolute right-0 bg-background">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
