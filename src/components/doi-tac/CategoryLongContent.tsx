// Long Content Section cho category page — dynamic theo slug
// Mục tiêu: tránh thin content, tối ưu GEO với H2/H3 theo từng danh mục cụ thể
interface CategoryContent {
  intro: string
  h2Payment: string
  paymentSteps: string[]
  h2Benefits: string
  benefits: { title: string; desc: string }[]
  h2Faq: string
  faqs: { q: string; a: string }[]
}

const CONTENT: Record<string, CategoryContent> = {
  'am-thuc': {
    intro: 'Thanh toán bằng MoMo tại các nhà hàng, quán cà phê và chuỗi thức ăn nhanh giúp bạn không cần mang theo tiền mặt. Hàng trăm chuỗi F&B tại Việt Nam — từ Highlands Coffee, The Coffee House, Phúc Long đến KFC, Lotteria, Pizza Hut — đã tích hợp thanh toán MoMo tại quầy và trên ứng dụng đặt đồ ăn.',
    h2Payment: 'Cách thanh toán MoMo tại nhà hàng và chuỗi cà phê',
    paymentSteps: [
      'Gọi món tại quầy hoặc qua ứng dụng đặt đồ ăn của thương hiệu',
      'Khi thanh toán, yêu cầu nhân viên hiển thị mã QR MoMo',
      'Mở ứng dụng MoMo → Quét QR — kiểm tra số tiền',
      'Chọn nguồn tiền: Ví MoMo hoặc Ví Trả Sau',
      'Xác nhận bằng PIN hoặc vân tay — nhận biên lai ngay trong app',
    ],
    h2Benefits: 'Lợi ích khi thanh toán MoMo tại các cơ sở ẩm thực',
    benefits: [
      { title: 'Không cần tiền lẻ', desc: 'Thanh toán chính xác theo hóa đơn, không phát sinh tình trạng thiếu tiền thối hay làm mất thời gian.' },
      { title: 'Tích điểm mỗi lần mua', desc: 'Nhiều chuỗi F&B tích hợp tích điểm thành viên khi thanh toán qua MoMo — tích lũy để đổi đồ uống miễn phí.' },
      { title: 'Ví Trả Sau cho nhóm lớn', desc: 'Thanh toán hóa đơn cho cả nhóm bằng Ví Trả Sau, trả sau vào cuối tháng — tiện lợi cho các buổi họp mặt hay sự kiện công ty.' },
      { title: 'Lịch sử giao dịch rõ ràng', desc: 'Mọi lần mua cà phê hay đặt ăn đều được ghi lại trong lịch sử ví — dễ quản lý chi tiêu hàng tháng.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về thanh toán MoMo tại cơ sở ẩm thực',
    faqs: [
      { q: 'Đặt đồ ăn online qua app thương hiệu có thanh toán MoMo được không?', a: 'Có. Hầu hết ứng dụng của các chuỗi F&B lớn như Highlands Coffee, KFC, Pizza Hut đều hỗ trợ thanh toán qua ví MoMo. Chọn MoMo tại bước thanh toán trong app — giao dịch hoàn tất hoàn toàn tự động.' },
      { q: 'Có thể dùng Ví Trả Sau để thanh toán bữa ăn nhóm lớn không?', a: 'Có. Ví Trả Sau cho phép thanh toán các giao dịch lớn (tối đa theo hạn mức cá nhân, lên đến 20 triệu đồng) — phù hợp cho các bữa ăn nhóm, tiệc công ty hay sự kiện.' },
      { q: 'Thanh toán MoMo tại cà phê có cộng điểm thành viên không?', a: 'Phụ thuộc từng thương hiệu. Tại Highlands Coffee, điểm Hi Member vẫn được cộng bình thường dù bạn thanh toán qua MoMo. Hãy kiểm tra chính sách tích điểm của từng chuỗi trước khi giao dịch.' },
    ],
  },
  'sieu-thi': {
    intro: 'Mua sắm trực tuyến và tại các sàn thương mại điện tử, siêu thị lớn với thanh toán MoMo giúp quá trình checkout nhanh hơn, bảo mật hơn và không cần nhập thẻ ngân hàng mỗi lần. Shopee, Lazada, Tiki, Sendo và hàng trăm shop online tại Việt Nam đều hỗ trợ ví MoMo và Ví Trả Sau.',
    h2Payment: 'Cách thanh toán MoMo khi mua sắm online và tại siêu thị',
    paymentSteps: [
      'Thêm sản phẩm vào giỏ hàng trên website hoặc app thương mại điện tử',
      'Tại bước checkout, chọn phương thức thanh toán MoMo',
      'App MoMo tự mở — xem lại số tiền và đơn hàng',
      'Chọn nguồn tiền (Ví MoMo hoặc Ví Trả Sau) và xác nhận',
      'Đơn hàng được xác nhận ngay — nhận thông báo qua app và SMS',
    ],
    h2Benefits: 'Lợi ích khi thanh toán MoMo khi mua sắm',
    benefits: [
      { title: 'Checkout nhanh hơn', desc: 'Không cần nhập số thẻ hay OTP SMS. Một lần xác nhận trong app MoMo là xong — tiết kiệm thời gian đáng kể so với thẻ ngân hàng.' },
      { title: 'Ví Trả Sau — mua ngay trả sau', desc: 'Đặt hàng ngay kể cả khi chưa đủ tiền trong ví. Ví Trả Sau cho phép mua trước với hạn mức lên đến 20 triệu đồng, trả sau 30 ngày hoặc góp 3/6/9/12 tháng lãi suất 0%.' },
      { title: 'Bảo mật giao dịch cao', desc: 'Mỗi giao dịch MoMo yêu cầu xác nhận bằng PIN hoặc sinh trắc học. Không có rủi ro lộ thông tin thẻ ngân hàng khi mua hàng online.' },
      { title: 'Hoàn tiền khi trả hàng', desc: 'Khi hủy đơn hoặc trả hàng, tiền được hoàn về Ví MoMo trong 3–5 ngày làm việc. Với Ví Trả Sau, hạn mức được khôi phục tự động.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về thanh toán MoMo khi mua sắm',
    faqs: [
      { q: 'Mua hàng trên Shopee bằng Ví Trả Sau có an toàn không?', a: 'Hoàn toàn an toàn. Ví Trả Sau MoMo hoạt động theo quy định của Ngân hàng Nhà nước. Mọi giao dịch đều được xác nhận bởi người dùng và không có khoản trừ tự động nào ngoài kỳ thanh toán đã xác nhận.' },
      { q: 'Ví Trả Sau có áp dụng cho tất cả sản phẩm trên sàn không?', a: 'Ví Trả Sau áp dụng cho hầu hết sản phẩm trên các sàn thương mại điện tử. Một số danh mục bị giới hạn theo quy định (như rượu bia, thuốc lá) hoặc theo chính sách từng sàn.' },
      { q: 'Đổi trả hàng, tiền Ví Trả Sau có được hoàn không?', a: 'Có. Khi đơn hàng hoàn thành quy trình đổi trả và được chấp thuận, hạn mức Ví Trả Sau tương ứng sẽ được khôi phục trong vòng 3–5 ngày làm việc.' },
    ],
  },
  'du-lich': {
    intro: 'Đặt vé máy bay, khách sạn, phòng nghỉ và các dịch vụ di chuyển bằng MoMo tiện lợi và nhanh chóng hơn so với thẻ ngân hàng truyền thống. Vietnam Airlines, Booking.com, Agoda, Grab, Be và nhiều dịch vụ travel khác đều chấp nhận MoMo và Ví Trả Sau.',
    h2Payment: 'Cách đặt vé và thanh toán dịch vụ du lịch bằng MoMo',
    paymentSteps: [
      'Truy cập website hoặc app của hãng hàng không / nền tảng đặt phòng',
      'Chọn chuyến bay, phòng nghỉ hoặc dịch vụ và nhập thông tin',
      'Tại bước thanh toán, chọn Ví MoMo',
      'Xác nhận trong app MoMo — chọn Ví Trả Sau nếu muốn trả góp',
      'Nhận xác nhận đặt chỗ qua email và thông báo MoMo',
    ],
    h2Benefits: 'Lợi ích khi dùng MoMo cho dịch vụ du lịch và di chuyển',
    benefits: [
      { title: 'Thanh toán vé không cần thẻ quốc tế', desc: 'Đặt vé Vietnam Airlines, Vietjet, Bamboo Airways hay phòng khách sạn quốc tế mà không cần có thẻ Visa/Mastercard — MoMo đã liên kết với tài khoản ngân hàng nội địa của bạn.' },
      { title: 'Ví Trả Sau cho vé máy bay giá cao', desc: 'Vé máy bay và phòng khách sạn đắt tiền có thể thanh toán qua Ví Trả Sau với hạn mức đến 20 triệu đồng — trả góp 3/6/9/12 tháng không lãi suất.' },
      { title: 'Gọi xe không cần tiền mặt', desc: 'Liên kết MoMo với Grab và Be để thanh toán tự động sau mỗi chuyến đi — không cần thối tiền, không cần mở ví.' },
      { title: 'Lịch sử chi tiêu du lịch rõ ràng', desc: 'Toàn bộ chi phí vé, phòng, ăn uống khi du lịch đều được ghi lại trong lịch sử MoMo — tiện để quyết toán công tác hay chia chi phí nhóm.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về thanh toán MoMo cho du lịch',
    faqs: [
      { q: 'Đặt vé Vietnam Airlines bằng Ví Trả Sau có được không?', a: 'Có. Vietnam Airlines hỗ trợ thanh toán qua MoMo — bạn có thể chọn Ví Trả Sau khi xác nhận trong app. Hạn mức Ví Trả Sau lên đến 20 triệu đồng, đủ cho hầu hết các chuyến bay nội địa.' },
      { q: 'Gọi xe Grab bằng MoMo có phát sinh phí không?', a: 'Không. Thanh toán qua ví MoMo cho Grab hoàn toàn miễn phí — giá chuyến đi giống hệt thanh toán tiền mặt.' },
      { q: 'Booking.com có chấp nhận Ví Trả Sau MoMo không?', a: 'Booking.com hỗ trợ thanh toán qua ví MoMo cho các đặt phòng có yêu cầu thanh toán trước. Khi checkout, chọn MoMo làm phương thức thanh toán và xác nhận trong app.' },
    ],
  },
  'suc-khoe-lam-dep': {
    intro: 'Thanh toán viện phí, mua thuốc, chăm sóc sức khỏe và làm đẹp tại các cơ sở y tế và chuỗi nhà thuốc uy tín bằng MoMo. Vinmec, Pharmacity, Guardian và nhiều bệnh viện, phòng khám, spa tại Việt Nam đã tích hợp thanh toán ví điện tử, giúp quá trình thanh toán nhanh chóng và không tiếp xúc.',
    h2Payment: 'Cách thanh toán MoMo tại bệnh viện, nhà thuốc và cơ sở làm đẹp',
    paymentSteps: [
      'Hoàn tất khám/điều trị và đến quầy thu ngân',
      'Thông báo nhân viên bạn muốn thanh toán bằng MoMo',
      'Quét mã QR hiển thị tại quầy — hoặc nhân viên nhập số điện thoại',
      'Kiểm tra số tiền và chọn nguồn: Ví MoMo hoặc Ví Trả Sau',
      'Xác nhận — giữ biên lai điện tử trong app MoMo làm chứng từ',
    ],
    h2Benefits: 'Lợi ích khi dùng MoMo cho y tế và chăm sóc sức khỏe',
    benefits: [
      { title: 'Không tiếp xúc — vệ sinh hơn', desc: 'Thanh toán không chạm bằng QR code tại cơ sở y tế — không cần sờ máy POS hay trao đổi tiền mặt, giảm nguy cơ lây nhiễm.' },
      { title: 'Ví Trả Sau cho chi phí y tế bất ngờ', desc: 'Chi phí khám chữa bệnh đột xuất có thể thanh toán qua Ví Trả Sau — giúp bạn xử lý ngay kể cả khi chưa kịp rút tiền, trả sau vào cuối tháng hoặc góp nhiều kỳ.' },
      { title: 'Biên lai số hóa tiện quyết toán', desc: 'Mỗi giao dịch MoMo đều có biên lai kỹ thuật số — tiện lợi khi cần quyết toán bảo hiểm hoặc chi phí công tác y tế.' },
      { title: 'Tích điểm tại chuỗi nhà thuốc', desc: 'Pharmaciy, Guardian và một số chuỗi nhà thuốc tích hợp thẻ thành viên với MoMo — mỗi lần mua tích điểm và nhận ưu đãi trên lần mua tiếp theo.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về thanh toán MoMo tại cơ sở y tế',
    faqs: [
      { q: 'Thanh toán viện phí Vinmec bằng Ví Trả Sau có được không?', a: 'Có. Vinmec chấp nhận Ví Trả Sau MoMo cho viện phí, chi phí khám và xét nghiệm tại tất cả cơ sở. Đây là giải pháp thuận tiện khi cần xử lý chi phí y tế lớn bất ngờ.' },
      { q: 'Mua thuốc theo toa tại Pharmacity có dùng MoMo được không?', a: 'Có, Ví Trả Sau và Ví MoMo đều được chấp nhận cho tất cả sản phẩm tại Pharmacity, kể cả thuốc kê đơn.' },
      { q: 'Biên lai MoMo có giá trị để quyết toán bảo hiểm không?', a: 'Biên lai điện tử MoMo xác nhận giao dịch thanh toán, nhưng để quyết toán bảo hiểm y tế, bạn vẫn cần hóa đơn VAT từ cơ sở y tế. MoMo là bằng chứng thanh toán, không thay thế hóa đơn tài chính.' },
    ],
  },
  'dien-tu': {
    intro: 'Mua điện thoại, laptop, thiết bị gia dụng và điện tử tại các chuỗi bán lẻ lớn bằng MoMo — nhanh, an toàn và không cần giữ tiền mặt lớn. Thế Giới Di Động, FPT Shop, Điện Máy Xanh và hàng trăm cửa hàng điện tử trên toàn quốc đã tích hợp MoMo và Ví Trả Sau — phù hợp cho các giao dịch giá trị cao.',
    h2Payment: 'Cách thanh toán MoMo khi mua điện tử, thiết bị công nghệ',
    paymentSteps: [
      'Chọn sản phẩm tại cửa hàng hoặc website thegioididong.com, fptshop.com.vn...',
      'Thông báo nhân viên hoặc chọn MoMo tại bước thanh toán online',
      'Quét QR hoặc để app MoMo tự mở',
      'Chọn Ví Trả Sau nếu muốn góp 3/6/9/12 tháng lãi suất 0%',
      'Xác nhận bằng PIN — nhận máy tại cửa hàng hoặc giao hàng tận nhà',
    ],
    h2Benefits: 'Lợi ích khi dùng MoMo mua sắm điện tử',
    benefits: [
      { title: 'Trả góp 0% lãi qua Ví Trả Sau', desc: 'Mua điện thoại, laptop giá cao và chia nhỏ thanh toán thành 3/6/9/12 tháng với lãi suất 0% qua Ví Trả Sau MoMo — không cần thẻ tín dụng.' },
      { title: 'Không cần mang tiền mặt lớn', desc: 'Giao dịch hàng chục triệu đồng hoàn toàn qua app — an toàn, không rủi ro mất tiền mặt khi di chuyển đến cửa hàng.' },
      { title: 'Hạn mức linh hoạt đến 20 triệu', desc: 'Ví Trả Sau cung cấp hạn mức đến 20 triệu đồng — phù hợp cho hầu hết điện thoại flagship, laptop cơ bản và thiết bị gia dụng thông dụng.' },
      { title: 'Giao dịch tức thời, lấy máy ngay', desc: 'Xác nhận thanh toán MoMo diễn ra tức thì — không cần chờ chuyển khoản hay xác minh thẻ. Lấy máy ngay tại quầy hoặc giao trong ngày.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về mua điện tử bằng MoMo',
    faqs: [
      { q: 'Hạn mức Ví Trả Sau có đủ để mua iPhone không?', a: 'Hạn mức tối đa của Ví Trả Sau là 20 triệu đồng, phù hợp với nhiều dòng iPhone từ iPhone 14 trở xuống và hầu hết dòng flagship Android. Với iPhone 15 Pro Max hay các dòng giá cao hơn, bạn có thể kết hợp Ví Trả Sau với phần tiền còn lại từ ví hoặc tài khoản ngân hàng.' },
      { q: 'Mua laptop trả góp qua Ví Trả Sau khác gì với trả góp thông thường?', a: 'Trả góp qua Ví Trả Sau MoMo không yêu cầu thẻ tín dụng, không cần thẩm định hồ sơ tại cửa hàng và không có lãi suất. Phí dịch vụ cố định 30.000đ/tháng — đơn giản và minh bạch hơn so với trả góp qua công ty tài chính truyền thống.' },
      { q: 'Mua điện thoại online bằng Ví Trả Sau có an toàn không?', a: 'An toàn. Mỗi giao dịch Ví Trả Sau yêu cầu xác nhận bằng mã PIN hoặc sinh trắc học — không ai có thể dùng hạn mức của bạn mà không có quyền truy cập thiết bị. Giao dịch online được bảo vệ bởi chuẩn mã hóa TLS/3DS.' },
    ],
  },
  'thoi-trang': {
    intro: 'Mua sắm thời trang tại Zara, H&M, Uniqlo, Biti\'s và hàng trăm thương hiệu trong nước và quốc tế bằng MoMo — tiện lợi hơn ví da, nhanh hơn thẻ ngân hàng. Các trung tâm thương mại lớn tại Hà Nội và TP.HCM đều có mặt các thương hiệu chấp nhận thanh toán MoMo.',
    h2Payment: 'Cách thanh toán MoMo khi mua sắm thời trang tại cửa hàng',
    paymentSteps: [
      'Chọn trang phục và thử đồ như bình thường',
      'Mang lên quầy thanh toán — yêu cầu nhân viên hiển thị QR MoMo',
      'Mở MoMo → Quét QR — kiểm tra số tiền trên màn hình',
      'Chọn Ví MoMo hoặc Ví Trả Sau làm nguồn thanh toán',
      'Xác nhận bằng PIN — nhận biên lai điện tử, ra về không cần hóa đơn giấy',
    ],
    h2Benefits: 'Lợi ích khi thanh toán MoMo mua sắm thời trang',
    benefits: [
      { title: 'Không cần mang ví da', desc: 'Chỉ cần điện thoại — đơn giản hóa trải nghiệm mua sắm, không lo thiếu tiền mặt hay quên thẻ khi đến trung tâm thương mại.' },
      { title: 'Ví Trả Sau cho đơn hàng lớn', desc: 'Mua outfit mới hay cập nhật tủ đồ theo mùa với Ví Trả Sau — chia thanh toán thành nhiều kỳ 0% lãi suất mà không cần thẻ tín dụng.' },
      { title: 'Lịch sử chi tiêu rõ ràng', desc: 'Kiểm soát ngân sách mua sắm dễ dàng hơn khi mọi giao dịch đều hiển thị trong lịch sử MoMo — biết chính xác mình đã chi bao nhiêu cho thời trang.' },
      { title: 'Thanh toán an toàn tại TTTM', desc: 'Không cần mang tiền mặt tại các trung tâm thương mại đông người — giảm rủi ro mất cắp, luôn thanh toán chính xác theo hóa đơn.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về mua thời trang bằng MoMo',
    faqs: [
      { q: 'Zara và H&M có nhận MoMo tại cửa hàng Việt Nam không?', a: 'Có. Zara tại Vincom và Aeon Mall, H&M tại các trung tâm thương mại lớn ở TP.HCM và Hà Nội đều chấp nhận thanh toán MoMo qua QR tại quầy.' },
      { q: 'Mua thời trang online có dùng Ví Trả Sau không?', a: 'Ví Trả Sau hoạt động trên các sàn thương mại điện tử (Shopee, Lazada, Tiki) khi bạn mua sản phẩm thời trang. Với website của thương hiệu như Zara.com/vn, hiện chưa hỗ trợ Ví Trả Sau trực tiếp.' },
      { q: 'Đổi trả trang phục, tiền MoMo có được hoàn không?', a: 'Khi đổi trả hàng theo chính sách của thương hiệu, tiền được hoàn về Ví MoMo trong 3–5 ngày làm việc. Với Ví Trả Sau, hạn mức được khôi phục sau khi giao dịch hoàn thành.' },
    ],
  },
  'giao-duc': {
    intro: 'Thanh toán học phí, đăng ký khóa học online và ứng dụng học tập bằng MoMo — tiện lợi, không cần thẻ ngân hàng quốc tế. ELSA Speak, Topica và nhiều nền tảng giáo dục trực tuyến tại Việt Nam đã tích hợp MoMo, giúp việc đăng ký học trở nên đơn giản hơn.',
    h2Payment: 'Cách thanh toán học phí và khóa học bằng MoMo',
    paymentSteps: [
      'Chọn khóa học hoặc gói đăng ký trên nền tảng giáo dục',
      'Tại bước thanh toán, chọn phương thức Ví MoMo',
      'App MoMo tự mở — xem lại chi tiết gói đăng ký và số tiền',
      'Chọn Ví MoMo hoặc Ví Trả Sau (để trả góp học phí)',
      'Xác nhận — tài khoản học được kích hoạt ngay lập tức',
    ],
    h2Benefits: 'Lợi ích khi dùng MoMo đăng ký khóa học và thanh toán học phí',
    benefits: [
      { title: 'Không cần thẻ quốc tế', desc: 'Đăng ký ứng dụng học tiếng Anh hay các nền tảng MOOC quốc tế mà không cần thẻ Visa/Mastercard — MoMo liên kết sẵn với tài khoản ngân hàng nội địa.' },
      { title: 'Ví Trả Sau cho học phí dài hạn', desc: 'Các gói học phí theo năm hoặc khóa học dài hạn có thể thanh toán qua Ví Trả Sau — chia thành nhiều kỳ 0% lãi suất, giảm áp lực tài chính.' },
      { title: 'Kích hoạt tài khoản tức thì', desc: 'Không cần chờ xác nhận chuyển khoản — thanh toán MoMo được xử lý ngay, tài khoản học được mở khóa tức thì.' },
      { title: 'Quản lý chi phí học tập', desc: 'Theo dõi chi phí học tập hàng tháng trong lịch sử MoMo — thuận tiện cho học sinh, sinh viên và phụ huynh quản lý ngân sách giáo dục.' },
    ],
    h2Faq: 'Câu hỏi thường gặp về thanh toán học phí bằng MoMo',
    faqs: [
      { q: 'Mua gói ELSA Pro bằng Ví Trả Sau được không?', a: 'Có. ELSA Speak chấp nhận MoMo Ví Trả Sau cho gói Pro tháng và gói Pro Lifetime. Thanh toán trong app MoMo — tài khoản ELSA được nâng cấp ngay sau khi xác nhận.' },
      { q: 'Học phí Topica có thể trả góp qua MoMo không?', a: 'Có, Topica chấp nhận Ví Trả Sau MoMo. Bạn có thể đăng ký khóa học và chọn hình thức trả góp 3/6 tháng tùy theo hạn mức cá nhân được duyệt.' },
      { q: 'Thanh toán học phí MoMo có xuất hóa đơn VAT không?', a: 'Hóa đơn VAT do nền tảng giáo dục cấp — không phải MoMo. Sau khi thanh toán, liên hệ cơ sở đào tạo để yêu cầu xuất hóa đơn điện tử theo thông tin của bạn.' },
    ],
  },
}

interface Props {
  categorySlug: string
  categoryName: string
}

export default function CategoryLongContent({ categorySlug, categoryName }: Props) {
  const content = CONTENT[categorySlug]
  if (!content) return null

  return (
    <section className="py-14 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Intro */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thanh toán MoMo tại {categoryName} — Những điều cần biết
          </h2>
          <p className="text-gray-600 leading-relaxed">{content.intro}</p>
        </div>

        {/* Hướng dẫn thanh toán */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">{content.h2Payment}</h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <ol className="space-y-3">
              {content.paymentSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 bg-momo text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Lợi ích */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">{content.h2Benefits}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">{content.h2Faq}</h2>
          <div className="space-y-5">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
