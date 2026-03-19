import Link from 'next/link'
import type { Partner } from '@/data/partners'
import PartnerLogo from './PartnerLogo'

interface Props {
  partner: Partner
  showCategory?: boolean
}

export default function PartnerCard({ partner }: Props) {
  return (
    <Link
      href={`/doi-tac/${partner.slug}`}
      className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3.5 hover:border-momo/50 hover:shadow-md transition-all duration-200"
    >
      <PartnerLogo name={partner.name} logo={partner.logo} domain={partner.domain} />

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm group-hover:text-momo truncate leading-snug">
          {partner.name}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs font-medium text-gray-700">{partner.rating}</span>
          <span className="text-xs text-gray-400">· {partner.reviewCount.toLocaleString('vi-VN')} đánh giá</span>
        </div>
      </div>

      <svg className="w-4 h-4 text-gray-300 group-hover:text-momo flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
