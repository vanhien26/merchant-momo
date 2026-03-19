import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { template: '%s | MoMo Đối Tác', default: 'Đối Tác MoMo' },
  description: 'Khám phá hàng nghìn đối tác chấp nhận thanh toán MoMo và Ví Trả Sau'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
