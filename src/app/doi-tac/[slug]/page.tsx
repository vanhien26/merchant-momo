import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getPartnerBySlug, getPartnersByCategory, getFeaturedPartners } from '@/data/partners'
import PartnerCard from '@/components/doi-tac/PartnerCard'
import PartnerCardHome from '@/components/doi-tac/PartnerCardHome'
import CategoryCard from '@/components/doi-tac/CategoryCard'
import StickyCtaBanner from '@/components/doi-tac/StickyCtaBanner'
import VtsBanner from '@/components/doi-tac/VtsBanner'
import PartnerLogo from '@/components/doi-tac/PartnerLogo'
import BrandActions from '@/components/doi-tac/BrandActions'
import PartnerFaqAccordion from '@/components/doi-tac/PartnerFaqAccordion'
import VoucherCard from '@/components/doi-tac/VoucherCard'

interface Props {
  params: { slug: string }
}

// Màu gradient cho hero theo danh mục
const CATEGORY_COLORS: Record<string, [string, string]> = {
  'am-thuc':         ['#f97316', '#fbbf24'],
  'thoi-trang':      ['#a855f7', '#ec4899'],
  'du-lich':         ['#0ea5e9', '#38bdf8'],
  'suc-khoe-lam-dep':['#10b981', '#34d399'],
  'dien-tu':         ['#6366f1', '#818cf8'],
  'giao-duc':        ['#f59e0b', '#fb923c'],
  'sieu-thi':        ['#f43f5e', '#fb7185'],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  if (CATEGORY_SLUGS.includes(slug)) {
    const cat = getCategoryBySlug(slug)!
    return {
      title: `${cat.name} — Đối Tác MoMo Chấp Nhận Ví Trả Sau`,
      description: cat.description
    }
  }

  const partner = getPartnerBySlug(slug)
  if (!partner) return { title: 'Không tìm thấy' }

  return {
    title: `${partner.name} — Thanh toán MoMo & Ví Trả Sau`,
    description: partner.description
  }
}

