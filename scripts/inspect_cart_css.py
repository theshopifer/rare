with open('assets/shop-cart-tray.css', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
classes = set(re.findall(r'\.([a-zA-Z0-9_-]+)', text))
print("Cart classes count:", len(classes))
cart_classes = [c for c in classes if any(k in c.lower() for k in ['item', 'line', 'cart', 'price', 'ship', 'prog', 'qty', 'drawer'])]
print("Relevant cart classes:")
for c in sorted(cart_classes)[:40]:
    print(" ", c)
