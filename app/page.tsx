"use client"
import {FloatingDockDemo} from "@/app/test";
import {InfiniteMovingCardsDemo} from "@/app/test2";
import {StickyScrollRevealDemo} from "@/app/test3";
import {FeaturesSectionDemo} from "@/app/test4";
import {ImagesSliderDemo} from "@/app/test5";
import {HeroParallaxDemo} from "@/app/test6";
import {HoverEffect} from "@/components/ui/cards";
import {TypewriterEffectSmoothDemo} from "@/app/test7";
import React from "react";

export default function Home() {
    return (
        <main className="border border-red-400  space-y-10  ">
            <ImagesSliderDemo/>
            <TypewriterEffectSmoothDemo />
            <FeaturesSectionDemo/>
            <StickyScrollRevealDemo/>
            <TypewriterEffectSmoothDemo />
            <HoverEffect/>
            <HeroParallaxDemo/>
            <FloatingDockDemo/>
            <InfiniteMovingCardsDemo/>

        </main>
    );
}