export default function SlugPage({ params }: Props) {
  const { slug } = params

  // --- CATEGORY PAGE ---
  if (CATEGORY_SLUGS.includes(slug)) {
    const category = getCategoryBySlug(slug)!
    const partners = getPartnersByCategory(slug)
    const related = CATEGORIES.filter(c => category.related.includes(c.slug))

    return (
      <main className="min-h-screen pb-20">
        {/* Header */}
        <section className="bg-white border-b border-gray-200 py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/doi-tac" className="hover:text-momo">Đối tác</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{category.name}</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{category.name}</h1>
                <p className="text-gray-500 text-sm">{category.partnerCount.toLocaleString('vi-VN')} đối tác</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="mb-6"><VtsBanner /></div>

          {/* Sort pills */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
            <button className="flex-shrink-0 bg-momo text-white text-xs font-semibold px-4 py-2 rounded-full">Phổ biến</button>
            <button className="flex-shrink-0 bg-white border border-gray-200 text-gray-600 text-xs px-4 py-2 rounded-full hover:border-momo hover:text-momo">Mới nhất</button>
          </div>

          {/* Partner Grid */}
          {partners.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {partners.map(p => (
                <PartnerCard key={p.slug} partner={p} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 py-12 text-center">Chưa có đối tác trong danh mục này.</p>
          )}

          {/* Category Intro */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Về {category.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
          </section>

          {/* Related Categories */}
          {related.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Danh mục liên quan</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {related.map(cat => (
                  <CategoryCard key={cat.slug} category={cat} />
                ))}
              </div>
            </section>
          )}
        </div>

        <StickyCtaBanner />
      </main>
    )
  }

  // --- BRAND PAGE ---
  const partner = getPartnerBySlug(slug)
  if (!partner) notFound()

  // Lấy đối tác liên quan từ relatedSlugs, fallback về featured partners
  const relatedPartners = partner.relatedSlugs && partner.relatedSlugs.length > 0
    ? partner.relatedSlugs.map(s => getPartnerBySlug(s)).filter(Boolean) as typeof partner[]
    : getFeaturedPartners().filter(p => p.slug !== partner.slug && p.category === partner.category).slice(0, 3)

  const catName = CATEGORIES.find(c => c.slug === partner.category)?.name ?? partner.category
  const [heroFrom, heroTo] = CATEGORY_COLORS[partner.category] ?? ['#d946ef', '#ec4899']

  return (
    <main className="min-h-screen pb-24">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${heroFrom} 0%, ${heroTo} 100%)` }}
      >
        {/* Background pattern — dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Logo lớn mờ làm background */}
        {partner.domain && (
          <div className="absolute right-[-20px] top-[-20px] w-64 h-64 opacity-[0.07] blur-2xl pointer-events-none">
            <img
              src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`}
              alt=""
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-6 pb-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/60 mb-6 flex items-center gap-1.5">
            <Link href="/doi-tac" className="hover:text-white transition-colors">Đối tác</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href={`/doi-tac/${partner.category}`} className="hover:text-white transition-colors">{catName}</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90">{partner.name}</span>
          </nav>

          {/* Logo + Thông tin chính */}
          <div className="flex items-start gap-5">
            {/* Logo — iOS App Icon style */}
            <div className="w-20 h-20 rounded-[22px] shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden bg-white flex-shrink-0 border-2 border-white/30">
              <PartnerLogo name={partner.name} logo={partner.logo} domain={partner.domain} size="lg" />
            </div>

            {/* Text info */}
            <div className="flex-1 min-w-0 pt-1">
              {/* Deal badge */}
              {partner.deal && (
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${
                  partner.deal === 'Hot Deal'
                    ? 'bg-red-500 text-white'
                    : 'bg-white/25 text-white border border-white/40'
                }`}>
                  {partner.deal}
                </span>
              )}

              <h1 className="text-2xl font-bold text-white leading-tight">{partner.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(partner.rating) ? 'text-yellow-300' : 'text-white/30'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">{partner.rating}</span>
                <span className="text-white/60 text-xs">({partner.reviewCount.toLocaleString('vi-VN')} đánh giá)</span>
              </div>

              {/* Info pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {partner.address && (
                  <span className="flex items-center gap-1 text-xs text-white/80 bg-white/15 px-2.5 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {partner.address}
                  </span>
                )}
                {partner.hours && (
                  <span className="flex items-center gap-1 text-xs text-white/80 bg-white/15 px-2.5 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {partner.hours}
                  </span>
                )}
                {partner.website && (
                  <a href={partner.website} target="_blank" rel="noopener" className="flex items-center gap-1 text-xs text-white/80 bg-white/15 px-2.5 py-1 rounded-full hover:bg-white/25 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Actions row — Share / Yêu thích / Lưu */}
          <div className="mt-5">
            <BrandActions slug={partner.slug} name={partner.name} />
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">

        {/* 1. Vouchers & Ưu đãi */}
        {partner.vouchers && partner.vouchers.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <span className="w-7 h-7 bg-momo rounded-lg flex items-center justify-center text-white text-sm">🎟</span>
                Ưu đãi & Voucher
              </h2>
              <span className="text-xs text-momo font-medium">{partner.vouchers.length} ưu đãi</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {partner.vouchers.map((v, i) => (
                <VoucherCard key={i} voucher={v} />
              ))}
            </div>
          </section>
        )}

        {/* 2. Giới thiệu */}
        <section className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-3">Giới thiệu</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
          {(partner.phone || partner.size) && (
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-50 text-sm text-gray-500">
              {partner.phone && (
                <a href={`tel:${partner.phone}`} className="flex items-center gap-1.5 hover:text-momo transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {partner.phone}
                </a>
              )}
              {partner.size && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {partner.size}
                </span>
              )}
            </div>
          )}
        </section>

        {/* 3. VTS Block */}
        {partner.hasVTS && (
          <section>
            <div
              className="rounded-2xl p-5 text-white overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #d82d8b 0%, #e8529a 50%, #f472b6 100%)' }}
            >
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-bold text-base">Chấp nhận Ví Trả Sau MoMo</h2>
                </div>

                {/* 4 stat chips */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Hạn mức</p>
                    <p className="font-bold text-base mt-0.5">1–20 triệu đồng</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Tùy điểm tín dụng</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Lãi suất</p>
                    <p className="font-bold text-base mt-0.5">0%</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Không tính lãi</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Phí dịch vụ</p>
                    <p className="font-bold text-base mt-0.5">30.000đ/tháng</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Tháng có giao dịch</p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Kỳ hạn</p>
                    <p className="font-bold text-base mt-0.5">3/6/9/12 tháng</p>
                    <p className="text-[10px] text-white/60 mt-0.5">Trả góp linh hoạt</p>
                  </div>
                </div>

                {/* Điều kiện */}
                {partner.vtsCondition && (
                  <p className="text-[11px] text-white/70 mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Điều kiện: {partner.vtsCondition}
                  </p>
                )}

                <a
                  href="https://momo.vn"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 bg-white text-momo font-bold py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Kích hoạt Ví Trả Sau ngay
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 4. Hướng dẫn thanh toán — timeline style */}
        {partner.guides && partner.guides.length > 0 && (
          <section className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-7 h-7 bg-momo/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-momo" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Cách thanh toán tại {partner.name}
            </h2>
            <ol className="space-y-0">
              {partner.guides.map((step, i) => (
                <li key={i} className="relative flex gap-4 pb-4 last:pb-0">
                  {/* Connector line */}
                  {i < partner.guides!.length - 1 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-momo/30 to-momo/5" />
                  )}
                  {/* Step number */}
                  <div className="w-8 h-8 bg-momo text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 shadow-sm shadow-momo/30">
                    {i + 1}
                  </div>
                  {/* Step text */}
                  <p className="text-sm text-gray-700 leading-relaxed pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* 5. FAQ — accordion */}
        {partner.faqs && partner.faqs.length > 0 && (
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Câu hỏi thường gặp
            </h2>
            <PartnerFaqAccordion faqs={partner.faqs} />
          </section>
        )}

        {/* 6. Đối tác liên quan */}
        {relatedPartners.length > 0 && (
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-3">Đối tác liên quan</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {relatedPartners.slice(0, 3).map(p => (
                <PartnerCardHome key={p.slug} partner={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky CTA */}
      <StickyCtaBanner partnerName={partner.name} partnerDomain={partner.domain} />
    </main>
  )
}
