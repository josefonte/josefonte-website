"use client";

import {
    MoonIcon,
    SunIcon,
    ArrowTopRightIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    VideoIcon,
    InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { SiGitlab } from "react-icons/si";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();

    const handleClicked = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex flex-row gap-3 pr-4 pt-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link">Contacts</Button>
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
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href=" https://github.com/josefonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <GitHubLogoIcon /> Github
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={handleClicked}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
