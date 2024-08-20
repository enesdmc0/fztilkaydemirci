"use client"
import {FloatingDockDemo} from "@/app/test";
import {InfiniteMovingCardsDemo} from "@/app/test2";
import {StickyScrollRevealDemo} from "@/app/test3";
import {FeaturesSectionDemo} from "@/app/test4";
import {ImagesSliderDemo} from "@/app/test5";
import {HeroParallaxDemo} from "@/app/test6";
import {HoverEffect} from "@/components/ui/cards";
import React from "react";
import {FocusCardsDemo} from "@/app/test8";
import Social from "@/app/test9";

export default function Home() {
    return (
        <main className=" space-y-20  ">
            <ImagesSliderDemo/>
            <FeaturesSectionDemo/>

            <StickyScrollRevealDemo/>
            <Social/>
            <HoverEffect/>
            <FocusCardsDemo/>
            <HeroParallaxDemo/>
            <FloatingDockDemo/>
            <InfiniteMovingCardsDemo/>
            <footer
                className="h-10  flex justify-end items-center max-w-[1500px] px-10 mx-auto ">
                <p className="text-sm font-bold">Designed By Enes Demirci 2024</p>
            </footer>
        </main>
    );
}
