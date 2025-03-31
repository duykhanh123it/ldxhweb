import os
import shutil
import unicodedata
import re

def sanitize_filename(filename):
    """Chuyển tên file thành dạng an toàn: không dấu, không khoảng trắng đặc biệt."""
    # Chuẩn hóa Unicode về dạng NFD (tách dấu)
    nfkd_form = unicodedata.normalize('NFKD', filename)
    ascii_filename = nfkd_form.encode('ASCII', 'ignore').decode('ASCII')

    # Thay khoảng trắng và ký tự đặc biệt bằng dấu "_"
    ascii_filename = re.sub(r'[^\w\-.]', '_', ascii_filename)

    return ascii_filename

def batch_rename_images(folder_path):
    """Đổi tên ảnh và xuất file ra thư mục mới (_changed)."""
    parent_dir = os.path.dirname(folder_path)  # Lấy thư mục cha
    folder_name = os.path.basename(folder_path)  # Lấy tên thư mục gốc
    output_folder = os.path.join(parent_dir, f"{folder_name}_changed")  # Tạo thư mục mới

    # ✅ Tạo thư mục mới nếu chưa có
    os.makedirs(output_folder, exist_ok=True)

    # ✅ Lặp qua tất cả các file trong thư mục gốc
    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".avif", ".jpg", ".png", ".jpeg", ".webp")):  # Hỗ trợ nhiều loại ảnh
            old_path = os.path.join(folder_path, filename)

            # ✨ Đổi tên file thành dạng an toàn
            new_filename = sanitize_filename(filename)
            new_path = os.path.join(output_folder, new_filename)

            # ✅ Sao chép ảnh với tên mới
            shutil.copy2(old_path, new_path)

    print(f"✅ Đã đổi tên & sao chép ảnh vào: {output_folder}")

# 📌 Nhập đường dẫn từ người dùng
folder_path = input("Nhập đường dẫn thư mục chứa ảnh: ").strip()

# 🛠 Kiểm tra thư mục có tồn tại không
if os.path.exists(folder_path):
    batch_rename_images(folder_path)
else:
    print("❌ Lỗi: Thư mục không tồn tại!")
