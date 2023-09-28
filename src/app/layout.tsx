import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Footer from './components/Footer'
import classNames from './utils/className.utils'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kassza kézpénz kalkulátor',
  description: 'Számold össze a kasszádban lévő pénzt, reklámok nélkül!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={classNames(openSans.className, "dark:bg-slate-800 dark:text-white")}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
