import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES } from '@/data/categories'
import { getFeaturedPartners } from '@/data/partners'
import PartnerCardHome from '@/components/doi-tac/PartnerCardHome'
import CategoryCard from '@/components/doi-tac/CategoryCard'
import FaqAccordion from '@/components/FaqAccordion'
import SearchBar from '@/components/doi-tac/SearchBar'

export const metadata: Metadata = {
  title: 'Đối Tác MoMo — Khám phá hàng ngàn thương hiệu ưu đãi',
  description: 'Khám phá hơn 50.000 đối tác chấp nhận thanh toán MoMo — cashback, PayLater miễn lãi, tích điểm thưởng.'
}

const TRUST_STATS = [
  { icon: '👥', value: '50M+', label: 'Người dùng' },
  { icon: '🏪', value: '50.000+', label: 'Đối tác' },
  { icon: '🏆', value: '#1', label: 'Ví điện tử VN' },
  { icon: '🔒', value: '100%', label: 'Bảo mật' },
]

const PARTNER_PILLS = [
  'Vingroup', 'Lotte', 'CGV', 'Highlands', 'Circle K',
  'FamilyMart', 'GS25', 'Grab', 'Shopee', 'Lazada', 'Tiki', 'Sendo',
]

const BENEFITS = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    iconBg: 'bg-blue-50',
    title: 'PayLater',
    subtitle: 'Mua trước trả sau',
    desc: 'Trả sau đến 45 ngày, trả góp 0% lãi suất với hạn mức đến 20 triệu đồng',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-green-50',
    title: 'Cashback',
    subtitle: 'Hoàn tiền ngay',
    desc: 'Hoàn tiền lên đến 50% cho mỗi giao dịch, tiền về ví trong 24 giờ',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    iconBg: 'bg-orange-50',
    title: 'Rewards',
    subtitle: 'Tích điểm thưởng',
    desc: 'Tích lũy MoMo Xu không giới hạn, đổi voucher và quà tặng hấp dẫn',
  },
]

export default function DoiTacPage() {
  const featured = getFeaturedPartners()

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-pink-50 via-rose-50/50 to-white pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Khám phá hàng ngàn đối tác{' '}
            <span className="text-momo">ưu đãi cùng MoMo</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Thanh toán dễ dàng, nhận cashback hấp dẫn, tích điểm đổi quà và mua trước trả sau 0% lãi suất tại hơn 50.000+ đối tác
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <SearchBar />
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Link
              href="/doi-tac/am-thuc"
              className="flex items-center gap-2 bg-momo text-white font-semibold px-6 py-3 rounded-xl hover:bg-momo-dark transition-colors shadow-sm"
            >
              Khám phá ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://momo.vn"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-momo hover:text-momo transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Tải ứng dụng
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-10 text-center">
            <div>
              <p className="text-2xl font-extrabold text-gray-900">10.000+</p>
              <p className="text-sm text-gray-500">đối tác</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <p className="text-2xl font-extrabold text-gray-900">5 triệu+</p>
              <p className="text-sm text-gray-500">giao dịch</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <p className="text-2xl font-extrabold text-gray-900">đến 50%</p>
              <p className="text-sm text-gray-500">hoàn tiền</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Featured Partners ──────────────────────────── */}
        <section className="py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Đối tác nổi bật</h2>
            <Link href="/doi-tac/sieu-thi" className="text-sm text-momo font-medium hover:underline">
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => (
              <PartnerCardHome key={p.slug} partner={p} />
            ))}
          </div>
        </section>

        {/* ── Category Grid ──────────────────────────────── */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Danh mục đối tác</h2>
            <p className="text-gray-500 text-sm">Khám phá đa dạng lĩnh vực hợp tác cùng MoMo</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map(cat => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </section>

        {/* ── Benefits ───────────────────────────────────── */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Lợi ích khi thanh toán <span className="text-momo">MoMo</span>
            </h2>
            <p className="text-gray-500 text-sm">Trải nghiệm thanh toán thông minh với hàng loạt ưu đãi độc quyền</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full opacity-50" />
                <div className={`w-12 h-12 ${b.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-momo font-medium text-sm mb-3">{b.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Trust Section ──────────────────────────────── */}
      <section className="bg-gradient-to-b from-pink-50 to-rose-100/50 py-20 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Được tin dùng bởi hàng triệu người Việt</h2>
            <p className="text-gray-500 text-sm">MoMo là ví điện tử được yêu thích nhất Việt Nam với hệ sinh thái đối tác đa dạng</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {TRUST_STATS.map(s => (
              <div key={s.label} className="bg-white rounded-2xl border border-white/80 shadow-sm p-6 text-center">
                <p className="text-2xl mb-2">{s.icon}</p>
                <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Partner pills */}
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-5">Đối tác tiêu biểu</p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {PARTNER_PILLS.map(name => (
                <span key={name} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Câu hỏi thường gặp</h2>
            <p className="text-gray-500 text-sm">Giải đáp thắc mắc về thanh toán MoMo và Ví Trả Sau</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

    </main>
  )
}
