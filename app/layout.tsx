import type { Metadata } from "next";
import { Work_Sans } from "next/font/google"
import "./globals.css";

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export const metadata: Metadata = {
  title: "YC Directory",
  description: "A directory for YC startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.className}
      >
        {children}
      </body>
    </html>
  );
}
