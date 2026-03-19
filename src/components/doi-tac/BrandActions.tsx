'use client'
import { useState, useEffect } from 'react'

interface Props {
  slug: string
  name: string
}

export default function BrandActions({ slug, name }: Props) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)

  // Đọc trạng thái từ localStorage sau khi mount
  useEffect(() => {
    const favs: string[] = JSON.parse(localStorage.getItem('momo_favourites') || '[]')
    const saves: string[] = JSON.parse(localStorage.getItem('momo_saved') || '[]')
    setLiked(favs.includes(slug))
    setSaved(saves.includes(slug))
  }, [slug])

  function toggleFav() {
    const favs: string[] = JSON.parse(localStorage.getItem('momo_favourites') || '[]')
    const next = liked ? favs.filter(s => s !== slug) : [...favs, slug]
    localStorage.setItem('momo_favourites', JSON.stringify(next))
    setLiked(!liked)
  }

  function toggleSave() {
    const saves: string[] = JSON.parse(localStorage.getItem('momo_saved') || '[]')
    const next = saved ? saves.filter(s => s !== slug) : [...saves, slug]
    localStorage.setItem('momo_saved', JSON.stringify(next))
    setSaved(!saved)
  }

  async function share() {
    const url = window.location.href
    if (navigator.share) {
      try { await navigator.share({ title: name, url }) } catch { /* bỏ qua nếu người dùng huỷ */ }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch { /* clipboard không khả dụng */ }
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Yêu thích */}
      <button
        onClick={toggleFav}
        className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
          liked
            ? 'bg-red-50 border-red-300 text-red-500 shadow-sm'
            : 'bg-white/20 border-white/40 text-white hover:bg-white/30'
        }`}
        aria-label={liked ? 'Bỏ yêu thích' : 'Yêu thích'}
      >
        <svg className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {liked ? 'Đã thích' : 'Yêu thích'}
      </button>

      {/* Lưu vào danh sách */}
      <button
        onClick={toggleSave}
        className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border transition-all ${
          saved
            ? 'bg-blue-50 border-blue-300 text-blue-500 shadow-sm'
            : 'bg-white/20 border-white/40 text-white hover:bg-white/30'
        }`}
        aria-label={saved ? 'Bỏ lưu' : 'Lưu vào danh sách'}
      >
        <svg className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        {saved ? 'Đã lưu' : 'Lưu'}
      </button>

      {/* Chia sẻ */}
      <button
        onClick={share}
        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border bg-white/20 border-white/40 text-white hover:bg-white/30 transition-all"
        aria-label="Chia sẻ"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Đã sao chép!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Chia sẻ
          </>
        )}
      </button>
    </div>
  )
}
