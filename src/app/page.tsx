// Local Imports
import Page from "./components/Page";
import Footer from "./components/Footer";

// External Imports
import { Metadata } from "next";

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


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="relative min-h-screen flex flex-col p-4 justify-center items-center overflow-x-hidden bg-white mx-0 md:mx-48 2xl:mx-96">
                <Page />
            </main>

            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
