"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Menu, Download } from "lucide-react";
import {
    MoonIcon,
    SunIcon,
    ArrowTopRightIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { allTabs } from "./navbar";

const contacts = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jose-pedro-fonte/",
        icon: <LinkedInLogoIcon />,
    },
    {
        name: "Github",
        href: "https://github.com/josefonte",
        icon: <GitHubLogoIcon />,
    },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const [dragX, setDragX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [closing, setClosing] = useState(false);
    const drag = useRef({ startX: 0, active: false, width: 0, moved: false });
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    // Download CV feedback: the PDF is a static asset so the download is
    // effectively instant — this donut is a brief decorative fill that then
    // flips to a success check. Mirrors the desktop ButtonsNav behaviour.
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

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    const handleDownloadCv = () => {
        if (downloadIntervalRef.current)
            clearInterval(downloadIntervalRef.current);
        if (downloadTimeoutRef.current)
            clearTimeout(downloadTimeoutRef.current);

        setOpen(false);
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
            if (downloadIntervalRef.current)
                clearInterval(downloadIntervalRef.current);
            if (downloadTimeoutRef.current)
                clearTimeout(downloadTimeoutRef.current);
        };
    }, []);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        drag.current = {
            startX: e.clientX,
            active: true,
            width: e.currentTarget.offsetWidth,
            moved: false,
        };
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.startX;
        if (!drag.current.moved && dx > 8) {
            drag.current.moved = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            setDragging(true);
        }
        if (drag.current.moved) setDragX(Math.max(0, dx));
    };

    const onPointerUp = () => {
        if (!drag.current.active) return;
        const shouldClose = drag.current.moved && dragX > drag.current.width / 3;
        drag.current.active = false;
        setDragging(false);
        if (shouldClose) {
            // Continue the slide off-screen from where the finger let go.
            setClosing(true);
            setDragX(drag.current.width);
        } else {
            setDragX(0);
        }
    };

    // Fires when the off-screen slide finishes; only then unmount the sheet.
    const onTransitionEnd = () => {
        if (closing) setOpen(false);
    };

    // Reset drag state on (re)open so the enter animation starts clean.
    const handleOpenChange = (next: boolean) => {
        if (next) {
            setClosing(false);
            setDragX(0);
        }
        setOpen(next);
    };

    // Suppress the click that follows a drag so swiping doesn't trigger a nav link.
    const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
        }
    };

    return (
        <>
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <div className="pr-4 pt-4">
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
            </div>

            <SheetContent
                side="right"
                className="flex flex-col gap-4 [&>button]:hidden"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onClickCapture={onClickCapture}
                onTransitionEnd={onTransitionEnd}
                style={{
                    transform: `translateX(${dragX}px)`,
                    transition: dragging ? "none" : "transform 0.3s ease",
                    // Suppress Radix's own exit animation while we drag it out,
                    // so the two don't fight and snap the panel back open first.
                    animation: closing ? "none" : undefined,
                    touchAction: "pan-y",
                }}
            >
                <SheetTitle className="sr-only">Menu</SheetTitle>

                <nav className="mt-6 flex flex-col gap-1">
                    {allTabs.map((tab) => {
                        const href = tab.id === "about" ? "/" : "/" + tab.id;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={tab.id}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`${
                                    isActive ? "bg-accent font-medium" : ""
                                } flex items-center gap-3 rounded-md px-3 py-3 text-base hover:bg-accent`}
                            >
                                {isActive ? tab.icon_bold : tab.icon_light}
                                {tab.name}
                            </Link>
                        );
                    })}
                </nav>

                <Separator />

                {/* Pulled out of the Contacts list so it reads as the shelf's
                    main call to action, mirroring the desktop top-corner action. */}
                <a
                    href="/jose-fonte-cv.pdf"
                    download
                    onClick={handleDownloadCv}
                    className="flex items-center gap-3 rounded-md px-3 py-3 font-mono text-base transition-colors hover:bg-accent hover:text-signal"
                >
                    <Download className="w-4" />
                    Download CV
                </a>

                <Separator />

                <div className="flex flex-col gap-1">
                    <p className="px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Contacts
                    </p>
                    {contacts.map((contact) => (
                        <Link
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            className="group flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-signal"
                        >
                            <span className="flex items-center gap-3">
                                {contact.icon}
                                {contact.name}
                            </span>
                            <ArrowTopRightIcon className="text-muted-foreground transition duration-300 group-hover:rotate-45 group-hover:text-signal" />
                        </Link>
                    ))}
                </div>

                <Separator />

                <div className="flex items-center justify-between px-3">
                    <span className="text-base">Theme</span>
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>

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
        </>
    );
}
