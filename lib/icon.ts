import instagram from "@/public/svg/instagram.svg";
import x from "@/public/svg/x.svg";
import linkedin from "@/public/svg/linkedin.svg";
import gmail from "@/public/svg/gmail.svg";
import youtube from "@/public/svg/youtube.svg";
import doctor from "@/public/svg/doctor.svg";

const Icons = {
    instagram,
    x,
    linkedin,
    gmail,
    youtube,
    doctor,

} as const;

export type IconNames = keyof typeof Icons;

export default Icons as Record<IconNames, typeof instagram>;