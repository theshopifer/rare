with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re

def print_section(title, pattern):
    print("=" * 20, title, "=" * 20)
    for m in re.finditer(pattern, text):
        start = max(0, m.start() - 50)
        end = min(len(text), m.end() + 250)
        print(text[start:end])
        print("-" * 30)

print_section("QuickViewDrawer", r'class QuickViewDrawer')
print_section("ShopCartDrawer", r'class ShopCartDrawer')
print_section("QuickAddButton", r'class QuickAddButton')
print_section("ShopTheLook", r'class ShopTheLook')
