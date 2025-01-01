import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InterTight } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  verification: {
    google: "LoPQr96cfszDq0ETtZIr5zkfxpAGEK4XV-cbkzNfUpQ",
  },
  title: " Oluwaferanmi oyelowo",
  description:
    "Software Engineer, Full Stack Web Developer, and Open Source Enthusiast",
  keywords: [
    "",
    "Oluwaferanmi oyelowo",
    "Oluwaferanmi oyelowo oyelowo",
    "Oluwaferanmi oyelowo",
    "oyelowo",
    "oyelowo",
    "Oluwaferanmi oyelowo",
    " Oluwaferanmi",
    "oyelowo Oluwaferanmi",
    "Full Stack Developer",
    "Software Engineer",
    "Open Source Enthusiast",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Oluwaferanmi oyelowo oyelowo",
      url: "https://Oluwaferanmi.me",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Oluwaferanmi.me",
    description: "This is my portfolio website guys, check it out!",
    images: [
      {
        url: "https://i.pinimg.com/564x/7a/1c/1e/7a1c1e8ad44aa5a822d3668f8e60ce25.jpg",
        width: 459,
        height: 820,
        alt: " Oluwaferanmi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${InterTight.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
