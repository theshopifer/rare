with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

terms = ['build-perfect-set', 'shop-cart-drawer', 'back-to-top', 'BuildPerfectSet', 'CartDrawer', 'ShopCart']
for t in terms:
    print(f"Term '{t}': count={text.count(t)}")
