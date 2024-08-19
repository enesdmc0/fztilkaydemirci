"use client";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Sizin",
        },
        {
            text: "yorumlarınız",
        },
    ];
    return (
        <TypewriterEffectSmooth words={words}/>

    );
}
