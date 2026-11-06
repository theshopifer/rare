import json

data = json.load(open('sample_cart_tray.json'))
html = data.get('shop-cart-tray', '')

with open('mock_cart_empty.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Mock empty cart HTML saved. Length:", len(html))
print("Sample HTML:", html[:400])
