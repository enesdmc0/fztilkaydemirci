"use client";
import Image from "next/image";
import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Title} from "@/components/ui/typewriter";
import {data4} from "@/lib/constants";

export const Card = React.memo(
    ({
         card,
         index,
         hovered,
         setHovered,
     }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg border shadow-xl relative bg-gray-100 overflow-hidden h-72 sm:h-96 w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-contain absolute inset-0"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div
                    className=" sm:text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";


export function Component6() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="max-w-[1500px] mx-auto space-y-5 md:space-y-10 px-5 md:px-10">
            <Title id="basarilarim-ve-sertifikalarim" words="Başarılarım ve Sertifikalarım"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {data4.map((card, index) => (
                    <Card
                        key={index}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered}
                    />
                ))}
            </div>
        </div>
    );
}
