"use client";
import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {data3} from "@/lib/constants";
import {Title} from "@/components/ui/typewriter";

export const Component3 = () => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = data3.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = data3.map((_, index) => index / cardLength);
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
        <div className="space-y-5">
            <Title id="sizin-fizypterapistiniz-ilkay-demirci" words="Sizin Fizyoterapistiniz: İlkay Demirci"/>
            <motion.div
                className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 p-5 md:p-10 max-w-[1500px] mx-auto"
                ref={ref}
            >
                <div className="relative flex-1">
                    {data3.map((item, index) => (
                        <div key={index} className=" my-5 lg:my-20">
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
                                className="text-kg text-black mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="hidden md:block h-40"/>
                </div>
                <div
                    className={cn(
                        "hidden lg:block  flex-1 rounded-md sticky top-0 overflow-hidden",
                    )}
                >
                    <Image src={data3[activeCard].image} alt="" fill/>
                </div>
            </motion.div>
        </div>
    );
};
