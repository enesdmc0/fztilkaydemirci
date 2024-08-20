"use client";
import React, {useState} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";


const Social = () => {
    const data: {
        from: string;
        href: string;
        via: string;
        to: string;
        hover: string;
        icon: any;
        text: string;
    }[] = [
        {
            icon: "instagram",
            href: "https://instagram.com/enes_dmc",
            text: "enes_dmc",
            from: "from-pink-500",
            via: "via-pink-600",
            to: "to-black",
            hover: "group-hover:bg-blue-500",
        },
        {
            icon: "x",
            href: "https://twitter.com/enesdmc0",
            text: "enesdmc0",
            from: "from-red-500",
            via: "via-red-600",
            to: "to-black",
            hover: "group-hover:bg-red-500",
        },
        {
            icon: "github",
            href: "https://github.com/enesdmc0",
            text: "enesdmc0",
            from: "from-green-400",
            via: "via-green-500",
            to: "to-black",

            hover: "group-hover:bg-black",
        },
        {
            icon: "linkedin",
            href: "https://linkedin.com/in/enesdemirci1",
            text: "enesdemirci1",
            from: "from-purple-500",
            via: "via-purple-600",
            to: "to-black",
            hover: "group-hover:bg-purple-500",
        },
        {
            icon: "gmail",
            href: "mailto: enesdmcc@gmail.com",
            text: "enesdmcc@gmail.com",
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
        <div className="flex flex-col items-center space-y-5 max-w-[1500px] p-10 mx-auto">
            <h1
                className={cn(
                    `text-5xl md:text-7xl font-bold leading-none text-center inline-block bg-gradient-to-r bg-clip-text text-transparent py-2 `,
                    activeColor.from,
                    activeColor.via,
                    activeColor.to
                )}
            >
                İletişim
            </h1>
            <div className="grid grid-cols-5 first:rounded-xl w-full">
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
                                    : index === 4
                                        ? "rounded-r-[35px]"
                                        : ""
                            )}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black"
                                 viewBox="0 0 1200 1227">
                                <path fill="#000"
                                      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/>
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Social;