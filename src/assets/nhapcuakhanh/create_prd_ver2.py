import os
import random
import docx
import unicodedata
import re
import shutil

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

# Hàm chuẩn hóa tên file
def sanitize_filename(filename):
    nfkd_form = unicodedata.normalize('NFKD', filename)
    ascii_filename = nfkd_form.encode('ASCII', 'ignore').decode('ASCII')
    return re.sub(r'[^\w\-.]', '_', ascii_filename)

# Hàm tạo thư mục _changed và đổi tên ảnh
def prepare_changed_images(folder_path):
    parent_dir = os.path.dirname(folder_path)
    folder_name = os.path.basename(folder_path)
    output_folder = os.path.join(parent_dir, f"{folder_name}_changed")
    os.makedirs(output_folder, exist_ok=True)
    
    name_mapping = {}
    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".avif", ".jpg", ".png", ".jpeg", ".webp")):
            old_path = os.path.join(folder_path, filename)
            new_filename = sanitize_filename(filename)
            new_path = os.path.join(output_folder, new_filename)
            shutil.copy2(old_path, new_path)
            name_mapping[new_filename] = os.path.splitext(filename)[0]
    
    return output_folder, name_mapping

# Hàm tạo HTML cho sản phẩm
def generate_product_html(image_name, product_name):
    price_current = random.randint(2, 50) * 10000
    price_old = random.randint(price_current // 10000 + 1, price_current // 10000 + 10) * 10000
    like_class = "home-product-item__like--liked" if random.choice([True, False]) else ""
    rating = random.randint(1, 5)
    sold = random.randint(rating * 5, rating * 20)
    brand = random.choice(list(brands.keys()))
    country = brands[brand]
    
    html_template = f'''
    <div class="col l-2-4 m-4 c-6">
        <a href="#" class="home-product-item">
            <div class="home-product-item__img" style="background-image: url('../assets/img/thuốc/Mắt_changed/{image_name}');"></div>
            <h4 class="home-product-item__name">{product_name}</h4>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">{price_old:,}đ</span>
                <span class="home-product-item__price-curent">{price_current:,}đ</span>
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
    </div>
    '''
    return html_template

# Chạy chương trình
folder_path = input("Nhập đường dẫn đến thư mục chứa ảnh: ").strip()
if not os.path.exists(folder_path):
    print("❌ Lỗi: Thư mục không tồn tại!")
else:
    output_folder, name_mapping = prepare_changed_images(folder_path)
    output_file = os.path.join(folder_path, os.path.basename(folder_path) + "_src_html.docx")
    doc = docx.Document()
    
    for image_name, product_name in name_mapping.items():
        product_html = generate_product_html(image_name, product_name)
        doc.add_paragraph(product_html)
    
    doc.save(output_file)
    print(f"✅ Đã tạo file: {output_file}")
