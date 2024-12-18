"use client";
import React, {useState} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Icon, {IconNames} from "@/lib/icon";


export const Contact = () => {
    const data: {
        from: string;
        href: string;
        via: string;
        to: string;
        hover: string;
        icon: IconNames;
        text: string;
    }[] = [
        {
            icon: "instagram",
            href: "https://www.instagram.com/fzt.ilkaydemirci",
            text: "https://www.instagram.com/fzt.ilkaydemirci",
            from: "from-pink-500",
            via: "via-pink-600",
            to: "to-black",
            hover: "group-hover:bg-blue-500",
        },
        {
            icon: "doctor",
            href: "https://www.doktortakvimi.com/ilkay-demirci/fizyoterapi-ve-rehabilitasyon/ankara",
            text: "https://www.doktortakvimi.com/ilkay-demirci/fizyoterapi-ve-rehabilitasyon/ankara",
            from: "from-red-500",
            via: "via-red-600",
            to: "to-black",
            hover: "group-hover:bg-red-500",
        },

        {
            icon: "linkedin",
            href: "https://www.linkedin.com/in/ilkay-demirci",
            text: "https://www.linkedin.com/in/ilkay-demirci",
            from: "from-purple-500",
            via: "via-purple-600",
            to: "to-black",
            hover: "group-hover:bg-purple-500",
        },
        {
            icon: "gmail",
            href: "mailto: demirciilkay4@gmail.com",
            text: "demirciilkay4@gmail.com",
            from: "from-red-500",
            via: "via-red-600",
            to: "to-black",
            hover: "group-hover:bg-pink-500",
        },
    ];
    const [activeColor, setActiveColor] = useState({
        from: "from-gray-700",
        via: "via-gray-800",
        to: "to-black",
    });

    return (
        <div className="flex flex-col bg-[#fafafa] rounded-xl items-center space-y-3 md:space-y-5 max-w-[1500px] p-3 sm:p-10 mx-auto">
            <h1 id="iletisim"
                className={cn(
                    `text-2xl sm:text-5xl md:text-7xl font-bold leading-none text-center inline-block bg-gradient-to-r bg-clip-text text-transparent py-2 `,
                    activeColor.from,
                    activeColor.via,
                    activeColor.to
                )}
            >
                İletişim
            </h1>
            <div className="grid grid-cols-4 first:rounded-xl w-full">
                {data.map((x, index) => (
                    <Link
                        href={x.href}
                        target="_blank"
                        key={index}
                        className="aspect-square p-1 lg:p-2 text-white col-span-1 group  cursor-pointer "
                        onMouseEnter={() =>
                            setActiveColor({from: x.from, via: x.via, to: x.to})
                        }
                        onMouseLeave={() =>
                            setActiveColor({
                                from: "from-gray-700",
                                via: "via-gray-800",
                                to: "to-black",
                            })
                        }
                    >
                        <div
                            className={cn(
                                "border border-color5 h-full w-full rounded-lg hover:scale-[1.03] transition-all duration-300 flex flex-col items-center justify-center space-y-3 ",
                                index === 0
                                    ? "rounded-l-[35px]"
                                    : index === 3
                                        ? "rounded-r-[35px]"
                                        : ""
                            )}
                        >
                            <Image className="sm:hidden block" src={Icon[x.icon] as IconNames} alt="" width={40}
                                   height={24}/>
                            <Image className="hidden sm:block md:hidden" src={Icon[x.icon] as IconNames} alt="" width={60}
                                   height={32}/>
                            <Image className="hidden md:block" src={Icon[x.icon] as IconNames} alt="" width={80}
                                   height={60}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
