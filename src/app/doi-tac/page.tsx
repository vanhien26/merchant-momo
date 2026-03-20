import type { Metadata } from 'next'
import Link from 'next/link'
import { CATEGORIES } from '@/data/categories'
import { getFeaturedPartners } from '@/data/partners'
import PartnerCardHome from '@/components/doi-tac/PartnerCardHome'
import CategoryCard from '@/components/doi-tac/CategoryCard'
import FaqAccordion from '@/components/FaqAccordion'
import SearchBar from '@/components/doi-tac/SearchBar'
import HomeLongContent from '@/components/doi-tac/HomeLongContent'

export const metadata: Metadata = {
  title: 'Đối Tác MoMo — Khám phá hàng ngàn thương hiệu ưu đãi',
  description: 'Khám phá hơn 50.000 đối tác chấp nhận thanh toán MoMo — cashback, PayLater miễn lãi, tích điểm thưởng.'
}

// Quick-filter category pills hiện bên dưới search bar
const QUICK_FILTERS = [
  { label: '☕ Cà phê', slug: 'am-thuc' },
  { label: '🛍️ Mua sắm', slug: 'sieu-thi' },
  { label: '🚗 Di chuyển', slug: 'du-lich' },
  { label: '💊 Sức khỏe', slug: 'suc-khoe-lam-dep' },
  { label: '📱 Điện tử', slug: 'dien-tu' },
  { label: '👗 Thời trang', slug: 'thoi-trang' },
]

const TRUST_STATS = [
  { icon: '👥', value: '50M+', label: 'Người dùng', sub: 'tin dùng MoMo' },
  { icon: '🏪', value: '50.000+', label: 'Đối tác', sub: 'toàn quốc' },
  { icon: '🏆', value: '#1', label: 'Ví điện tử VN', sub: 'theo lượng dùng' },
  { icon: '🔒', value: '100%', label: 'Bảo mật', sub: 'chuẩn quốc tế' },
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
    title: 'Ví Trả Sau',
    subtitle: 'Mua trước — trả sau 0% lãi',
    desc: 'Trả sau đến 45 ngày, trả góp 0% lãi suất với hạn mức từ 1–20 triệu đồng.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-green-50',
    title: 'Cashback',
    subtitle: 'Hoàn tiền vào ví MoMo',
    desc: 'Nhận cashback khi thanh toán tại các đối tác — tiền hoàn về ví MoMo sau giao dịch.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    iconBg: 'bg-orange-50',
    title: 'Tích điểm',
    subtitle: 'MoMo Xu đổi quà',
    desc: 'Tích lũy MoMo Xu không giới hạn, đổi voucher và quà tặng hấp dẫn từ đối tác.',
  },
]

export default function DoiTacPage() {
  const featured = getFeaturedPartners()

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-14 pb-10">
        {/* Background gradient + pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100/60" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #d82d8b 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px'
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Khám phá đối tác{' '}
            <span className="text-momo">ưu đãi cùng MoMo</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Cashback hấp dẫn, mua trước trả sau 0% lãi, tích điểm đổi quà tại hơn&nbsp;50.000 đối tác
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-4">
            <SearchBar />
          </div>

          {/* Quick-filter category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {QUICK_FILTERS.map(f => (
              <Link
                key={f.slug}
                href={`/doi-tac/${f.slug}`}
                className="text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-momo hover:text-momo transition-all shadow-sm whitespace-nowrap"
              >
                {f.label}
              </Link>
            ))}
          </div>

          {/* CTAs — clear hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {/* Primary — scroll to deals */}
            <Link
              href="#featured"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-momo text-white font-bold px-7 py-3.5 rounded-xl hover:bg-momo-dark transition-colors shadow-md shadow-momo/20 text-sm"
            >
              Xem ưu đãi ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Secondary — app install */}
            <a
              href="https://momo.vn"
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl hover:border-momo hover:text-momo transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Tải MoMo miễn phí
            </a>
          </div>

          {/* Stats — 2 cột, chỉ số đã verified */}
          <div className="flex items-center justify-center gap-0 max-w-xs mx-auto">
            <div className="text-center px-8">
              <p className="text-2xl font-extrabold text-gray-900">50.000+</p>
              <p className="text-xs text-gray-500 mt-0.5">đối tác toàn quốc</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center px-8">
              <p className="text-2xl font-extrabold text-gray-900">50M+</p>
              <p className="text-xs text-gray-500 mt-0.5">người dùng MoMo</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Featured Partners ────────────────────────────────────────── */}
        <section id="featured" className="pt-10 pb-14">

          {/* Section header + category filter tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Đối tác nổi bật</h2>
              <p className="text-sm text-gray-400 mt-0.5">Cashback & ưu đãi đang áp dụng</p>
            </div>
            <Link href="/doi-tac/sieu-thi" className="text-sm text-momo font-semibold hover:underline flex-shrink-0">
              Xem tất cả →
            </Link>
          </div>

          {/* Category filter pills — horizontal scroll trên mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none -mx-1 px-1">
            <Link href="/doi-tac" className="flex-shrink-0 bg-momo text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
              Tất cả
            </Link>
            {QUICK_FILTERS.map(f => (
              <Link
                key={f.slug}
                href={`/doi-tac/${f.slug}`}
                className="flex-shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full hover:border-momo hover:text-momo transition-colors whitespace-nowrap"
              >
                {f.label}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => (
              <PartnerCardHome key={p.slug} partner={p} />
            ))}
          </div>
        </section>

        {/* ── Category Grid ─────────────────────────────────────────── */}
        <section className="py-14 border-t border-gray-100">
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

        {/* ── Benefits ──────────────────────────────────────────────── */}
        <section className="py-14 border-t border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Lợi ích khi thanh toán <span className="text-momo">MoMo</span>
            </h2>
            <p className="text-gray-500 text-sm">Trải nghiệm thông minh với hàng loạt ưu đãi độc quyền</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full opacity-40" />
                <div className={`w-12 h-12 ${b.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-momo font-semibold text-sm mb-3">{b.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Trust Section ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-pink-50 to-rose-100/50 py-20 mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Được tin dùng bởi hàng triệu người Việt</h2>
            <p className="text-gray-500 text-sm">MoMo là ví điện tử được yêu thích nhất Việt Nam</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {TRUST_STATS.map(s => (
              <div key={s.label} className="bg-white rounded-2xl border border-white/80 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <p className="text-2xl mb-2">{s.icon}</p>
                <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

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

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Câu hỏi thường gặp</h2>
            <p className="text-gray-500 text-sm">Giải đáp thắc mắc về thanh toán MoMo và Ví Trả Sau</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── Long Content — SEO/GEO ────────────────────────────────────── */}
      <HomeLongContent />

    </main>
  )
}
