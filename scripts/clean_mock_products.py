import os
import re

for fname in os.listdir('mock_products'):
    if fname.endswith('.html'):
        path = os.path.join('mock_products', fname)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Replace assets
        content = re.sub(r'//aspire-demo-2\.myshopify\.com/cdn/shop/t/214/assets/([a-zA-Z0-9_.-]+(?:\?[^\'\"\s>]*)?)', r'/assets/\1', content)
        content = re.sub(r'/assets/([a-zA-Z0-9_.-]+)\?[a-zA-Z0-9_=&.-]+', r'/assets/\1', content)
        content = content.replace('//aspire-demo-2.myshopify.com/', 'https://aspire-demo-2.myshopify.com/')
        content = content.replace('//cdn.shopify.com/', 'https://cdn.shopify.com/')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated all mock_products/*.html with local asset paths.")
