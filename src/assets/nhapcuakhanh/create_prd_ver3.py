import os
import unicodedata
import re

def sanitize_filename(filename):
    """Chuyển tên file thành dạng an toàn (bỏ dấu, ký tự đặc biệt)"""
    nfkd_form = unicodedata.normalize('NFKD', filename)
    ascii_filename = nfkd_form.encode('ASCII', 'ignore').decode('ASCII')
    return re.sub(r'[^\w\-.]', '_', ascii_filename)

def generate_html(folder_path):
    """Tạo HTML cho danh sách sản phẩm dựa trên số lượng ảnh"""
    folder_changed = f"{folder_path}_changed"
    output_file = os.path.join(os.path.dirname(folder_path), "products.html")

    if not os.path.exists(folder_changed):
        print(f"❌ Thư mục '{folder_changed}' không tồn tại!")
        return None

    images = [f for f in os.listdir(folder_changed) if f.lower().endswith((".avif", ".jpg", ".png", ".jpeg", ".webp"))]

    if not images:
        print("⚠️ Không có ảnh nào trong thư mục!")
        return None

    html_output = "<div class='row'>\n"
    
    for i, image in enumerate(images, start=1):
        product_name = os.path.splitext(image)[0].replace('_', ' ')  # Lấy tên gốc của ảnh làm tên sản phẩm
        price_old = 200000  # Giá cũ giả định
        price_current = 150000  # Giá mới giả định
        like_class = ""  # Mặc định chưa thích
        rating = 4  # Giả định 4 sao
        sold = 50  # Giả định đã bán 50 sản phẩm
        brand = "No Brand"  # Giả định
        country = "Việt Nam"  # Giả định

        html_output += f"""
        <!-- Product item {i} -->
        <div class="col l-2-4 m-4 c-6">
            <div class="home-product-item">
                <a href="#">
                    <div class="home-product-item__img" style="background-image: url('../assets/img/thuốc/Mắt_changed/{image}');"></div>
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
        </div>\n
        """
    
    html_output += "</div>"

    return html_output, output_file

if __name__ == "__main__":
    # 📌 Thay đường dẫn thư mục ảnh tại đây
    folder_path = input("Nhập đường dẫn thư mục chứa ảnh gốc (không có _changed): ").strip()

    html_content, output_file = generate_html(folder_path)
    if html_content:
        with open(output_file, "w", encoding="utf-8") as file:
            file.write(html_content)
        print(f"✅ File HTML đã được tạo: {output_file}")