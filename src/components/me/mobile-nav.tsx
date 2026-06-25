"use client";

import { useState } from "react";
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
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <div className="pr-4 pt-4">
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
            </div>

            <SheetContent side="right" className="flex flex-col gap-4">
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

                <div className="flex flex-col gap-1">
                    <p className="px-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Contacts
                    </p>
                    {contacts.map((contact) => (
                        <Link
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            className="group flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent"
                        >
                            <span className="flex items-center gap-3">
                                {contact.icon}
                                {contact.name}
                            </span>
                            <ArrowTopRightIcon className="transition duration-300 group-hover:rotate-45" />
                        </Link>
                    ))}
                    <a
                        href="/jose-fonte-cv.pdf"
                        download
                        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent"
                    >
                        <Download className="w-4" />
                        Download CV
                    </a>
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
    );
}
