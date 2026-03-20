// Long Content Section cho trang chủ /doi-tac
// Mục tiêu: tránh thin content, tối ưu GEO (AI Overview citation) với cấu trúc H2/H3 rõ ràng
export default function HomeLongContent() {
  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── 1. Tổng quan ────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thanh toán MoMo tại đối tác — Hướng dẫn toàn tập
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MoMo là ví điện tử được sử dụng rộng rãi nhất tại Việt Nam, với hơn 50 triệu người dùng
            và mạng lưới hơn 50.000 đối tác trên toàn quốc. Bạn có thể thanh toán bằng MoMo tại siêu thị,
            nhà hàng, chuỗi cà phê, cửa hàng thời trang, bệnh viện, sàn thương mại điện tử và nhiều nơi khác —
            chỉ cần mở app, quét mã QR và xác nhận trong vài giây.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ngoài thanh toán tiện lợi, người dùng MoMo còn được hưởng các ưu đãi độc quyền từ đối tác,
            tích điểm MoMo Xu và sử dụng tính năng <strong>Ví Trả Sau</strong> — mua trước trả sau với lãi suất 0%.
          </p>
        </div>

        {/* ── 2. Cách thanh toán ──────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cách thanh toán bằng MoMo tại cửa hàng và online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tại quầy */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-momo text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                Thanh toán tại cửa hàng (QR)
              </h3>
              <ol className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">①</span>
                  Chọn hàng và ra quầy thanh toán
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">②</span>
                  Mở ứng dụng MoMo → chọn <strong>Quét QR</strong>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">③</span>
                  Quét mã QR của cửa hàng
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">④</span>
                  Chọn nguồn tiền: Ví MoMo hoặc Ví Trả Sau
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">⑤</span>
                  Xác nhận bằng PIN hoặc sinh trắc học
                </li>
              </ol>
            </div>

            {/* Online */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-momo text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                Thanh toán mua hàng online
              </h3>
              <ol className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">①</span>
                  Chọn sản phẩm và tiến hành đặt hàng
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">②</span>
                  Tại bước thanh toán, chọn <strong>Ví MoMo</strong>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">③</span>
                  App MoMo tự mở — chọn nguồn tiền
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">④</span>
                  Xác nhận giao dịch trong app
                </li>
                <li className="flex gap-2.5">
                  <span className="text-momo font-bold flex-shrink-0">⑤</span>
                  Đơn hàng được xác nhận — nhận email/SMS ngay
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* ── 3. Ví Trả Sau là gì ─────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ví Trả Sau MoMo là gì? Có an toàn không?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <strong>Ví Trả Sau</strong> (tên cũ: PayLater) là tính năng tài chính tích hợp trong ứng dụng MoMo,
            cho phép người dùng <em>mua trước — trả sau</em> với lãi suất 0%. Đây là hình thức tín dụng tiêu dùng
            ngắn hạn được cấp phép và giám sát bởi Ngân hàng Nhà nước Việt Nam.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Hạn mức', value: '1–20 triệu', sub: 'tùy điểm tín dụng' },
              { label: 'Lãi suất', value: '0%', sub: 'không tính lãi' },
              { label: 'Phí dịch vụ', value: '30.000đ', sub: 'tháng có giao dịch' },
              { label: 'Trả góp', value: '3/6/9/12', sub: 'tháng linh hoạt' },
            ].map(s => (
              <div key={s.label} className="bg-pink-50 border border-momo/10 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                <p className="text-lg font-black text-momo leading-none">{s.value}</p>
                <p className="text-[10px] text-gray-400 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Điều kiện kích hoạt Ví Trả Sau
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            {[
              'Có tài khoản MoMo đã xác thực danh tính (CCCD/CMND)',
              'Liên kết ít nhất một tài khoản ngân hàng với MoMo',
              'Đủ điểm tín dụng theo đánh giá của hệ thống MoMo',
              'Không có nợ xấu hoặc lịch sử thanh toán trễ hạn',
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Ví Trả Sau có an toàn không?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ví Trả Sau MoMo hoạt động dưới sự quản lý của Ngân hàng Nhà nước Việt Nam và tuân thủ
            quy định về hoạt động cấp tín dụng tiêu dùng. Mọi giao dịch đều được mã hóa bảo mật chuẩn
            quốc tế (TLS/SSL, 3DS). Người dùng không thể bị trừ tiền nếu không tự xác nhận bằng mã PIN
            hoặc sinh trắc học (vân tay, Face ID) trên thiết bị cá nhân.
          </p>
        </div>

        {/* ── 4. Câu hỏi thường gặp mở rộng ─────────────────────────── */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Câu hỏi thường gặp về đối tác MoMo
          </h2>

          <div className="space-y-5">
            {[
              {
                q: 'MoMo chấp nhận tại những loại cửa hàng nào?',
                a: 'MoMo được chấp nhận tại hơn 50.000 điểm bán bao gồm: siêu thị và cửa hàng tiện lợi (WinMart, Circle K, FamilyMart, GS25), chuỗi cà phê (Highlands Coffee, The Coffee House, Phúc Long), nhà hàng thức ăn nhanh (KFC, Lotteria, Pizza Hut), sàn thương mại điện tử (Shopee, Lazada, Tiki), chuỗi thời trang (Zara, H&M, Uniqlo), cơ sở y tế (Vinmec, Pharmacity) và hàng ngàn cửa hàng độc lập khác.',
              },
              {
                q: 'Thanh toán bằng MoMo có mất phí không?',
                a: 'Thanh toán bằng Ví MoMo thông thường hoàn toàn miễn phí. Nếu dùng Ví Trả Sau, phí dịch vụ là 30.000đ/tháng — chỉ tính những tháng có phát sinh giao dịch. Không có phí ẩn hay phí giao dịch trên từng lần mua.',
              },
              {
                q: 'Làm thế nào để tìm cửa hàng chấp nhận MoMo gần nhất?',
                a: 'Mở ứng dụng MoMo → chọn "Tìm cửa hàng" hoặc "Bản đồ đối tác" để xem danh sách các điểm chấp nhận MoMo xung quanh vị trí của bạn. Bạn cũng có thể tìm kiếm theo tên thương hiệu hoặc danh mục trên trang này.',
              },
              {
                q: 'MoMo Xu là gì và tích điểm như thế nào?',
                a: 'MoMo Xu là điểm thưởng tích lũy khi thực hiện các giao dịch hợp lệ trên ứng dụng MoMo. Mỗi lần thanh toán tại đối tác, nạp tiền điện thoại, thanh toán hóa đơn hay chuyển tiền đều có thể nhận MoMo Xu. Điểm tích lũy có thể đổi thành voucher giảm giá, quà tặng hoặc tiền mặt vào ví.',
              },
              {
                q: 'Tôi có thể hủy giao dịch MoMo không?',
                a: 'Đối với giao dịch QR tại cửa hàng: sau khi xác nhận thì không thể hủy — cần liên hệ trực tiếp cửa hàng để hoàn tiền. Đối với mua hàng online: áp dụng chính sách hoàn tiền của từng sàn thương mại điện tử; khi đơn hoàn, tiền được trả về Ví MoMo hoặc khôi phục hạn mức Ví Trả Sau trong 3–5 ngày làm việc.',
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
