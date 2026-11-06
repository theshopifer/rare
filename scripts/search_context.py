with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
for m in re.finditer(r'(?:BuildPerfectSet|CartDrawer|ShopCart|BackToTop)', text, re.IGNORECASE):
    start = max(0, m.start() - 100)
    end = min(len(text), m.end() + 200)
    print("MATCH:", text[start:end])
    print("="*40)
