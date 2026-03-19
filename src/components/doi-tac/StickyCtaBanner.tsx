'use client'
import { useState, useEffect } from 'react'

interface Props {
  label?: string
  href?: string
  partnerName?: string
  partnerDomain?: string
}

export default function StickyCtaBanner({
  label,
  href = 'https://momo.vn',
  partnerName,
  partnerDomain,
}: Props) {
  const [visible, setVisible] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoSrc = partnerDomain
    ? `https://www.google.com/s2/favicons?domain=${partnerDomain}&sz=64`
    : null

  const displayLabel = label
    ?? (partnerName ? `Mua ngay tại ${partnerName}` : 'Mua trước — Trả sau')

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo đối tác (nếu có) */}
        {logoSrc && !imgError && (
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
            <img
              src={logoSrc}
              alt={partnerName}
              className="w-full h-full object-contain p-1"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">{displayLabel}</p>
          <p className="text-xs text-gray-400 mt-0.5">Thanh toán MoMo · Ví Trả Sau 0% lãi</p>
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="flex-shrink-0 bg-momo text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-momo-dark transition-colors shadow-sm shadow-momo/30 whitespace-nowrap"
        >
          Thanh toán ngay
        </a>
      </div>
    </div>
  )
}
