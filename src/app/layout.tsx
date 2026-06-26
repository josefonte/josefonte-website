import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Two-font system: IBM Plex Sans is the main face (body + headings), IBM Plex
// Mono is the accent / "data voice". Same superfamily, so they pair cleanly.
const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
});
const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-mono",
});

import { ThemeProvider } from "@/components/theme-provider";

import ButtonsNav from "@/components/me/buttons-nav";
import MobileNav from "@/components/me/mobile-nav";
import Navbar from "@/components/me/navbar";
import ProfileInfo from "@/components/me/nav-ProfileInfo";

import { HeartFilledIcon } from "@radix-ui/react-icons";

const description =
    "José Fonte | AI/ML Engineer at Promptly Health, building agents over medical data. Work, Education, Projects, and Photos.";

export const metadata: Metadata = {
    metadataBase: new URL("https://josefonte.xyz"),
    title: {
        default: "José Fonte | AI/ML Engineer",
        template: "%s · José Fonte",
    },
    description,
    openGraph: {
        title: "José Fonte | AI/ML Engineer",
        description,
        url: "https://josefonte.xyz",
        siteName: "José Fonte",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "José Fonte | AI/ML Engineer",
        description,
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "José Fonte",
    url: "https://josefonte.xyz",
    jobTitle: "AI/ML Engineer",
    worksFor: { "@type": "Organization", name: "Promptly Health" },
    alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universidade do Minho" },
        { "@type": "CollegeOrUniversity", name: "LMU Munich" },
    ],
    sameAs: [
        "https://github.com/josefonte",
        "https://www.linkedin.com/in/jose-pedro-fonte/",
    ],
};

// Captured at build time so the footer reflects the latest deploy.
const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${plexSans.variable} ${plexMono.variable} min-h-screen font-sans flex flex-col`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <a
                        href="#content"
                        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:ring-2 focus:ring-signal"
                    >
                        Skip to content
                    </a>

                    <div className="fixed -z-10 inset-0 h-screen w-full bg-[radial-gradient(#dbd9d9_1px,transparent_1px)] dark:bg-[radial-gradient(#2b2b2b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_57%_at_50%_50%,#000_60%,transparent_100%)]"></div>

                    <div className="flex-col ">
                        <div className="flex items-start justify-end">
                            <div>
                                <div className="hidden md:block">
                                    <ButtonsNav />
                                </div>
                                <div className="md:hidden">
                                    <MobileNav />
                                </div>
                            </div>
                        </div>
                        <div className="lg:mx-[25%] -mt-4 md:mt-0 mb-2.5 md:mb-10 ">
                            <ProfileInfo />
                        </div>
                        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] mt-3 hidden md:block">
                            <Navbar />
                        </div>
                    </div>

                    <main
                        id="content"
                        className="mx-[10%] md:mx-[15%] lg:mx-[20%] mt-3 flex-1"
                    >
                        {children}
                    </main>

                    <footer className="flex flex-col items-center justify-center gap-1 px-4 text-sm text-center mt-5 mb-10 sm:flex-row sm:gap-2">
                        <span>
                            Made with{" "}
                            <HeartFilledIcon className="inline-block" /> by{" "}
                            <a
                                href="https://github.com/josefonte"
                                target="_blank"
                                className="inline-block hover:underline"
                            >
                                José Fonte
                            </a>
                        </span>
                        <span aria-hidden className="hidden text-muted-foreground sm:inline">
                            |
                        </span>
                        <span className="text-muted-foreground">
                            Last updated on {lastUpdated}
                        </span>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
