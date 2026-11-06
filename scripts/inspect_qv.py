with open('sample_quick_view.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
print("Has product-detail-view:", 'product-detail-view' in text)
matches = re.findall(r'<product-detail-view[^>]*>', text)
print("product-detail-view tag:", matches)
