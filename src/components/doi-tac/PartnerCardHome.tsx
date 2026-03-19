import Link from 'next/link'
import type { Partner } from '@/data/partners'
import PartnerLogo from './PartnerLogo'

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  'am-thuc':          { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-400' },
  'thoi-trang':       { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-400' },
  'du-lich':          { bg: 'bg-sky-100',    text: 'text-sky-700',    dot: 'bg-sky-400'    },
  'suc-khoe-lam-dep': { bg: 'bg-green-100',  text: 'text-green-700',  dot: 'bg-green-500'  },
  'dien-tu':          { bg: 'bg-indigo-100', text: 'text-indigo-700', dot: 'bg-indigo-400' },
  'giao-duc':         { bg: 'bg-amber-100',  text: 'text-amber-700',  dot: 'bg-amber-400'  },
  'sieu-thi':         { bg: 'bg-rose-100',   text: 'text-rose-700',   dot: 'bg-rose-400'   },
}

const CATEGORY_NAMES: Record<string, string> = {
  'am-thuc':          'Ăn uống',
  'thoi-trang':       'Thời trang',
  'du-lich':          'Du lịch',
  'suc-khoe-lam-dep': 'Làm đẹp',
  'dien-tu':          'Điện tử',
  'giao-duc':         'Giáo dục',
  'sieu-thi':         'Mua sắm',
}

export default function PartnerCardHome({ partner }: { partner: Partner }) {
  const cat     = CATEGORY_STYLES[partner.category] ?? { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' }
  const catName = CATEGORY_NAMES[partner.category] ?? partner.category
  const isHotDeal = partner.deal === 'Hot Deal'

  return (
    <Link
      href={`/doi-tac/${partner.slug}`}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col items-center p-5 gap-3 text-center"
    >
      {/* Deal badge */}
      {partner.deal && (
        <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
          isHotDeal ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}>
          {partner.deal}
        </span>
      )}

      {/* Logo — centered, app icon style */}
      <div className="w-16 h-16 rounded-2xl shadow-sm overflow-hidden bg-white border border-gray-100 flex-shrink-0">
        <PartnerLogo name={partner.name} logo={partner.logo} domain={partner.domain} size="lg" />
      </div>

      {/* Name */}
      <p className="font-semibold text-sm text-gray-900 group-hover:text-momo transition-colors line-clamp-1 w-full">
        {partner.name}
      </p>

      {/* Category + Rating */}
      <div className="flex items-center justify-center gap-2 w-full">
        <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${cat.bg} ${cat.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cat.dot}`} />
          {catName}
        </span>
        <span className="flex items-center gap-0.5 text-[11px] text-gray-500 flex-shrink-0">
          <span className="text-yellow-400">★</span>
          {partner.rating}
        </span>
      </div>
    </Link>
  )
}
