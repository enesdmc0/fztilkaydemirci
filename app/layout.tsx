import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import {Dock} from "@/components/ui/Dock";
import {AppDescription, AppName, BASE_URL, Favicon, ThemeColor} from "@/lib/metadatas";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: AppName,
        template: `%s | ${AppName}`,
    },
    description: AppDescription,
    icons: [Favicon],
    manifest: "/manifest.json",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: BASE_URL,
        siteName: AppName,
        title: AppName,
        description: AppDescription,
        images: [
            {
                url: `${BASE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: AppName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ilkaydemirci",
        creator: "@ilkaydemirci",
        title: AppName,
        description: AppDescription,
        images: [`${BASE_URL}/og-image.jpg`],
    },
}

export const viewport: Viewport = {
    themeColor: ThemeColor,
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}
        <Dock/>
        </body>
        </html>
    );
}
