import {IconDescriptor} from "next/dist/lib/metadata/types/metadata-types";

export const BASE_URL = process.env.BASE_URL ?? "https://fztilkaydemirci.com.tr";

interface TitleMap {
    [key: string]: string;
}

interface DescriptionMap {
    [key: string]: string;
}

const titles: TitleMap = {
    home: "İlkay Demirci - Fizyoterapist",
};

const descriptions: DescriptionMap = {
    home: "İlkay Demirci olarak, fizyoterapi alanında uzmanlaşmış bir profesyonel olarak sana özel tedavi planları sunuyorum. Gazi Üniversitesi'nden mezun olduktan sonra, manuel terapi, refleksoloji, kuru iğneleme gibi çeşitli alanlarda sertifikalar aldım. Tecrübe ve modern ekipmanlarla, hastalarımın yaşam kalitesini artırmayı hedefliyorum. Fizyoterapideki yaklaşımım, kişiye özel ve bütünsel bir tedavi sunmak üzerine kurulu. İletişim ve samimiyetle, her adımda yanında oluyorum."
};

export const AppName = "İlkay Demirci - Fizyoterapist"
export const AppShortName = "İlkay Demirci";
export const AppDescription = "Fizyoterapist İlkay Demirci'nin kişisel web sitesi";

export const Favicon: IconDescriptor = {
    rel: "icon",
    url: "/favicon.ico",
    type: "image/x-icon",
};

export const ThemeColor = "#000000";
export const BackgroundColor = "#ffffff";

interface Metadata {
    title: string;
    description: string;
    canonical: string | ((slug: string) => string);
}

interface MetadataMap {
    [key: string]: Metadata;
}

export const Metadatas: MetadataMap = {
    home: {
        title: titles.home,
        description: descriptions.home,
        canonical: BASE_URL,
    },
};