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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

const EMAIL = "josebfonte@gmail.com";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Download CV feedback: the PDF is a static asset so the download is
    // effectively instant — this donut is a brief decorative fill that then
    // flips to a success check.
    const [download, setDownload] = useState<{
        progress: number;
        done: boolean;
    } | null>(null);
    const downloadIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
        null,
    );
    const downloadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const handleClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    };

    const handleDownloadCv = () => {
        if (downloadIntervalRef.current)
            clearInterval(downloadIntervalRef.current);
        if (downloadTimeoutRef.current)
            clearTimeout(downloadTimeoutRef.current);

        setDownload({ progress: 0, done: false });

        downloadIntervalRef.current = setInterval(() => {
            setDownload((prev) => {
                if (!prev || prev.done) return prev;
                const next = prev.progress + 12;
                if (next >= 100) {
                    if (downloadIntervalRef.current)
                        clearInterval(downloadIntervalRef.current);
                    return { progress: 100, done: true };
                }
                return { progress: next, done: false };
            });
        }, 90);

        // Auto-dismiss a little after it lands on the success state.
        downloadTimeoutRef.current = setTimeout(() => setDownload(null), 2600);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (downloadIntervalRef.current)
                clearInterval(downloadIntervalRef.current);
            if (downloadTimeoutRef.current)
                clearTimeout(downloadTimeoutRef.current);
        };
    }, []);

    // Shared style for the three top-corner actions so they stay in sync:
    // Download CV | Contacts | Theme. gap-2 spaces Theme's icon from its label;
    // hover fades the label to the signal accent.
    const actionClass =
        "items-center gap-2 font-mono no-underline transition-colors hover:text-signal hover:no-underline";

    return (
        <div className="flex flex-row items-center gap-3 pr-4 pt-4">
            {/* Pulled out of the Contacts menu so it reads as the page's main
                call to action */}
            <Button asChild variant="link" className={actionClass}>
                <a
                    href="/jose-fonte-cv.pdf"
                    download
                    onClick={handleDownloadCv}
                >
                    Download CV
                </a>
            </Button>

            <span
                aria-hidden="true"
                className="select-none font-mono text-muted-foreground"
            >
                |
            </span>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link" className={actionClass}>
                        Contacts
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
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
                                <div className="flex flex-row gap-3 items-center transition-colors group-hover:text-signal">
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
                                <div className="flex flex-row gap-3 items-center transition-colors group-hover:text-signal">
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
                            className="group flex flex-row justify-between items-center gap-4 hover:cursor-pointer"
                        >
                            <div className="flex flex-row gap-3 items-center transition-colors group-hover:text-signal">
                                <Mail className="w-4" /> Email Me
                            </div>
                            <CopyIcon className="text-muted-foreground transition-colors group-hover:text-signal" />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <span
                aria-hidden="true"
                className="select-none font-mono text-muted-foreground"
            >
                |
            </span>

            <Button
                variant="link"
                onClick={handleClicked}
                aria-label="Toggle theme"
                className={actionClass}
            >
                Theme
                <span className="relative h-4 w-4">
                    <SunIcon className="absolute inset-0 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute inset-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </span>
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

            {download && (
                <div
                    role="status"
                    aria-live="polite"
                    className="animate-fade-up fixed bottom-6 left-6 z-50 flex w-fit items-center gap-3 rounded-md bg-primary px-4 py-2.5 font-mono text-sm text-primary-foreground shadow-lg"
                >
                    {download.done ? (
                        <span className="text-base text-signal">✓</span>
                    ) : (
                        <svg
                            className="h-5 w-5 -rotate-90"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                fill="none"
                                strokeWidth="3"
                                className="stroke-primary-foreground/25"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="stroke-signal transition-[stroke-dashoffset] duration-100 ease-linear"
                                strokeDasharray={2 * Math.PI * 9}
                                strokeDashoffset={
                                    2 * Math.PI * 9 * (1 - download.progress / 100)
                                }
                            />
                        </svg>
                    )}
                    {download.done ? "CV downloaded" : "Downloading CV…"}
                </div>
            )}
        </div>
    );
}
