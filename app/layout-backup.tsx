import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "@/styles/globals.css";
import "./globals.css";
import "@/styles/fesk.css";
import "@/components/fesk/SideNavToggle.css";
import "@/components/fesk/SideNavToggle2.css";
import StickyHeader from '@/components/fesk/StickyHeader';


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Launchpad FESK",
    description: "FESK app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="dim">
            <head>

            </head>
            <body>

                <div className="w-full h-full">
                    <StickyHeader />

                    <div id="my-container">

                        {children}

                    </div>

                </div>
            </body>
        </html>
    );
}

