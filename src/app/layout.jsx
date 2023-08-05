import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Next Shop Panel',
  description: 'NextShop Created By AliMoradpour',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
      <body>
          <Header />
          <div className='container xl:max-w-screen-xl'>
            {children}
          </div>
      </body>
    </html>
  )
}
