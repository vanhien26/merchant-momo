'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'Làm sao để thanh toán bằng MoMo tại cửa hàng?',
    a: 'Mở ứng dụng MoMo, chọn "Quét QR" và quét mã của đối tác. Sau đó chọn nguồn tiền (Ví MoMo hoặc Ví Trả Sau) và xác nhận bằng PIN hoặc sinh trắc học.'
  },
  {
    q: 'MoMo Ví Trả Sau là gì? Có mất phí không?',
    a: 'Ví Trả Sau (PayLater) là tính năng mua trước trả sau với lãi suất 0%. Phí dịch vụ 30.000đ/tháng, chỉ tính những tháng có giao dịch. Hạn mức từ 1–20 triệu đồng tùy điểm tín dụng.'
  },
  {
    q: 'Làm thế nào để tích lũy và sử dụng MoMo Xu?',
    a: 'MoMo Xu được tặng khi thực hiện các giao dịch hợp lệ. Bạn có thể dùng MoMo Xu để đổi voucher, giảm giá đơn hàng hoặc chuyển thành tiền mặt trong ví.'
  },
  {
    q: 'Cashback MoMo có thời hạn sử dụng không?',
    a: 'Cashback được hoàn về ví MoMo trong vòng 24 giờ sau giao dịch và có hiệu lực theo điều kiện của từng chương trình khuyến mãi. Thường từ 30–90 ngày kể từ ngày nhận.'
  },
  {
    q: 'Tôi có thể sử dụng MoMo ở những đối tác nào?',
    a: 'MoMo được chấp nhận tại hơn 50.000 đối tác trên toàn quốc gồm siêu thị, nhà hàng, chuỗi cà phê, rạp chiếu phim, bệnh viện, sàn TMĐT và nhiều dịch vụ khác.'
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800 text-sm pr-4">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
              <p className="pt-3">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
