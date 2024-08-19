"use client";
import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {cn} from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({
                                 content,
                                 contentClassName,
                             }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
        image: string;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({

        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });


    return (
        <motion.div
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 border border-blue-500 max-w-[1500px] mx-auto"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-black"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-black max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40"/>
                </div>
            </div>
            <div
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >

                <Image src={content[activeCard].image} alt="" fill/>
            </div>
        </motion.div>
    );
};
