import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
        {/* Logo */}
        <Link href="/doi-tac" className="flex items-center gap-2.5 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg"
            alt="MoMo"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="font-bold text-gray-900 text-base">MoMo <span className="text-momo font-semibold">Partners</span></span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/doi-tac" className="bg-pink-50 text-momo font-semibold text-sm px-4 py-2 rounded-lg">
            Trang chủ
          </Link>
          <Link href="/doi-tac/am-thuc" className="text-gray-600 hover:text-gray-900 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
            Danh mục
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/doi-tac" className="text-gray-600 hover:text-gray-900 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Về chúng tôi
          </Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-sm relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7 7 0 1110.65 10.65a7 7 0 016 6z" />
          </svg>
          <input
            type="search"
            placeholder="Tìm kiếm đối tác..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-momo/20 focus:border-momo/30 placeholder:text-gray-400"
          />
        </div>

        {/* CTA */}
        <a
          href="https://momo.vn"
          className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-white bg-momo px-4 py-2 rounded-xl hover:bg-momo-dark transition-colors flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Mở ứng dụng MoMo
        </a>
      </div>
    </header>
  )
}
