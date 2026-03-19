'use client'
import { useState } from 'react'
import type { Voucher } from '@/data/partners'

interface Props {
  voucher: Voucher
}

export default function VoucherCard({ voucher }: Props) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    if (!voucher.code) return
    try {
      await navigator.clipboard.writeText(voucher.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* clipboard không khả dụng */ }
  }

  return (
    <div className="relative flex bg-white rounded-2xl border border-dashed border-momo/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Cạnh trái — màu badge */}
      <div className="w-1.5 bg-gradient-to-b from-momo to-pink-400 flex-shrink-0" />

      {/* Badge số giảm */}
      <div className="flex flex-col items-center justify-center px-4 py-4 bg-momo/5 border-r border-dashed border-momo/20 min-w-[72px]">
        <span className="text-xl font-black text-momo leading-none">{voucher.badge}</span>
        <span className="text-[9px] text-momo/70 font-medium mt-0.5 uppercase tracking-wide">Ưu đãi</span>
      </div>

      {/* Nội dung */}
      <div className="flex-1 px-4 py-3 min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-snug">{voucher.title}</p>
        {voucher.desc && (
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{voucher.desc}</p>
        )}

        <div className="flex flex-wrap items-center gap-2 mt-2">
          {/* Đơn tối thiểu */}
          {voucher.minOrder && (
            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              Đơn từ {voucher.minOrder}
            </span>
          )}
          {/* Hạn dùng */}
          {voucher.expiry && (
            <span className="text-[10px] text-gray-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              HSD: {voucher.expiry}
            </span>
          )}
        </div>

        {/* Mã voucher */}
        {voucher.code && (
          <button
            onClick={copyCode}
            className={`mt-2 flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
              copied
                ? 'bg-green-50 border-green-200 text-green-600'
                : 'bg-momo/5 border-momo/20 text-momo hover:bg-momo/10'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Đã sao chép!
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {voucher.code}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
