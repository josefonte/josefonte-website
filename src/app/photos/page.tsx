import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

import PageHeader from "@/components/me/page-header";
import { albums } from "@/data/photos";

export const metadata = { title: "Photos" };

export default function Photos() {
    return (
        <div>
            <PageHeader path="photos" />
            <ScrollArea className="w-full h-full whitespace-nowrap rounded-md snap-x snap-mandatory">
                <div className="flex w-max space-x-8 py-4">
                    {albums.map((album, albumIndex) => (
                        <div key={album.title} className="flex flex-col gap-2">
                            <p className="pl-3 font-display text-lg">
                                {album.title}
                            </p>
                            <div
                                className={`${album.width} h-fit grid auto-rows-[200px] ${album.cols} gap-4 overflow-hidden shrink-0`}
                            >
                                {album.photos.map((photo, photoIndex) => (
                                    <div
                                        key={photo.img}
                                        className={`${
                                            photo.span ?? ""
                                        } overflow-hidden rounded-xl border bg-muted`}
                                    >
                                        <Image
                                            src={photo.img}
                                            alt={photo.alt}
                                            width={1000}
                                            height={1000}
                                            priority={
                                                albumIndex === 0 &&
                                                photoIndex < 2
                                            }
                                            sizes="300px"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="w-[1px] "></div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}
