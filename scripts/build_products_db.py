import json

with open('store_products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

products = data.get('products', [])
clean_products = []

for p in products:
    variants = []
    for v in p.get('variants', []):
        variants.append({
            'id': v.get('id'),
            'title': v.get('title'),
            'price': float(v.get('price', 0)),
            'compare_at_price': float(v.get('compare_at_price', 0)) if v.get('compare_at_price') else None,
            'available': v.get('available', True),
            'featured_image': v.get('featured_image', {}).get('src') if v.get('featured_image') else None
        })
    
    images = [img.get('src') for img in p.get('images', [])]
    first_img = images[0] if images else ''
    second_img = images[1] if len(images) > 1 else first_img
    
    clean_products.append({
        'id': p.get('id'),
        'title': p.get('title'),
        'handle': p.get('handle'),
        'body_html': p.get('body_html', ''),
        'product_type': p.get('product_type', 'Jewelry'),
        'tags': p.get('tags', []),
        'price': variants[0]['price'] if variants else 0,
        'compare_at_price': variants[0]['compare_at_price'] if variants else None,
        'images': images,
        'image': first_img,
        'secondary_image': second_img,
        'variants': variants,
        'options': p.get('options', [])
    })

print(f"Processed {len(clean_products)} products.")
print("Sample product:", clean_products[0]['title'], clean_products[0]['price'], "USD")

with open('assets/products-db.js', 'w', encoding='utf-8') as f:
    f.write('window.PRODUCTS_DB = ' + json.dumps(clean_products, indent=2) + ';\n')

print("Wrote assets/products-db.js")
