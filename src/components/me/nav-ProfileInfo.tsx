import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

export default function ProfileInfo() {
    return (
        <div className=" flex-column gap-2 items-center place-content-center ">
            <div className=" border-solid flex justify-around">
                <Avatar className="min-w-48	 min-h-48 border-solid 	">
                    <AvatarImage
                        src="https://avatars.githubusercontent.com/u/73178551?s=400&u=f731b4eb21666e95ace44de763b615ea33660abd&v=4"
                        alt="José Fonte"
                    />
                    <AvatarFallback className="font-display text-3xl font-bold">
                        JF
                    </AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col gap-2 mt-2 ">
                <Link
                    href="/"
                    aria-label="José Fonte — about"
                    className="text-3xl font-display font-semibold tracking-tight text-center transition-colors hover:text-signal"
                >
                    José Fonte
                </Link>
                <div className="flex flex-col justify-center gap-1.5 text-center flex-wrap items-center font-mono text-sm text-muted-foreground">
                    <div>AI/ML Engineer</div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <span>@</span>
                            <Link
                                className="text-foreground hover:text-signal hover:underline underline-offset-4"
                                href="https://www.linkedin.com/company/promptlyhealth/"
                                target="_blank"
                            >
                                Promptly Health
                            </Link>
                        </div>
                        <Image
                            src="/assets/promptly.jpeg"
                            className="inline-block h-4 w-4 rounded"
                            width={50}
                            height={50}
                            alt="Promptly Health logo"
                        />
                    </div>
                    <div className="flex flex-row justify-center gap-1 items-center">
                        <SewingPinFilledIcon /> Portugal
                    </div>
                </div>
            </div>
        </div>
    );
}
