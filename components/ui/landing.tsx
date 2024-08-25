"use client";
import {motion} from "framer-motion";
import React from "react";
import {ImagesSlider} from "@/components/ui/slider";
import Image from "next/image";
import {data1} from "@/lib/constants";
import Link from "next/link";


export function Landing() {

    return (
        <ImagesSlider className="h-[60vh] relative" images={data1}>
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
                className="z-50 flex flex-col justify-center items-center  "
            >
                <div className="size-48 rounded-full relative overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="" fill className="object-cover"/>
                </div>
                <motion.p
                    className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Fzt İlkay Demirci <br/> Fizyoterapi ve Rehabilitasyon
                </motion.p>
                <Link href="#iletisim"
                    className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>İletişim Kurun →</span>
                    <div
                        className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>
                </Link>
            </motion.div>
        </ImagesSlider>
    );
}