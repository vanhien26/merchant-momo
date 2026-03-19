export interface Category {
  slug: string
  name: string
  icon: string
  description: string
  partnerCount: number
  related: string[]
}

export const CATEGORIES: Category[] = [
  {
    slug: 'am-thuc',
    name: 'Ẩm thực & Đồ uống',
    icon: '🍜',
    description: 'Nhà hàng, chuỗi F&B, coffee, fast food chấp nhận thanh toán MoMo và Ví Trả Sau.',
    partnerCount: 1240,
    related: ['sieu-thi', 'suc-khoe-lam-dep']
  },
  {
    slug: 'thoi-trang',
    name: 'Thời trang & Phụ kiện',
    icon: '👗',
    description: 'Thương hiệu thời trang, giày dép, phụ kiện từ bình dân đến cao cấp.',
    partnerCount: 870,
    related: ['dien-tu', 'suc-khoe-lam-dep']
  },
  {
    slug: 'du-lich',
    name: 'Du lịch & Khách sạn',
    icon: '✈️',
    description: 'Vé máy bay, khách sạn, tour du lịch, cho thuê xe và dịch vụ lữ hành.',
    partnerCount: 430,
    related: ['am-thuc', 'giao-duc']
  },
  {
    slug: 'suc-khoe-lam-dep',
    name: 'Sức khỏe & Làm đẹp',
    icon: '💊',
    description: 'Nhà thuốc, phòng khám, spa, gym và các dịch vụ chăm sóc sức khỏe sắc đẹp.',
    partnerCount: 620,
    related: ['am-thuc', 'thoi-trang']
  },
  {
    slug: 'dien-tu',
    name: 'Điện tử & Công nghệ',
    icon: '💻',
    description: 'Điện thoại, laptop, thiết bị điện tử gia dụng, phần mềm và dịch vụ công nghệ.',
    partnerCount: 350,
    related: ['thoi-trang', 'giao-duc']
  },
  {
    slug: 'giao-duc',
    name: 'Giáo dục & Khóa học',
    icon: '📚',
    description: 'Trung tâm ngoại ngữ, kỹ năng, khóa học online và các dịch vụ giáo dục.',
    partnerCount: 280,
    related: ['dien-tu', 'du-lich']
  },
  {
    slug: 'sieu-thi',
    name: 'Siêu thị & Tiện ích',
    icon: '🛒',
    description: 'Siêu thị, cửa hàng tiện lợi, dịch vụ thanh toán hóa đơn và tiện ích hàng ngày.',
    partnerCount: 910,
    related: ['am-thuc', 'suc-khoe-lam-dep']
  }
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}

export const CATEGORY_SLUGS = CATEGORIES.map(c => c.slug)
