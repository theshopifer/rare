import os
import re
import urllib.request

os.makedirs('assets', exist_ok=True)

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find all CSS
css_links = re.findall(r'<link[^>]+(?:href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'][^>]+rel=[\"\']stylesheet[\"\']|rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'])', text)
css_urls = set([c[0] or c[1] for c in css_links])

# Find all JS
js_links = re.findall(r'<script[^>]+src=[\"\']([^\"\']+\.js[^\"\']*)[\"\']', text)
js_urls = set(js_links)

headers = {'User-Agent': 'Mozilla/5.0'}

def download_file(url, folder='assets'):
    full_url = url
    if full_url.startswith('//'):
        full_url = 'https:' + full_url
    elif full_url.startswith('/'):
        full_url = 'https://aspire-demo-2.myshopify.com' + full_url
    
    clean_name = os.path.basename(full_url.split('?')[0])
    if not clean_name:
        return None
    dest = os.path.join(folder, clean_name)
    try:
        req = urllib.request.Request(full_url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as out_f:
            out_f.write(resp.read())
        print(f"Downloaded: {clean_name} ({os.path.getsize(dest)} bytes)")
        return clean_name
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")
        return None

print("Downloading CSS files...")
for u in css_urls:
    download_file(u)

print("\nDownloading JS files...")
for u in js_urls:
    download_file(u)
