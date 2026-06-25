import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

export default function ProfileInfo() {
    return (
        <div className=" flex-collumn gap-2 items-center place-content-center ">
            <div className=" border-solid flex justify-around">
                <Avatar className="min-w-48	 min-h-48 border-solid 	">
                    <AvatarImage
                        src="https://avatars.githubusercontent.com/u/73178551?s=400&u=f731b4eb21666e95ace44de763b615ea33660abd&v=4"
                        alt="@josefonte"
                    />
                    <AvatarFallback>José Fonte</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col gap-2 mt-2 ">
                <div className="text-3xl font-bold border-solid text-center">
                    José Fonte
                </div>
                <div className="flex flex-col  justify-center  gap-2  text-center flex-wrap items-center">
                    <div> MSc in Software Engineering Student</div>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <div className=" italic ">@</div>
                            <Link
                                className="italic hover:underline horver:cursor-pointer "
                                href="https://www.uminho.pt/PT"
                                target="_blank"
                            >
                                Universidade do Minho
                            </Link>
                        </div>
                        <Image
                            src="/assets/uminho.png"
                            className="inline-block h-4 w-4 rounded"
                            width={50}
                            height={50}
                            alt="Universidade do Minho Logo"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center  gap-1 items-center text-center">
                    <SewingPinFilledIcon /> Portugal
                </div>
            </div>
        </div>
    );
}
