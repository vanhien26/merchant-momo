'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PARTNERS } from '@/data/partners'
import PartnerLogo from './PartnerLogo'

const FEATURED = PARTNERS.filter(p => p.featured).slice(0, 5)

const CATEGORY_NAMES: Record<string, string> = {
  'am-thuc':          'Ẩm thực & Đồ uống',
  'thoi-trang':       'Thời trang',
  'du-lich':          'Du lịch',
  'suc-khoe-lam-dep': 'Sức khỏe & Làm đẹp',
  'dien-tu':          'Điện tử',
  'giao-duc':         'Giáo dục',
  'sieu-thi':         'Siêu thị & Tiện ích',
}

export default function SearchBar() {
  const [query, setQuery]       = useState('')
  const [open, setOpen]         = useState(false)
  const [highlighted, setHigh]  = useState(-1)
  const inputRef  = useRef<HTMLInputElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const router    = useRouter()

  // Lọc đối tác theo query
  const results = query.trim().length > 0
    ? PARTNERS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (CATEGORY_NAMES[p.category] ?? '').toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : []

  const items = query.trim() ? results : FEATURED

  // Đóng dropdown khi click ngoài
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Keyboard navigation
  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHigh(h => Math.min(h + 1, items.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHigh(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      if (highlighted >= 0 && items[highlighted]) {
        router.push(`/doi-tac/${items[highlighted].slug}`)
        setOpen(false)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/doi-tac?q=${encodeURIComponent(query)}`)
      setOpen(false)
    }
  }

  // Highlight matched text
  function highlight(text: string) {
    if (!query.trim()) return text
    const idx = text.toLowerCase().indexOf(query.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-momo/10 text-momo font-semibold rounded-sm">{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    )
  }

  return (
    <div ref={wrapRef} className="relative w-full">
      <form
        onSubmit={onSubmit}
        className="flex gap-2 bg-white rounded-2xl border border-gray-200 shadow-md p-2"
      >
        <div className="flex items-center flex-1 gap-2 pl-3">
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7 7 0 1110.65 10.65a7 7 0 016 6z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setHigh(-1) }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            placeholder="Tìm kiếm đối tác, danh mục..."
            className="flex-1 text-sm text-gray-700 focus:outline-none placeholder:text-gray-400 bg-transparent"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setHigh(-1); inputRef.current?.focus() }}
              className="text-gray-300 hover:text-gray-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-momo text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-momo-dark transition-colors flex-shrink-0"
        >
          Tìm kiếm
        </button>
      </form>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              {query.trim() ? `Kết quả cho "${query}"` : 'Đối tác nổi bật'}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              Không tìm thấy đối tác nào
            </div>
          ) : (
            <ul>
              {items.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    href={`/doi-tac/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${highlighted === i ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => setHigh(i)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 overflow-hidden flex-shrink-0">
                      <PartnerLogo name={p.name} logo={p.logo} domain={p.domain} size="sm" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {highlight(p.name)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Footer hint */}
          {query.trim() && results.length > 0 && (
            <div className="px-4 py-2.5 border-t border-gray-50 bg-gray-50/50">
              <p className="text-xs text-gray-400 text-center">
                Nhấn <kbd className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[11px]">Enter</kbd> để xem tất cả kết quả
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
