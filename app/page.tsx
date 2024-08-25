"use client"
import React from "react";
import {Landing} from "@/components/ui/landing";
import {Component2} from "@/components/ui/Component2";
import {Component3} from "@/components/ui/Component3";
import {Contact} from "@/components/ui/contact";
import {Component5} from "@/components/ui/Component5";
import {Component6} from "@/components/ui/Component6";
import {Gallery} from "@/components/ui/gallery";
import {Component9} from "@/components/ui/Component9";

export default function Home() {
    return (
        <main className=" space-y-20 md:space-y-32  ">
            <Landing/>
            <Component2/>
            <Component3/>

            <Component5/>
            <Component6/>
            <Contact/>
            <Gallery/>
            <Component9/>
            <footer
                className="h-10  flex justify-center md:justify-end items-center max-w-[1500px] px-10 mx-auto text-sm space-x-2">
                <p>Designed By</p>
                <a href="https://enesdmc.com" target="_blank" className="hover:opacity-60 font-bold underline"> Enes
                    Demirci </a>
                <p>© 2024</p>
            </footer>
        </main>
    );
}
