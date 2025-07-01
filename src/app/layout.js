import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Smoothscroll from "./components/smoothscroll/smoothscroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dodge Challenger Landing Page",
  description: "Explore raw power, features, and book your Dodge Challenger test drive today.",
   openGraph: {
    title: "Dodge Challenger",
    description: "Performance like never before. Book your experience now.",
    url: "https://dodge.vercel.app/",
    type: "website",
   },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, orientation=portrait"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Smoothscroll>{children}</Smoothscroll>
      </body>
    </html>
  );
}
