import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import {TextGenerateEffect} from "@/components/ui/typewriter";

export const HoverEffect = () => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <div className="p-10 max-w-[1500px] mx-auto space-y-10 bg-[#fafafa]/50 rounded-xl">
          <TextGenerateEffect words="Hizmetlerimiz"/>
          <div
              className={cn(
                  "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5   ",
              )}
          >
              {Array(20).fill(0).map((_, idx) => (
                  <div
                      key={idx}
                      className="relative group block p-2 h-full w-full"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                  >
                      <AnimatePresence>
                          {hoveredIndex === idx && (
                              <motion.span
                                  className="absolute inset-0 h-full w-full bg-gray-500  block  rounded-3xl"
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
                          <CardTitle>Bel Fıtığı</CardTitle>
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
                "rounded-2xl h-full w-full p-2 overflow-hidden bg-[#F5F7F8] relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
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
        <h4 className={cn("text-black font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};
