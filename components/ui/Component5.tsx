"use client"
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import { Title} from "@/components/ui/typewriter";
import {data9} from "@/lib/constants";

export const Component5 = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


    return (
      <div className="p-5 md:p-10 max-w-[1500px] mx-auto space-y-5 md:space-y-10 bg-[#fafafa]/50 rounded-xl">
          <Title id="uzmanlik-alanlarim" words="Uzmanlık Alanlarım"/>
          <div
              className={cn(
                  "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5   ",
              )}
          >
              {data9.map((x, idx) => (
                  <div
                      key={idx}
                      className="relative group block p-2 h-full w-full"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                  >
                      <AnimatePresence>
                          {hoveredIndex === idx && (
                              <motion.span
                                  className="absolute inset-0 h-full w-full bg-[#fd346d]  block  rounded-3xl"
                                  layoutId="hoverBackground"
                                  initial={{opacity: 0}}
                                  animate={{
                                      opacity: 1,
                                      transition: {duration: 0.15},
                                  }}
                                  exit={{
                                      opacity: 0,
                                      transition: {duration: 0.15, delay: 0.2},
                                  }}
                              />
                          )}
                      </AnimatePresence>
                      <Card>
                          <CardTitle>{x}</CardTitle>
                      </Card>
                  </div>
              ))}
          </div>
      </div>
    );
};

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl flex items-center w-full p-4 h-16 md:h-20 overflow-hidden bg-[#F5F7F8] relative z-20",
                className
            )}
        >
                {children}
        </div>
    );
};

export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-black text-sm md:text-base font-semibold md:font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};
