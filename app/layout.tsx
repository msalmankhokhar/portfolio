import type { Metadata } from "next";
import { DM_Sans as Font } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salman's Portfolio",
  description: `Hi, I’m Salman, a Skilled Web Developer and Team Leader! With a strong background in web development, I’ve led a team of talented developers at a software tech startup, where we delivered high-quality web applications tailored to client needs. My expertise lies in Next.js, React, Node.js, enabling me to create dynamic, scalable, and SEO-friendly solutions.`,
};

const font = Font({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700', '800', '900', '1000' ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="light">
      <body
        className={`${font.className} antialiased dark:bg-secondary-1000`}
      >
        {children}
      </body>
    </html>
  );
}
