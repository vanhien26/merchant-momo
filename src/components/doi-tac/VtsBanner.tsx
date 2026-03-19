export default function VtsBanner() {
  return (
    <div className="flex items-center justify-between gap-3 bg-momo/5 border border-momo/20 rounded-xl px-4 py-3">
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="flex-shrink-0 w-7 h-7 bg-momo rounded-lg flex items-center justify-center text-white text-xs font-black">
          VTS
        </span>
        <p className="text-sm text-gray-700 leading-snug">
          Thanh toán <span className="font-semibold text-gray-900">Ví Trả Sau</span> tại hàng nghìn đối tác —
          lên đến <span className="font-semibold text-momo">20 triệu đồng</span>, miễn lãi 30 ngày
        </p>
      </div>
      <a
        href="https://momo.vn"
        className="flex-shrink-0 text-xs font-semibold text-momo hover:underline whitespace-nowrap"
      >
        Mở ngay →
      </a>
    </div>
  )
}
