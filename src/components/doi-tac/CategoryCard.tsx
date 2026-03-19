import Link from 'next/link'
import type { Category } from '@/data/categories'

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/doi-tac/${category.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-momo/20 transition-all duration-200 p-6 flex flex-col items-center text-center gap-3"
    >
      <span className="w-14 h-14 flex items-center justify-center bg-pink-50 group-hover:bg-momo/10 rounded-2xl text-3xl transition-colors">
        {category.icon}
      </span>
      <div>
        <p className="font-semibold text-gray-800 group-hover:text-momo text-sm transition-colors leading-snug">
          {category.name}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {category.partnerCount.toLocaleString('vi-VN')}+ đối tác
        </p>
      </div>
    </Link>
  )
}
