import {cn} from "@/lib/utils";

import {data2} from "@/lib/constants";
import {Title} from "@/components/ui/typewriter";


export function Component2() {

    return (
        <div className="mx-auto max-w-[1500px] bg-[#fafafa] p-5 md:p-10 space-y-10 rounded-xl">
            <Title id="neden-beni-tercih-etmelisiniz" words="Neden Beni Tercih Etmelisiniz?" />
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   relative z-10  ">
                {data2.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index}/>
                ))}
            </div>
        </div>
    );
}

const Feature = ({
                     title,
                     description,
                     icon,
                     index,
                 }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn("flex flex-col lg:border-r py-10 relative group/feature border-[#00000014]",
                (index === 0 || index === 4) && "lg:border-l border-[#00000014]",
                index < 4 && "lg:border-b border-[#00000014]"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#fd346d]/50 to-transparent pointer-events-none"/>
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#fd346d]/50  to-transparent pointer-events-none"/>
            )}
            <div className="mb-4 relative z-10 px-10 text-black">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-[#fd346d] transition-all duration-200 origin-center"/>
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-black">{title}</span>
            </div>
            <p className="text-sm text-black/70 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
