export interface Voucher {
  title: string
  badge: string          // e.g. "15%" or "-20K"
  desc?: string
  code?: string
  minOrder?: string
  expiry?: string
}

export interface Partner {
  slug: string
  name: string
  logo: string           // emoji fallback
  domain?: string        // e.g. "shopee.vn" — dùng để lấy logo
  deal?: string          // e.g. "Hoàn 20%" hoặc "Hot Deal"
  category: string       // category slug
  description: string
  rating: number
  reviewCount: number
  hasVTS: boolean        // Ví Trả Sau
  vtsLimit?: string
  vtsCondition?: string
  featured: boolean
  address?: string
  phone?: string
  website?: string
  hours?: string
  founded?: string
  size?: string
  vouchers?: Voucher[]
  guides?: string[]
  faqs?: { q: string; a: string }[]
  relatedSlugs?: string[]
}

export const PARTNERS: Partner[] = [
  {
    slug: 'shopee',
    name: 'Shopee',
    logo: '🛍️',
    domain: 'shopee.vn',
    deal: 'Hoàn 15%',
    category: 'sieu-thi',
    description: 'Shopee là nền tảng thương mại điện tử hàng đầu Đông Nam Á, cung cấp hàng triệu sản phẩm từ thời trang, điện tử đến thực phẩm và đồ gia dụng.',
    rating: 4.7,
    reviewCount: 128500,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://shopee.vn',
    size: '5000+ nhân viên',
    guides: [
      'Thêm sản phẩm vào giỏ hàng trên Shopee',
      'Chọn "Thanh toán" và chọn phương thức MoMo',
      'Tại MoMo, chọn "Ví Trả Sau" làm nguồn tiền',
      'Xác nhận giao dịch bằng mã PIN hoặc sinh trắc học',
      'Đơn hàng được xác nhận — trả góp sau 30 ngày'
    ],
    faqs: [
      { q: 'Ví Trả Sau có áp dụng cho tất cả sản phẩm trên Shopee không?', a: 'Ví Trả Sau áp dụng cho hầu hết sản phẩm trên Shopee, ngoại trừ một số danh mục bị hạn chế như thuốc lá, rượu bia và sản phẩm tài chính.' },
      { q: 'Hạn mức Ví Trả Sau tối đa khi mua trên Shopee là bao nhiêu?', a: 'Hạn mức tối đa của Ví Trả Sau là 20 triệu đồng, tùy thuộc vào điểm tín dụng được MoMo duyệt cho từng tài khoản.' },
      { q: 'Tôi có thể dùng Ví Trả Sau để mua sắm trên Shopee Mall không?', a: 'Có, Ví Trả Sau hoạt động với cả Shopee Mall và các shop thông thường trên Shopee.' },
      { q: 'Nếu tôi trả hàng, tiền Ví Trả Sau có được hoàn không?', a: 'Có, khi đơn hoàn thành, số dư Ví Trả Sau của bạn sẽ được cộng lại trong vòng 3–5 ngày làm việc.' },
      { q: 'Có phí khi dùng Ví Trả Sau tại Shopee không?', a: 'Ví Trả Sau không tính lãi suất. Phí dịch vụ 30.000đ/tháng, chỉ áp dụng những tháng có giao dịch. Trả đúng hạn sẽ không phát sinh thêm phí nào.' }
    ],
    vouchers: [
      { title: 'Hoàn 15% đơn đầu tiên', badge: '15%', desc: 'Áp dụng cho đơn hàng đầu tiên thanh toán bằng MoMo VTS', code: 'MOMO15SHP', minOrder: '50.000đ', expiry: '31/03/2026' },
      { title: 'Giảm 20.000đ mọi đơn', badge: '-20K', desc: 'Không giới hạn danh mục, thanh toán MoMo', code: 'MOMOVIP20', minOrder: '150.000đ', expiry: '15/04/2026' },
    ],
    relatedSlugs: ['lazada', 'tiki', 'sendo']
  },
  {
    slug: 'lazada',
    name: 'Lazada',
    logo: '📦',
    domain: 'lazada.vn',
    deal: 'Hoàn 10%',
    category: 'sieu-thi',
    description: 'Lazada là sàn thương mại điện tử lớn, thuộc hệ sinh thái Alibaba, nổi bật với hàng chính hãng và chương trình sale định kỳ.',
    rating: 4.5,
    reviewCount: 89200,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://lazada.vn',
    size: '2000+ nhân viên',
    guides: [
      'Chọn sản phẩm và thêm vào giỏ hàng',
      'Nhấn "Đặt hàng" và chọn "Thanh toán MoMo"',
      'Trong ứng dụng MoMo, chọn "Ví Trả Sau"',
      'Xác nhận thanh toán'
    ],
    faqs: [
      { q: 'Ví Trả Sau có dùng được trên Lazada không?', a: 'Có, MoMo Ví Trả Sau được chấp nhận trên Lazada.vn và ứng dụng Lazada.' },
      { q: 'Hạn mức Ví Trả Sau tối đa là bao nhiêu?', a: 'Hạn mức tối đa của Ví Trả Sau là 20 triệu đồng, tùy điểm tín dụng được MoMo duyệt. Phí dịch vụ 30.000đ/tháng, không tính lãi suất.' }
    ],
    vouchers: [
      { title: 'Hoàn 10% cho đơn thanh toán MoMo', badge: '10%', desc: 'Áp dụng toàn sàn Lazada, tối đa 30.000đ/đơn', code: 'LAZAMOMO10', minOrder: '100.000đ', expiry: '30/04/2026' },
    ],
    relatedSlugs: ['shopee', 'tiki']
  },
  {
    slug: 'tiki',
    name: 'Tiki',
    logo: '📘',
    domain: 'tiki.vn',
    deal: 'Hoàn 12%',
    category: 'sieu-thi',
    description: 'Tiki là sàn thương mại điện tử Việt Nam nổi tiếng với giao hàng nhanh TikiNOW và hàng chính hãng 100%.',
    rating: 4.6,
    reviewCount: 74300,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://tiki.vn',
    size: '1000–2000 nhân viên',
    guides: [
      'Chọn sản phẩm trên Tiki',
      'Chọn thanh toán qua Ví điện tử MoMo',
      'Chọn Ví Trả Sau làm nguồn tiền',
      'Xác nhận đơn hàng'
    ],
    faqs: [
      { q: 'Dùng Ví Trả Sau trên Tiki cần điều kiện gì?', a: 'Cần xác thực CCCD trên MoMo và liên kết tài khoản ngân hàng. Sau khi kích hoạt, hạn mức từ 1–20 triệu đồng tùy điểm tín dụng được duyệt.' }
    ],
    vouchers: [
      { title: 'Hoàn 12% TikiNOW', badge: '12%', desc: 'Dành cho sản phẩm giao 2 giờ TikiNOW khi thanh toán MoMo', code: 'TIKI12NOW', minOrder: '80.000đ', expiry: '15/04/2026' },
      { title: 'Giảm 15.000đ sách & văn phòng', badge: '-15K', desc: 'Áp dụng cho danh mục Sách & Văn phòng phẩm', code: 'TIKISACH', minOrder: '50.000đ', expiry: '30/04/2026' },
    ],
    relatedSlugs: ['shopee', 'lazada']
  },
  {
    slug: 'grab',
    name: 'Grab',
    logo: '🚗',
    domain: 'grab.com',
    deal: 'Hoàn 8%',
    category: 'du-lich',
    description: 'Grab cung cấp dịch vụ đặt xe, giao đồ ăn và thanh toán số tại Việt Nam và Đông Nam Á.',
    rating: 4.4,
    reviewCount: 203000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://grab.com/vn',
    size: '5000+ nhân viên',
    guides: [
      'Mở ứng dụng Grab và đặt dịch vụ',
      'Chọn MoMo làm phương thức thanh toán',
      'Trong MoMo, chọn Ví Trả Sau',
      'Xác nhận và hoàn tất chuyến đi/đơn hàng'
    ],
    faqs: [
      { q: 'Ví Trả Sau có dùng cho GrabFood không?', a: 'Có, bạn có thể dùng Ví Trả Sau cho GrabCar, GrabBike, GrabFood và GrabExpress.' }
    ],
    vouchers: [
      { title: 'Hoàn 8% GrabCar & GrabBike', badge: '8%', desc: 'Áp dụng khi chọn MoMo làm phương thức thanh toán', code: 'GRABMOMO8', expiry: '30/04/2026' },
      { title: 'Hoàn 10% GrabFood cuối tuần', badge: '10%', desc: 'Thứ 7 & Chủ nhật — đơn GrabFood từ 80.000đ', code: 'GRABFOOD10', minOrder: '80.000đ', expiry: '31/03/2026' },
    ],
    relatedSlugs: ['be', 'gojek']
  },
  {
    slug: 'highlands-coffee',
    name: 'Highlands Coffee',
    logo: '☕',
    domain: 'highlandscoffee.com.vn',
    deal: 'Hoàn 20%',
    category: 'am-thuc',
    description: 'Highlands Coffee là chuỗi cà phê Việt hàng đầu với hơn 600 cửa hàng trên toàn quốc, nổi bật với không gian làm việc và cà phê phin truyền thống.',
    rating: 4.3,
    reviewCount: 56700,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://highlandscoffee.com.vn',
    address: 'Toàn quốc — 600+ cửa hàng',
    phone: '1800 6936',
    hours: '6:30 – 22:30 hàng ngày',
    size: '500–1000 nhân viên',
    guides: [
      'Gọi đồ uống tại quầy hoặc qua ứng dụng',
      'Chọn thanh toán bằng MoMo',
      'Tại màn hình thanh toán MoMo, chọn Ví Trả Sau',
      'Quét QR hoặc nhập số điện thoại để hoàn tất'
    ],
    faqs: [
      { q: 'Dùng Ví Trả Sau tại Highlands cần số tiền tối thiểu không?', a: 'Không có hạn mức tối thiểu. Bạn có thể dùng Ví Trả Sau cho bất kỳ giá trị nào.' },
      { q: 'Có cộng điểm Hi Member khi thanh toán bằng Ví Trả Sau không?', a: 'Có, điểm Hi Member được tính bình thường bất kể phương thức thanh toán.' }
    ],
    vouchers: [
      { title: 'Hoàn 20% mọi đồ uống', badge: '20%', desc: 'Thanh toán bằng MoMo tại quầy Highlands Coffee', code: 'HLC20MOMO', expiry: '30/04/2026' },
      { title: 'Mua 1 tặng 1 Trà Bộ', badge: '1+1', desc: 'Áp dụng Thứ 2 – Thứ 4 từ 14:00 – 17:00', code: 'HLCTRA11', expiry: '31/03/2026' },
    ],
    relatedSlugs: ['the-coffee-house', 'phuc-long']
  },
  {
    slug: 'the-coffee-house',
    name: 'The Coffee House',
    logo: '🏠',
    domain: 'thecoffeehouse.com',
    category: 'am-thuc',
    description: 'The Coffee House là chuỗi cà phê phong cách Việt với hơn 150 cửa hàng, nổi tiếng với không gian ấm cúng và trà sữa độc đáo.',
    rating: 4.4,
    reviewCount: 32100,
    hasVTS: false,
    featured: false,
    website: 'https://thecoffeehouse.com',
    address: 'Toàn quốc — 150+ cửa hàng',
    guides: [],
    faqs: [],
    relatedSlugs: ['highlands-coffee', 'phuc-long']
  },
  {
    slug: 'zara-vn',
    name: 'Zara Vietnam',
    logo: '👔',
    domain: 'zara.com',
    deal: 'Hot Deal',
    category: 'thoi-trang',
    description: 'Zara là thương hiệu thời trang nhanh hàng đầu thế giới, hiện diện tại các trung tâm thương mại lớn ở TP.HCM và Hà Nội.',
    rating: 4.2,
    reviewCount: 18900,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://www.zara.com/vn',
    address: 'Vincom, Aeon Mall — TP.HCM & Hà Nội',
    hours: '9:00 – 22:00 hàng ngày',
    guides: [
      'Chọn sản phẩm và mang lên quầy thanh toán',
      'Yêu cầu nhân viên quét QR MoMo',
      'Mở MoMo và chọn Quét QR',
      'Chọn Ví Trả Sau làm nguồn tiền',
      'Nhập PIN xác nhận'
    ],
    faqs: [
      { q: 'Mua online trên Zara.com có dùng Ví Trả Sau được không?', a: 'Hiện tại Ví Trả Sau chỉ áp dụng tại cửa hàng Zara vật lý, chưa hỗ trợ trên Zara.com/vn.' }
    ],
    vouchers: [
      { title: 'Hot Deal cuối tuần −30%', badge: '-30%', desc: 'Toàn bộ hàng mới nhập tháng 3, chỉ áp dụng tại quầy', code: 'ZARAHO30', expiry: '31/03/2026' },
    ],
    relatedSlugs: ['hm-vn', 'uniqlo-vn']
  },
  {
    slug: 'vinmec',
    name: 'Bệnh viện Vinmec',
    logo: '🏥',
    domain: 'vinmec.com',
    deal: 'Hoàn 5%',
    category: 'suc-khoe-lam-dep',
    description: 'Vinmec là hệ thống bệnh viện đa khoa quốc tế hàng đầu Việt Nam với tiêu chuẩn JCI, cung cấp dịch vụ y tế chất lượng cao.',
    rating: 4.6,
    reviewCount: 41200,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://vinmec.com',
    address: 'Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng',
    phone: '1900 232 389',
    hours: '24/7',
    guides: [
      'Đặt lịch khám tại quầy hoặc qua app Vinmec',
      'Khi đến khám, yêu cầu thanh toán bằng MoMo',
      'Quét QR MoMo tại quầy thu ngân',
      'Chọn Ví Trả Sau — xác nhận bằng PIN'
    ],
    faqs: [
      { q: 'Dùng Ví Trả Sau để thanh toán viện phí Vinmec được không?', a: 'Có, Ví Trả Sau được chấp nhận cho viện phí, chi phí khám và xét nghiệm tại Vinmec.' },
      { q: 'Hạn mức 50 triệu có áp dụng cho tất cả dịch vụ?', a: 'Hạn mức phụ thuộc vào mức tín dụng cá nhân của bạn. 50 triệu là mức tối đa có thể được duyệt.' }
    ],
    relatedSlugs: ['pharmacity', 'guardian']
  },

  // ── Ẩm thực ────────────────────────────────────────────────────────────
  {
    slug: 'phuc-long',
    name: 'Phúc Long',
    logo: '🍵',
    domain: 'phuclong.com.vn',
    deal: 'Hoàn 10%',
    category: 'am-thuc',
    description: 'Phúc Long là thương hiệu trà và cà phê Việt Nam nổi tiếng với hơn 100 cửa hàng toàn quốc, nổi bật với trà sữa, hồng trà và bạc xỉu truyền thống.',
    rating: 4.5,
    reviewCount: 28400,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://phuclong.com.vn',
    address: 'Toàn quốc — 100+ cửa hàng',
    hours: '7:00 – 22:00 hàng ngày',
    guides: [
      'Gọi đồ uống tại quầy hoặc qua app Phúc Long',
      'Chọn phương thức thanh toán MoMo',
      'Mở MoMo, chọn Ví Trả Sau làm nguồn tiền',
      'Quét QR hoặc nhập số điện thoại để hoàn tất'
    ],
    faqs: [
      { q: 'Phúc Long có chấp nhận Ví Trả Sau MoMo không?', a: 'Có, Ví Trả Sau được chấp nhận tại tất cả cửa hàng Phúc Long trên toàn quốc.' },
      { q: 'Có được cộng điểm thành viên khi dùng Ví Trả Sau không?', a: 'Có, điểm thành viên Phúc Long được tính bình thường bất kể phương thức thanh toán.' }
    ],
    relatedSlugs: ['highlands-coffee', 'the-coffee-house']
  },
  {
    slug: 'kfc-vietnam',
    name: 'KFC Vietnam',
    logo: '🍗',
    domain: 'kfcvietnam.com.vn',
    deal: 'Hoàn 8%',
    category: 'am-thuc',
    description: 'KFC là chuỗi nhà hàng gà rán nổi tiếng toàn cầu với hơn 150 cửa hàng tại Việt Nam, phục vụ các món gà giòn, burger và combo hấp dẫn.',
    rating: 4.1,
    reviewCount: 67300,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://kfcvietnam.com.vn',
    address: 'Toàn quốc — 150+ cửa hàng',
    hours: '9:00 – 22:30 hàng ngày',
    guides: [
      'Chọn món tại quầy hoặc qua app KFC',
      'Tại bước thanh toán, chọn MoMo',
      'Trong MoMo, chọn Ví Trả Sau',
      'Xác nhận bằng PIN và nhận đơn hàng'
    ],
    faqs: [
      { q: 'Đặt KFC qua app có dùng Ví Trả Sau được không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận cả tại quầy và khi đặt online qua app KFC.' }
    ],
    relatedSlugs: ['lotteria', 'pizza-hut']
  },
  {
    slug: 'lotteria',
    name: 'Lotteria',
    logo: '🍔',
    domain: 'lotteria.vn',
    deal: 'Hoàn 6%',
    category: 'am-thuc',
    description: 'Lotteria là chuỗi nhà hàng thức ăn nhanh Hàn Quốc phổ biến tại Việt Nam với hơn 200 cửa hàng, nổi tiếng với burger bò, gà chiên và mozzarella stick.',
    rating: 4.0,
    reviewCount: 49800,
    hasVTS: false,
    featured: false,
    website: 'https://lotteria.vn',
    address: 'Toàn quốc — 200+ cửa hàng',
    hours: '9:00 – 22:00 hàng ngày',
    guides: [],
    faqs: [],
    relatedSlugs: ['kfc-vietnam', 'pizza-hut']
  },
  {
    slug: 'pizza-hut',
    name: 'Pizza Hut',
    logo: '🍕',
    domain: 'pizzahut.com.vn',
    deal: 'Hoàn 10%',
    category: 'am-thuc',
    description: 'Pizza Hut là thương hiệu pizza nổi tiếng toàn cầu, hiện diện rộng khắp tại Việt Nam với dịch vụ giao hàng tận nơi và không gian nhà hàng sang trọng.',
    rating: 4.2,
    reviewCount: 38100,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://pizzahut.com.vn',
    address: 'Hà Nội, TP.HCM và các tỉnh thành lớn',
    phone: '1900 6001',
    hours: '10:00 – 22:00 hàng ngày',
    guides: [
      'Đặt pizza trực tiếp tại nhà hàng hoặc gọi hotline 1900 6001',
      'Chọn MoMo là phương thức thanh toán',
      'Chọn Ví Trả Sau trong app MoMo',
      'Xác nhận đơn hàng bằng PIN'
    ],
    faqs: [
      { q: 'Đặt Pizza Hut online có thanh toán bằng Ví Trả Sau không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận cho đơn đặt online và tại cửa hàng Pizza Hut.' }
    ],
    relatedSlugs: ['kfc-vietnam', 'lotteria']
  },

  // ── Thời trang ─────────────────────────────────────────────────────────
  {
    slug: 'hm-vn',
    name: 'H&M Vietnam',
    logo: '👕',
    domain: 'hm.com',
    deal: 'Hoàn 8%',
    category: 'thoi-trang',
    description: 'H&M là thương hiệu thời trang Thụy Điển nổi tiếng toàn cầu với phong cách hiện đại, giá cả phải chăng, hiện diện tại các trung tâm thương mại lớn ở Việt Nam.',
    rating: 4.3,
    reviewCount: 22600,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://hm.com/vn',
    address: 'Vincom, Aeon Mall — TP.HCM & Hà Nội',
    hours: '9:30 – 22:00 hàng ngày',
    guides: [
      'Chọn trang phục và mang lên quầy thanh toán',
      'Yêu cầu nhân viên quét QR MoMo',
      'Mở MoMo, chọn Quét QR',
      'Chọn Ví Trả Sau và xác nhận PIN'
    ],
    faqs: [
      { q: 'H&M có chấp nhận Ví Trả Sau không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận tại tất cả cửa hàng H&M tại Việt Nam.' }
    ],
    relatedSlugs: ['zara-vn', 'uniqlo-vn']
  },
  {
    slug: 'uniqlo-vn',
    name: 'Uniqlo Vietnam',
    logo: '🧥',
    domain: 'uniqlo.com',
    deal: 'Hoàn 5%',
    category: 'thoi-trang',
    description: 'Uniqlo là thương hiệu thời trang Nhật Bản chuyên trang phục cơ bản chất lượng cao với công nghệ vải tiên tiến như Heattech, AIRism và Ultra Light Down.',
    rating: 4.5,
    reviewCount: 31700,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://uniqlo.com/vn',
    address: 'Vincom, Lotte Mall — TP.HCM & Hà Nội',
    hours: '10:00 – 22:00 hàng ngày',
    guides: [
      'Chọn sản phẩm và xếp hàng tại quầy thanh toán',
      'Thông báo nhân viên bạn muốn thanh toán MoMo',
      'Quét mã QR bằng app MoMo',
      'Chọn Ví Trả Sau — xác nhận bằng PIN'
    ],
    faqs: [
      { q: 'Uniqlo online có nhận Ví Trả Sau không?', a: 'Hiện Ví Trả Sau chỉ áp dụng tại cửa hàng Uniqlo, chưa hỗ trợ mua online trên website.' }
    ],
    vouchers: [
      { title: 'Hoàn 5% khi mua Heattech', badge: '5%', desc: 'Áp dụng dòng Heattech & AIRism thanh toán MoMo', code: 'UNIQLO5', expiry: '31/03/2026' },
    ],
    relatedSlugs: ['zara-vn', 'hm-vn']
  },
  {
    slug: 'bitis',
    name: "Biti's",
    logo: '👟',
    domain: 'bitis.com.vn',
    deal: 'Hoàn 12%',
    category: 'thoi-trang',
    description: "Biti's là thương hiệu giày dép Việt Nam hàng đầu với hơn 40 năm lịch sử, nổi tiếng với dòng Biti's Hunter và cam kết chất lượng nội địa cao cấp.",
    rating: 4.4,
    reviewCount: 18900,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://bitis.com.vn',
    address: 'Toàn quốc — 150+ cửa hàng',
    guides: [
      'Chọn sản phẩm tại cửa hàng Biti\'s',
      'Yêu cầu thanh toán bằng MoMo',
      'Quét QR và chọn Ví Trả Sau',
      'Nhập PIN xác nhận'
    ],
    faqs: [
      { q: 'Biti\'s online có dùng được Ví Trả Sau không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận cho đơn mua hàng trên website bitis.com.vn và tại cửa hàng.' }
    ],
    relatedSlugs: ['hm-vn', 'uniqlo-vn']
  },

  // ── Du lịch ────────────────────────────────────────────────────────────
  {
    slug: 'vietnam-airlines',
    name: 'Vietnam Airlines',
    logo: '✈️',
    domain: 'vietnamairlines.com',
    deal: 'Hoàn 5%',
    category: 'du-lich',
    description: 'Vietnam Airlines là hãng hàng không quốc gia Việt Nam với mạng lưới bay rộng khắp trong nước và quốc tế, mang đến dịch vụ bay chất lượng 4 sao.',
    rating: 4.3,
    reviewCount: 94500,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://vietnamairlines.com',
    phone: '1900 1100',
    guides: [
      'Truy cập vietnamairlines.com hoặc app Vietnam Airlines',
      'Chọn chuyến bay và nhập thông tin hành khách',
      'Tại bước thanh toán, chọn Ví MoMo',
      'Chọn Ví Trả Sau và xác nhận giao dịch'
    ],
    faqs: [
      { q: 'Mua vé Vietnam Airlines qua MoMo có được hoàn tiền không?', a: 'Có, khi thanh toán qua MoMo Ví Trả Sau bạn được hoàn tiền 5% vào ví MoMo sau khi giao dịch hoàn tất.' },
      { q: 'Ví Trả Sau có đủ hạn mức mua vé máy bay không?', a: 'Hạn mức Ví Trả Sau lên đến 20 triệu đồng, đủ cho hầu hết các chuyến bay nội địa và nhiều chặng quốc tế.' }
    ],
    vouchers: [
      { title: 'Giảm 5% vé bay nội địa', badge: '5%', desc: 'Áp dụng khi đặt vé qua app/web Vietnam Airlines bằng MoMo', code: 'VNA5MOMO', minOrder: '500.000đ', expiry: '31/05/2026' },
      { title: 'Hoàn 200.000đ vé quốc tế', badge: '-200K', desc: 'Vé bay quốc tế từ 3.000.000đ, thanh toán MoMo VTS', code: 'VNAINTL', minOrder: '3.000.000đ', expiry: '30/06/2026' },
    ],
    relatedSlugs: ['booking-com', 'agoda']
  },
  {
    slug: 'booking-com',
    name: 'Booking.com',
    logo: '🏨',
    domain: 'booking.com',
    deal: 'Hoàn 6%',
    category: 'du-lich',
    description: 'Booking.com là nền tảng đặt phòng khách sạn lớn nhất thế giới với hàng triệu chỗ nghỉ tại hơn 220 quốc gia, bao gồm khách sạn, villa, căn hộ và resort.',
    rating: 4.4,
    reviewCount: 112000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://booking.com',
    guides: [
      'Tìm kiếm chỗ nghỉ trên Booking.com',
      'Chọn phòng và điền thông tin đặt phòng',
      'Chọn MoMo làm phương thức thanh toán',
      'Xác nhận bằng Ví Trả Sau trong app MoMo'
    ],
    faqs: [
      { q: 'Dùng Ví Trả Sau để đặt khách sạn trên Booking.com có được không?', a: 'Có, bạn có thể dùng MoMo Ví Trả Sau cho các đặt phòng yêu cầu thanh toán trước trên Booking.com.' }
    ],
    relatedSlugs: ['agoda', 'vietnam-airlines']
  },
  {
    slug: 'agoda',
    name: 'Agoda',
    logo: '🌏',
    domain: 'agoda.com',
    deal: 'Hoàn 7%',
    category: 'du-lich',
    description: 'Agoda là nền tảng đặt phòng khách sạn hàng đầu châu Á với hơn 3 triệu chỗ nghỉ trên toàn thế giới và giá tốt nhất cho du khách.',
    rating: 4.3,
    reviewCount: 87600,
    hasVTS: false,
    featured: false,
    website: 'https://agoda.com',
    guides: [],
    faqs: [],
    relatedSlugs: ['booking-com', 'vietnam-airlines']
  },

  // ── Sức khỏe & Làm đẹp ─────────────────────────────────────────────────
  {
    slug: 'pharmacity',
    name: 'Pharmacity',
    logo: '💊',
    domain: 'pharmacity.vn',
    deal: 'Hoàn 8%',
    category: 'suc-khoe-lam-dep',
    description: 'Pharmacity là chuỗi nhà thuốc hiện đại hàng đầu Việt Nam với hơn 1.000 chi nhánh, cung cấp thuốc, thực phẩm chức năng và sản phẩm chăm sóc sức khỏe.',
    rating: 4.4,
    reviewCount: 53200,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://pharmacity.vn',
    address: 'Toàn quốc — 1.000+ cửa hàng',
    hours: '7:00 – 22:00 hàng ngày',
    guides: [
      'Chọn sản phẩm tại Pharmacity',
      'Tại quầy, yêu cầu thanh toán bằng MoMo',
      'Quét QR và chọn Ví Trả Sau',
      'Xác nhận bằng PIN hoặc sinh trắc học'
    ],
    faqs: [
      { q: 'Mua thuốc tại Pharmacity có dùng Ví Trả Sau được không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận cho tất cả sản phẩm tại Pharmacity, kể cả thuốc theo toa.' }
    ],
    vouchers: [
      { title: 'Hoàn 8% thuốc & TPCN', badge: '8%', desc: 'Áp dụng toàn bộ sản phẩm khi thanh toán MoMo', code: 'PHARMA8', expiry: '30/04/2026' },
      { title: 'Giảm 10% mỹ phẩm & chăm sóc', badge: '10%', desc: 'Danh mục Skincare & Làm đẹp, đơn từ 200.000đ', code: 'PHARMABEAUTY', minOrder: '200.000đ', expiry: '31/03/2026' },
    ],
    relatedSlugs: ['guardian', 'vinmec']
  },
  {
    slug: 'guardian',
    name: 'Guardian',
    logo: '💄',
    domain: 'guardianvietnam.com.vn',
    deal: 'Hoàn 10%',
    category: 'suc-khoe-lam-dep',
    description: 'Guardian là chuỗi cửa hàng mỹ phẩm và chăm sóc sức khỏe lớn nhất Đông Nam Á, cung cấp hàng nghìn sản phẩm từ các thương hiệu quốc tế cao cấp.',
    rating: 4.3,
    reviewCount: 29800,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://guardianvietnam.com.vn',
    address: 'Toàn quốc — 150+ cửa hàng',
    hours: '9:00 – 22:00 hàng ngày',
    guides: [
      'Chọn sản phẩm tại Guardian',
      'Yêu cầu nhân viên quét QR MoMo',
      'Chọn Ví Trả Sau trong app MoMo',
      'Xác nhận thanh toán bằng PIN'
    ],
    faqs: [
      { q: 'Guardian online có nhận Ví Trả Sau không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận trên website Guardian và tại cửa hàng.' }
    ],
    relatedSlugs: ['pharmacity', 'vinmec']
  },

  // ── Điện tử ───────────────────────────────────────────────────────────
  {
    slug: 'the-gioi-di-dong',
    name: 'Thế Giới Di Động',
    logo: '📱',
    domain: 'thegioididong.com',
    deal: 'Hoàn 3%',
    category: 'dien-tu',
    description: 'Thế Giới Di Động là chuỗi bán lẻ điện thoại và thiết bị di động lớn nhất Việt Nam với hơn 2.000 cửa hàng, cung cấp đầy đủ các thương hiệu Apple, Samsung, Xiaomi...',
    rating: 4.4,
    reviewCount: 187000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: true,
    website: 'https://thegioididong.com',
    address: 'Toàn quốc — 2.000+ cửa hàng',
    phone: '1800 1060',
    hours: '8:00 – 21:30 hàng ngày',
    guides: [
      'Chọn sản phẩm tại cửa hàng hoặc website thegioididong.com',
      'Chọn thanh toán bằng MoMo',
      'Trong app MoMo, chọn Ví Trả Sau',
      'Xác nhận giao dịch — nhận máy ngay hoặc giao hàng tận nhà'
    ],
    faqs: [
      { q: 'Mua điện thoại tại TGDĐ có trả góp bằng Ví Trả Sau không?', a: 'Có, bạn có thể dùng Ví Trả Sau để thanh toán và chia nhỏ thành 3/6/9/12 tháng với 0% lãi suất.' },
      { q: 'Hạn mức Ví Trả Sau có đủ mua iPhone không?', a: 'Hạn mức tối đa là 20 triệu đồng, phù hợp với nhiều dòng iPhone và điện thoại cao cấp.' }
    ],
    vouchers: [
      { title: 'Hoàn 3% mọi sản phẩm', badge: '3%', desc: 'Tối đa 200.000đ/đơn khi thanh toán MoMo', code: 'TGDD3MOMO', minOrder: '1.000.000đ', expiry: '31/03/2026' },
      { title: 'Giảm 500.000đ mua laptop', badge: '-500K', desc: 'Áp dụng cho laptop từ 10.000.000đ, VTS MoMo', code: 'TGDDLAP', minOrder: '10.000.000đ', expiry: '15/04/2026' },
    ],
    relatedSlugs: ['fpt-shop', 'dien-may-xanh']
  },
  {
    slug: 'fpt-shop',
    name: 'FPT Shop',
    logo: '💻',
    domain: 'fptshop.com.vn',
    deal: 'Hoàn 4%',
    category: 'dien-tu',
    description: 'FPT Shop là chuỗi bán lẻ điện thoại, laptop và thiết bị điện tử thuộc tập đoàn FPT với hơn 700 cửa hàng, nổi tiếng với dịch vụ bảo hành toàn diện.',
    rating: 4.3,
    reviewCount: 143000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://fptshop.com.vn',
    address: 'Toàn quốc — 700+ cửa hàng',
    phone: '1800 6601',
    hours: '8:00 – 21:00 hàng ngày',
    guides: [
      'Chọn sản phẩm tại FPT Shop',
      'Yêu cầu nhân viên lập đơn thanh toán MoMo',
      'Chọn Ví Trả Sau trong app MoMo',
      'Xác nhận và nhận sản phẩm'
    ],
    faqs: [
      { q: 'FPT Shop có hỗ trợ trả góp qua Ví Trả Sau không?', a: 'Có, FPT Shop chấp nhận thanh toán Ví Trả Sau và bạn có thể chia thành 3/6/9/12 tháng 0% lãi.' }
    ],
    relatedSlugs: ['the-gioi-di-dong', 'dien-may-xanh']
  },
  {
    slug: 'dien-may-xanh',
    name: 'Điện Máy Xanh',
    logo: '🖥️',
    domain: 'dienmayxanh.com',
    deal: 'Hoàn 3%',
    category: 'dien-tu',
    description: 'Điện Máy Xanh là chuỗi bán lẻ điện máy gia dụng lớn nhất Việt Nam thuộc MWG, cung cấp tivi, tủ lạnh, máy giặt, điều hòa và hàng trăm thiết bị gia đình khác.',
    rating: 4.4,
    reviewCount: 162000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://dienmayxanh.com',
    address: 'Toàn quốc — 1.000+ cửa hàng',
    phone: '1800 2044',
    hours: '8:00 – 21:30 hàng ngày',
    guides: [
      'Chọn sản phẩm tại cửa hàng hoặc website dienmayxanh.com',
      'Chọn MoMo là phương thức thanh toán',
      'Chọn Ví Trả Sau trong app MoMo',
      'Xác nhận — giao hàng trong 2 giờ hoặc tại cửa hàng'
    ],
    faqs: [
      { q: 'Mua máy lạnh tại Điện Máy Xanh có dùng Ví Trả Sau không?', a: 'Có, Ví Trả Sau được chấp nhận cho tất cả sản phẩm tại Điện Máy Xanh, phù hợp cho các mặt hàng có giá trị cao.' }
    ],
    relatedSlugs: ['the-gioi-di-dong', 'fpt-shop']
  },

  // ── Giáo dục ──────────────────────────────────────────────────────────
  {
    slug: 'elsa-speak',
    name: 'ELSA Speak',
    logo: '🎓',
    domain: 'elsaspeak.com',
    deal: 'Hoàn 15%',
    category: 'giao-duc',
    description: 'ELSA Speak là ứng dụng học phát âm tiếng Anh AI hàng đầu thế giới, được hơn 50 triệu người dùng tin tưởng với công nghệ nhận dạng giọng nói tiên tiến.',
    rating: 4.6,
    reviewCount: 24300,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://elsaspeak.com',
    guides: [
      'Tải app ELSA Speak và đăng ký tài khoản',
      'Chọn gói Pro hoặc ELSA Pro Lifetime',
      'Chọn thanh toán qua MoMo',
      'Chọn Ví Trả Sau và xác nhận'
    ],
    faqs: [
      { q: 'Mua gói ELSA Pro có dùng Ví Trả Sau được không?', a: 'Có, bạn có thể dùng Ví Trả Sau MoMo để mua gói ELSA Pro tháng hoặc năm.' }
    ],
    relatedSlugs: ['duolingo', 'topica']
  },
  {
    slug: 'topica',
    name: 'Topica',
    logo: '📚',
    domain: 'topica.vn',
    deal: 'Hoàn 10%',
    category: 'giao-duc',
    description: 'Topica là nền tảng giáo dục trực tuyến hàng đầu Đông Nam Á, cung cấp hơn 1.000 khóa học từ tiếng Anh, lập trình, kỹ năng mềm đến các chứng chỉ chuyên ngành.',
    rating: 4.2,
    reviewCount: 17800,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://topica.vn',
    guides: [
      'Chọn khóa học trên topica.vn',
      'Nhấn đăng ký và chọn phương thức MoMo',
      'Chọn Ví Trả Sau — học ngay, trả sau 30 ngày',
      'Bắt đầu học trực tuyến'
    ],
    faqs: [
      { q: 'Có thể dùng Ví Trả Sau để mua khóa học Topica không?', a: 'Có, Topica chấp nhận Ví Trả Sau MoMo cho tất cả khóa học trên nền tảng.' }
    ],
    relatedSlugs: ['elsa-speak']
  },

  // ── Siêu thị ──────────────────────────────────────────────────────────
  {
    slug: 'winmart',
    name: 'WinMart',
    logo: '🛒',
    domain: 'winmart.com.vn',
    deal: 'Hoàn 5%',
    category: 'sieu-thi',
    description: 'WinMart là chuỗi siêu thị và cửa hàng tiện lợi lớn nhất Việt Nam thuộc Masan Group với hơn 3.000 điểm bán, cung cấp hàng tươi sống, thực phẩm và hàng tiêu dùng.',
    rating: 4.2,
    reviewCount: 78400,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://winmart.com.vn',
    address: 'Toàn quốc — 3.000+ điểm bán',
    hours: '7:00 – 22:00 hàng ngày',
    guides: [
      'Chọn hàng hóa tại WinMart hoặc WinMart+',
      'Tại quầy thanh toán, chọn thanh toán MoMo',
      'Quét QR MoMo và chọn Ví Trả Sau',
      'Xác nhận bằng PIN'
    ],
    faqs: [
      { q: 'Mua hàng tại WinMart+ có dùng Ví Trả Sau được không?', a: 'Có, Ví Trả Sau MoMo được chấp nhận tại tất cả siêu thị WinMart và cửa hàng WinMart+ trên toàn quốc.' }
    ],
    relatedSlugs: ['shopee', 'lazada']
  },
  {
    slug: 'sendo',
    name: 'Sendo',
    logo: '🏬',
    domain: 'sendo.vn',
    deal: 'Hoàn 8%',
    category: 'sieu-thi',
    description: 'Sendo là sàn thương mại điện tử thuần Việt thuộc FPT, chuyên hàng hóa nội địa với hơn 10 triệu sản phẩm từ hàng trăm nghìn nhà bán hàng trên cả nước.',
    rating: 4.1,
    reviewCount: 52000,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://sendo.vn',
    guides: [
      'Chọn sản phẩm và thêm vào giỏ hàng trên Sendo',
      'Chọn MoMo làm phương thức thanh toán',
      'Chọn Ví Trả Sau trong app MoMo',
      'Xác nhận đơn hàng'
    ],
    faqs: [
      { q: 'Sendo có hỗ trợ thanh toán Ví Trả Sau không?', a: 'Có, Sendo chấp nhận MoMo Ví Trả Sau cho tất cả đơn hàng trên sàn.' }
    ],
    relatedSlugs: ['shopee', 'tiki']
  },
  {
    slug: 'be',
    name: 'Be',
    logo: '🟡',
    domain: 'be.com.vn',
    deal: 'Hoàn 10%',
    category: 'du-lich',
    description: 'Be là ứng dụng gọi xe Việt Nam hàng đầu với dịch vụ beBike, beCar và beDelivery, cam kết minh bạch về giá và hỗ trợ tài xế Việt.',
    rating: 4.2,
    reviewCount: 76500,
    hasVTS: true,
    vtsCondition: 'Xác thực CCCD trên MoMo · Liên kết tài khoản ngân hàng',
    featured: false,
    website: 'https://be.com.vn',
    guides: [
      'Mở app Be và đặt chuyến',
      'Chọn MoMo làm phương thức thanh toán',
      'Xác nhận thanh toán bằng Ví Trả Sau'
    ],
    faqs: [
      { q: 'Dùng Ví Trả Sau cho Be có được không?', a: 'Có, bạn có thể liên kết MoMo với app Be và dùng Ví Trả Sau cho tất cả chuyến đi.' }
    ],
    relatedSlugs: ['grab', 'gojek']
  },
  {
    slug: 'gojek',
    name: 'Gojek',
    logo: '🛵',
    domain: 'gojek.com',
    deal: 'Hoàn 8%',
    category: 'du-lich',
    description: 'Gojek là siêu ứng dụng từ Indonesia cung cấp dịch vụ gọi xe, giao đồ ăn GoFood và giao hàng GoSend tại TP.HCM và Hà Nội.',
    rating: 4.1,
    reviewCount: 58900,
    hasVTS: false,
    featured: false,
    website: 'https://gojek.com/vn',
    guides: [],
    faqs: [],
    relatedSlugs: ['grab', 'be']
  }
]

export function getPartnerBySlug(slug: string): Partner | undefined {
  return PARTNERS.find(p => p.slug === slug)
}

export function getPartnersByCategory(categorySlug: string): Partner[] {
  return PARTNERS.filter(p => p.category === categorySlug)
}

export function getFeaturedPartners(): Partner[] {
  return PARTNERS.filter(p => p.featured)
}
