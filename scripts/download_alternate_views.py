import json
import os
import urllib.request
import time

os.makedirs('mock_products', exist_ok=True)

with open('store_products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

products = data.get('products', [])
print(f"Total products to fetch: {len(products)}")

headers = {'User-Agent': 'Mozilla/5.0'}

for i, p in enumerate(products):
    handle = p['handle']
    dest = os.path.join('mock_products', f"{handle}.html")
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        continue
    url = f"https://aspire-demo-2.myshopify.com/products/{handle}?view=alternate"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as out_f:
            out_f.write(resp.read())
        print(f"[{i+1}/{len(products)}] Saved {handle} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"[{i+1}/{len(products)}] Failed {handle}: {e}")
    time.sleep(0.1)

print("Done downloading alternate product views.")
