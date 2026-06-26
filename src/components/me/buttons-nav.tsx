"use client";

import {
    MoonIcon,
    SunIcon,
    ArrowTopRightIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    VideoIcon,
    InstagramLogoIcon,
    CopyIcon,
    DownloadIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Mail } from "lucide-react";
import { SiGitlab } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

const EMAIL = "josebfonte@gmail.com";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div className="flex flex-row gap-3 pr-4 pt-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link" className="font-mono">
                        Contacts
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        {/*<DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <InstagramLogoIcon />
                                    <a>Instagram</a>
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem> 
                         <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.youtube.com/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <VideoIcon /> Youtube
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="group flex flex-row gap-2 min-w-40 justify-between hover:cursor-pointer">
                            <div className="flex flex-row gap-3 items-center ">
                                <SiGitlab className="w-4" /> GitLab
                            </div>
                            <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                <ArrowTopRightIcon />
                            </div>
                        </DropdownMenuItem>
                        */}

                        <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                                href="https://www.linkedin.com/in/jose-pedro-fonte/"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <LinkedInLogoIcon /> LinkedIn
                                </div>
                                <div className=" text-muted-foreground transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer group-hover:text-signal">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href="https://github.com/josefonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <GitHubLogoIcon /> GitHub
                                </div>
                                <div className=" text-muted-foreground transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer group-hover:text-signal">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onSelect={(e) => {
                                e.preventDefault();
                                handleCopyEmail();
                            }}
                            className="group flex flex-row justify-between items-center hover:cursor-pointer"
                        >
                            <div className="flex flex-row gap-3 items-center">
                                <Mail className="w-4" /> Email Me
                            </div>
                            <CopyIcon className="text-muted-foreground transition-colors group-hover:text-signal" />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 ">
                        <a
                            href="/jose-fonte-cv.pdf"
                            download
                            className="group flex flex-row gap-4 items-center hover:cursor-pointer"
                        >
                            Download CV{" "}
                            <DownloadIcon className="text-muted-foreground transition-colors group-hover:text-signal" />
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={handleClicked}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            {copied && (
                <div
                    role="status"
                    aria-live="polite"
                    className="animate-fade-up fixed inset-x-0 bottom-6 z-50 mx-auto flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-sm text-primary-foreground shadow-lg"
                >
                    <span className="text-signal">✓</span>
                    Email copied to clipboard
                </div>
            )}
        </div>
    );
}
