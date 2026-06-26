"use client";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import {
    FileText,
    UserRound,
    Briefcase,
    Archive,
    Camera,
} from "lucide-react";

export const allTabs = [
    {
        id: "about",
        name: "About",
        icon_light: (
            <UserRound
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <UserRound
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.75}
            />
        ),
    },

    {
        id: "work",
        name: "Work",
        icon_light: (
            <Briefcase
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <Briefcase
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
    {
        id: "education",
        name: "Education",
        icon_light: (
            <FileText
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2}
            />
        ),
        icon_bold: (
            <FileText
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.75}
            />
        ),
    },

    {
        id: "projects",
        name: "Projects",
        icon_light: (
            <Archive className=" subpixel-antialiased h-3.5 " strokeWidth={2} />
        ),
        icon_bold: (
            <Archive
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
    {
        id: "photos",
        name: "Photos",
        icon_light: (
            <Camera className=" subpixel-antialiased h-3.5 " strokeWidth={2} />
        ),
        icon_bold: (
            <Camera
                className=" subpixel-antialiased h-3.5 "
                strokeWidth={2.5}
            />
        ),
    },
];

function useActiveTabIndex() {
    const pathname = usePathname();
    const currentTab = pathname === "/" ? "about" : pathname.slice(1);
    const index = allTabs.findIndex((tab) => tab.id === currentTab);
    return index === -1 ? null : index;
}

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    // Derive the active tab from the URL so the indicator follows any
    // navigation, not just clicks on the navbar's own links.
    const activeTabIndex = useActiveTabIndex();

    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
    // Gate the indicator until it's been measured, so it never flashes at
    // width 0 / left 0 on first paint before the effect runs.
    const [measured, setMeasured] = useState(false);

    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
            setMeasured(true);
        };

        setTabPosition();

        // Keep the bar aligned with its tab as the layout reflows on resize.
        const observer = new ResizeObserver(setTabPosition);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, [activeTabIndex]);

    return (
        <div
            ref={containerRef}
            className="relative mx-auto flex h-12 px-2 justify-between border-b border-foreground/15"
        >
            <span
                className={`absolute bottom-0 -z-10 flex overflow-hidden rounded-md py-2 transition-[left,width,opacity] duration-300 ease-glide ${
                    measured ? "opacity-100" : "opacity-0"
                }`}
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
                <span className="h-1 w-full rounded-md bg-signal" />
            </span>
            {allTabs.map((tab, index) => {
                const isActive = activeTabIndex === index;

                return (
                    <Link
                        key={index}
                        href={tab.id === "about" ? "/" : "/" + tab.id}
                        ref={(el) => {
                            tabsRef.current[index] = el;
                        }}
                        className={`${
                            isActive
                                ? "font-medium text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                        } flex flex-row justify-between gap-0.5 items-center my-auto cursor-pointer select-none rounded-md px-4 transition-colors`}
                    >
                        {isActive ? tab.icon_bold : tab.icon_light}
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    );
}
