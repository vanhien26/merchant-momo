'use client'
import { useState } from 'react'

interface Props {
  name: string
  logo: string      // emoji fallback
  domain?: string   // e.g. "shopee.vn" — dùng để lấy logo từ Google
  size?: 'sm' | 'lg'
}

export default function PartnerLogo({ name, logo, domain, size = 'sm' }: Props) {
  const [imgError, setImgError] = useState(false)

  const containerClass = size === 'lg'
    ? 'w-16 h-16 rounded-2xl text-3xl'
    : 'w-11 h-11 rounded-xl text-2xl'

  const logoSrc = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=256`
    : null

  return (
    <div className={`${containerClass} flex items-center justify-center bg-white border border-gray-100 flex-shrink-0 overflow-hidden`}>
      {logoSrc && !imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-1.5"
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span>{logo}</span>
      )}
    </div>
  )
}
