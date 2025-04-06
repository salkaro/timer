import type { Metadata } from "next";

import "@/styles/globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Online Timer | Salkaro",
    description: "Exam Timers, Study Timers, and Pomodoro Timers, Countdown Timers, Stopwatch Timers, Free online timers, no ads timers, clock timers, and more.",
    openGraph: {
        title: 'Online Timer | Salkaro',
        description: 'Exam Timers, Study Timers, and Pomodoro Timers, Countdown Timers, Stopwatch Timers, Free online timers, no ads timers, clock timers, and more.',
        url: "https://isitdown.salkaro.com",
        images: [
            {
                url: "https://i.imgur.com/ctm4Pa9.png",
                width: 2496,
                height: 1221,
                alt: "Online Timer | Salkaro",
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`antialiased w-full`}>
                {children}

                <Footer />
            </body>
        </html>
    );
}
