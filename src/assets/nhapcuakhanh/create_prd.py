import os
import random
import docx

# Danh sách thương hiệu và quốc gia
brands = {
    "Abbott": "Hoa Kỳ",
    "GSK (GlaxoSmithKline)": "Anh",
    "Sanofi": "Pháp",
    "AstraZeneca": "Anh",
    "Pfizer": "Hoa Kỳ",
    "Mega Lifesciences": "Thái Lan",
    "Goodlife": "Việt Nam",
    "L'Oréal": "Pháp",
    "Durex": "Anh",
    "Dược Hậu Giang": "Việt Nam",
    "Dược Nam Hà": "Việt Nam"
}

# Hàm định dạng giá tiền
def format_price(price):
    return f"{price:,}".replace(",", ".") + "đ"

# Nhập đường dẫn folder chứa ảnh từ người dùng
folder_path = input("Nhập đường dẫn đến thư mục chứa ảnh: ")
output_file = os.path.join(folder_path, os.path.basename(folder_path) + "_src_html.docx")

def generate_product_html(image_name):
    product_name = os.path.splitext(image_name)[0]  # Lấy tên file làm tên sản phẩm
    price_current = random.randint(2, 50) * 10000  # Giá từ 20.000đ đến 500.000đ
    price_old = random.randint(price_current // 10000 + 1, price_current // 10000 + 10) * 10000  # Luôn lớn hơn giá hiện tại
    like_class = "home-product-item__like--liked" if random.choice([True, False]) else ""
    rating = random.randint(1, 5)
    sold = random.randint(rating * 5, rating * 20)  # Tỷ lệ thuận với số sao
    brand = random.choice(list(brands.keys()))
    country = brands[brand]
    
    html_template = f'''
    <a href="#" class="home-product-item">
        <div class="home-product-item__img" style="background-image: url('../assets/img/thuốc/Mắt_changed/{image_name}');"></div>
        <h4 class="home-product-item__name">{product_name}</h4>
        <div class="home-product-item__price">
            <span class="home-product-item__price-old">{format_price(price_old)}</span>
            <span class="home-product-item__price-curent">{format_price(price_current)}</span>
        </div>
        <div class="home-product-item__action">
            <span class="home-product-item__like {like_class}">
                <i class="home-product-item__like--icon-empty fa-regular fa-heart"></i>
                <i class="home-product-item__like--icon-fill fa-solid fa-heart"></i>
            </span>
            <div class="home-product-item__rating">
                {''.join('<i class="home-product-item__star-gold fa-solid fa-star"></i>' for _ in range(rating))}
                {''.join('<i class="fa-solid fa-star"></i>' for _ in range(5 - rating))}
            </div>
            <div class="home-product-item__sold">{sold} đã bán</div>
        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">{brand}</span>
            <span class="home-product-item__origin-name">{country}</span>
        </div>
        <div class="home-product-item__favorite">
            <i class="home-product-item__favorite-icon fa-solid fa-check"></i>
            <span>Yêu thích</span>
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">{round((1 - price_current / price_old) * 100)}%</span>
            <span class="home-product-item__sale-off-label">GIẢM</span>
        </div>
    </a>
    '''
    return html_template

# Tạo file Word
doc = docx.Document()

# Quét ảnh trong thư mục
for filename in os.listdir(folder_path):
    if filename.lower().endswith(('png', 'jpg', 'jpeg', 'avif', 'webp')):
        product_html = generate_product_html(filename)
        doc.add_paragraph(product_html)

# Lưu file
doc.save(output_file)
print(f"Đã tạo file: {output_file}")
