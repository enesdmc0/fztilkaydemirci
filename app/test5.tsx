"use client";
import { motion } from "framer-motion";
import React from "react";
import {ImagesSlider} from "@/components/ui/slider";
import Image from "next/image";


export function ImagesSliderDemo() {
    const images = [
        "https://images.pexels.com/photos/8313222/pexels-photo-8313222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/20860598/pexels-photo-20860598/free-photo-of-physiotherapist-massaging-patient-back.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/20860621/pexels-photo-20860621/free-photo-of-woman-helping-patient-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return (
        <ImagesSlider className="h-screen" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <div className="size-48 rounded-full relative overflow-hidden">
                    <Image src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover" />
                </div>
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Fzt İlkay Demirci <br /> Fizyoterapi ve Rehabilitasyon
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>İletişim Kurun →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
