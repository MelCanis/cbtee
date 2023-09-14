import Footer from './common/footer'
import Header from './common/header'
import './globals.sass'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Connecting Back To Earth Elements',
  description: 'All healing stones & crystals. If they’re not cold, they’re not real. Stones are genuine & everlasting.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
