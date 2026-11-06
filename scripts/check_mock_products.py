import os
import re

missing_classes = []
for fname in os.listdir('mock_products'):
    if fname.endswith('.html'):
        path = os.path.join('mock_products', fname)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        has_detail_view = '.product-detail-view' in content or 'class="product-detail-view"' in content or 'product-detail-view' in content
        if not has_detail_view:
            missing_classes.append(fname)

print("Checked all mock products files. Missing .product-detail-view:", missing_classes)
