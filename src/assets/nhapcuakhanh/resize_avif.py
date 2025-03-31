from PIL import Image
   import os

   def convert_avif_to_jpg(image_path):
       # Kiểm tra xem file có tồn tại không
       if not os.path.exists(image_path):
           print("File không tồn tại!")
           return

       # Đọc file ảnh AVIF bằng Pillow
       try:
           image = Image.open(image_path)
       except Exception as e:
           print(f"Không thể đọc file ảnh: {e}")
           return

       # Chuyển đổi sang định dạng JPG
       try:
           # Lấy tên file không có đuôi
           base_name = os.path.splitext(image_path)[0]
           output_path = f"{base_name}.jpg"

           # Lưu ảnh dưới định dạng JPG
           image.save(output_path, "JPEG")
           print(f"Ảnh đã được chuyển đổi và lưu tại: {output_path}")
       except Exception as e:
           print(f"Lỗi khi chuyển đổi ảnh: {e}")

   if __name__ == "__main__":
       # Yêu cầu người dùng nhập đường dẫn đến ảnh
       image_path = input("Nhập đường dẫn đến ảnh .avif: ")

       # Gọi hàm chuyển đổi
       convert_avif_to_jpg(image_path)