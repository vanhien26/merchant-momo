import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/doi-tac" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
                alt="MoMo"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-bold text-gray-900">MoMo Partners</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Hệ thống đối tác thanh toán MoMo — Kết nối hàng triệu người dùng với doanh nghiệp.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/momo.vn" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-momo/10 transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@momovietnam" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-momo/10 transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              <a href="https://instagram.com/momo.vn" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-momo/10 transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Danh mục</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/doi-tac/am-thuc', label: 'Ăn uống' },
                { href: '/doi-tac/sieu-thi', label: 'Mua sắm' },
                { href: '/doi-tac/suc-khoe-lam-dep', label: 'Làm đẹp & Spa' },
                { href: '/doi-tac/du-lich', label: 'Du lịch' },
                { href: '/doi-tac/dien-tu', label: 'Điện tử' },
                { href: '/doi-tac/giao-duc', label: 'Sức khỏe' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-momo transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Hỗ trợ</h3>
            <ul className="space-y-2.5">
              {[
                'Câu hỏi thường gặp',
                'Liên hệ hỗ trợ',
                'Điều khoản sử dụng',
                'Chính sách bảo mật',
                'Hợp tác đối tác',
              ].map(item => (
                <li key={item}>
                  <a href="https://momo.vn" className="text-sm text-gray-500 hover:text-momo transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tải ứng dụng */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Tải ứng dụng</h3>
            <div className="space-y-2.5">
              <a href="https://apps.apple.com/vn/app/momo/id918751511" className="flex items-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-300 leading-none">Download on the</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mservice.momotransfer" className="flex items-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.76a2.5 2.5 0 0 1-.93-.83V1.07A2.5 2.5 0 0 1 3.18.24L14.54 12 3.18 23.76zm13.53-7.7L4.35 22.91l8.97-8.97 3.39 2.12zm2.18-1.37a2.5 2.5 0 0 1 0 2.62l-2.45 1.53-3.68-3.69 3.68-3.68 2.45 1.52a2.5 2.5 0 0 1 0 0zM4.35 1.09L16.71 7.94l-3.39 2.12L4.35 1.09z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-300 leading-none">GET IT ON</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
            <div className="mt-4 space-y-1.5 text-sm text-gray-500">
              <p className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                1900 5454 41
              </p>
              <p className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                partner@momo.vn
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} MoMo (M_Service). Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  )
}
