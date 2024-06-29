import type { Metadata } from "next";
import { AtomicState, FetchConfig } from 'atomic-utils'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {NextAuthProvider} from "./components/NextAuthProvider";
import {ThemeProvider} from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binge-watch",
  description: "Binge-watch your fovourite web serires with your friends online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
            <NextAuthProvider>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div className='max-w-screen-2xl mx-auto py-8 px-6 md:px-8'>
                    {children}
                  </div>
                </FetchConfig>
              </AtomicState>
            </NextAuthProvider>
          </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
