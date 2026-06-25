"use client";

import * as React from "react";
import {
    MoonIcon,
    SunIcon,
    ArrowTopRightIcon,
    GitHubLogoIcon,
    TwitterLogoIcon,
    LinkedInLogoIcon,
    VideoIcon,
    InstagramLogoIcon,
    EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { AtSignIcon, SendHorizontal, X } from "lucide-react";
import { SiGitlab } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";

export default function ButtonsNav() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

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
                                href="https://twitter.com/zepfonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <TwitterLogoIcon /> Twitter
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

                        <DropdownMenuItem className=" hover:cursor-pointer">
                            <Link
                                href=" https://medium.com/@josefonte"
                                target="_blank"
                                className="group w-full flex flex-row justify-between items-center"
                            >
                                <div className="flex flex-row gap-3 items-center ">
                                    <AtSignIcon className="w-4" /> Medium
                                </div>
                                <div className=" transition duration-300 group-hover:rotate-45 group-hover:cursor-pointer">
                                    <ArrowTopRightIcon />
                                </div>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 ">
                        <div
                            className="flex flex-row gap-4 items-center hover:cursor-pointer "
                            onClick={onOpen}
                        >
                            <EnvelopeClosedIcon /> Email Me
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={handleClicked}>
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            <Dialog onOpenChange={onClose} open={isOpen} defaultOpen={isOpen}>
                <DialogContent className="md:max-w-[725px] px-10 pt-8 ">
                    <DialogHeader>
                        <DialogTitle className="flex flex-row gap-2 items-center text-2xl">
                            Send Email
                        </DialogTitle>
                        <DialogDescription>
                            Write me a message and I&apos;ll get back to you
                            asap
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2 ">
                                Nome
                            </Label>
                            <Input
                                id="name"
                                placeholder="John Cena"
                                className="col-span-6"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2 ">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="your-email@gmail.com"
                                className="col-span-6"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center gap-4 ">
                            <Label htmlFor="name" className="col-span-2  ">
                                Subject
                            </Label>
                            <Input
                                id="subject"
                                placeholder="Subject"
                                className="col-span-10"
                            />
                        </div>
                        <div className="grid grid-cols-12 min-h-[200px] items-center gap-4">
                            <Label
                                htmlFor="username"
                                className="col-span-2 self-start pt-2"
                            >
                                Content
                            </Label>
                            <Textarea
                                placeholder="Type your message here..."
                                className="col-span-10 min-h-[200px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            variant="outline"
                            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md  hover:cursor-pointer px-6 font-medium  duration-500"
                            onClick={onClose}
                        >
                            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                                Cancel
                            </span>

                            <X
                                className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                                strokeWidth={1.75}
                            />
                        </Button>

                        <Button
                            type="submit"
                            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md  hover:cursor-pointer px-6 font-medium  duration-500 hover:bg-primary"
                        >
                            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                                Send Email
                            </span>
                            <SendHorizontal
                                className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                                strokeWidth={1.75}
                            />
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
