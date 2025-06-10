import os
from PIL import Image
from io import BytesIO

TARGET_SIZE = 300 * 1024  # 300 KB
FOLDER = "/Users/pranavsukumaran/Desktop/astrokk/better-binary/src/assets/products/"  # Change to your folder path

def compress_to_target(path):
    img = Image.open(path)

    if img.mode != 'RGB':
        img = img.convert('RGB')

    q_min, q_max = 10, 95
    best_quality = 85
    while q_min <= q_max:
        q_mid = (q_min + q_max) // 2
        buffer = BytesIO()
        img.save(buffer, format='JPEG', quality=q_mid)
        size = buffer.tell()

        if size < TARGET_SIZE - 10240:
            q_min = q_mid + 1
            best_quality = q_mid
        elif size > TARGET_SIZE + 10240:
            q_max = q_mid - 1
        else:
            best_quality = q_mid
            break

    # Save the compressed image back to the original path
    img.save(path, format='JPEG', quality=best_quality)
    print(f"{os.path.basename(path)} compressed to ~{os.path.getsize(path)//1024}KB at quality={best_quality}")

def process_folder(folder):
    for file in os.listdir(folder):
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            full_path = os.path.join(folder, file)
            compress_to_target(full_path)

if __name__ == "__main__":
    process_folder(FOLDER)

