# 💊 InfinityCare - Nhà Thuốc Online

<p align="center">
  <img src="../InfinityLib/src/assets/img/logo1.png" alt="InfinityCare Logo" width="200"/>
</p>

## 📋 Giới thiệu
InfinityCare là nền tảng nhà thuốc trực tuyến, cung cấp giải pháp mua sắm thuốc và sản phẩm chăm sóc sức khỏe một cách thuận tiện, an toàn và đáng tin cậy. Dự án tập trung vào trải nghiệm người dùng với giao diện thân thiện và các tính năng hiện đại.

## 👥 Thành viên nhóm
| Tên | Vai trò | GitHub |
|------|---------|---------|
| Huỳnh Đình Hội | Developer | [@dinhhoileo](https://github.com/dinhhoileo) |
| Nguyễn Duy Khánh | Team Leader | [@duykhanh](https://github.com/duykhanh) |
| Lê Nhật Linh | Developer | [@nhatlinh](https://github.com/nhatlinh) |

## ⭐ Tính năng nổi bật
### Dành cho khách hàng
- 🔍 Tìm kiếm sản phẩm thông minh
- 🛒 Giỏ hàng và thanh toán trực tuyến
- 📱 Theo dõi đơn hàng realtime
- ⭐ Đánh giá và nhận xét sản phẩm
- 💊 Tra cứu thông tin thuốc

### Dành cho quản lý
- 📊 Dashboard quản lý toàn diện
- 📦 Quản lý kho hàng tự động
- 📈 Báo cáo doanh thu chi tiết
- 👥 Quản lý khách hàng
- 🏷️ Quản lý mã giảm giá

## 🛠️ Công nghệ sử dụng
- **Frontend:**
  - HTML5, CSS3, JavaScript (ES6+)
  - React.js với Redux
  - Chart.js cho biểu đồ
  - Bootstrap 5
  
- **Backend:**
  - Node.js & Express.js
  - MongoDB Atlas
  - JWT Authentication
  
- **Deployment:**
  - Docker
  - AWS/Vercel

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js (v14.0.0 trở lên)
- npm hoặc yarn
- MongoDB

### Các bước cài đặt

1. **Clone dự án**
```bash
git clone https://github.com/dinhhoileo/InfinityLib.git
cd InfinityLib
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Cấu hình môi trường**
```bash
cp .env.example .env
# Cập nhật các biến môi trường trong file .env
```

4. **Khởi chạy dự án**
```bash
npm run dev     # Cho môi trường development
npm start       # Cho môi trường production
```

## 📁 Cấu trúc thư mục
```
InfinityLib/
├── src/
│   ├── assets/          # Resources (images, styles, fonts)
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── utils/          # Helper functions
│   └── App.js          # Root component
├── public/             # Static files
├── server/            # Backend code
├── tests/            # Test files
└── docs/             # Documentation
```

## 🤝 Đóng góp
Chúng tôi luôn chào đón mọi đóng góp! Hãy làm theo các bước sau:

1. Fork dự án
2. Tạo nhánh feature (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên nhánh (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 Giấy phép
Dự án được phân phối dưới giấy phép MIT. Xem `LICENSE` để biết thêm thông tin.

## 📞 Liên hệ
- Website: [infinitycare.com](https://infinitycare.com)
- Email: support@infinitycare.com
- Hotline: 1800-888-888

## 🙏 Cảm ơn
Cảm ơn các thư viện mã nguồn mở đã giúp dự án này có thể thành hiện thực:
- React.js
- Node.js
- MongoDB
- Bootstrap
- Chart.js
