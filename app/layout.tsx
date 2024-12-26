import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quran JSON API Documentation',
  description: 'Documentation for the Quran JSON API with text, transliteration, and translations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Navigation />
            <div className="flex-1 md:pl-72">
              <main className="container mx-auto px-4 py-16 md:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

