"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate} from "framer-motion";
import {cn} from "@/lib/utils";


export const Title = ({words, className, id}: { words: string, className?: string, id: string }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={idx}
                            className="opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (


        <h2 id={id} className={cn("text-2xl md:text-5xl text-black/70 font-bold tracking-wider text-center ", className)}>
            {renderWords()}
        </h2>


    );
};