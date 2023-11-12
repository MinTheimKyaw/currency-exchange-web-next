import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/themeProvider";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Currency Exchange App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Nav />
        {children}
        <div className="container px-5 py-4 mx-auto z-10">
          <p className="text-sm mt-8 capitalize xl:text-center">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
