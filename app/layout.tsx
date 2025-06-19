import type { Metadata } from "next";
import "./globals.css";
import FeskHeader from '@/components/fesk/FeskHeader';

export const metadata: Metadata = {
    title: "Launchpad FESK",
    description: "Launchpad FESK",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-theme="dark">

            <body>
                <FeskHeader />
                {children}
            </body>
        </html>
    );
}

