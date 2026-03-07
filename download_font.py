import urllib.request
import zipfile
import os

url = "https://dl.dafont.com/dl/?f=neon_ai"
zip_path = "neon_ai.zip"
extract_path = "public/fonts"

os.makedirs(extract_path, exist_ok=True)
urllib.request.urlretrieve(url, zip_path)

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)

print("Downloaded and extracted font.")
