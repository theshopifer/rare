import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# 1. Remove the problematic await import module script
text = re.sub(
    r'<script type=[\"\']module[\"\']>\s*await import\([^\)]+\);[\s\S]*?</script>',
    '<!-- shop-cart-sync module script removed -->',
    text,
    flags=re.IGNORECASE
)

# 2. Remove window.Shopify.featureAssets['shop-js'] script
text = re.sub(
    r'<script>[\s\S]*?window\.Shopify\.featureAssets\[\'shop-js\'\][\s\S]*?</script>',
    '<!-- shop-js featureAssets removed -->',
    text,
    flags=re.IGNORECASE
)

# 3. Fix all https:https:// to https://
text = text.replace('https:https://', 'https://')
text = text.replace('http:http://', 'http://')

# 4. Remove type="module" from !function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);
text = text.replace(
    '<script type="module">!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);</script>',
    '<script>!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);</script>'
)

# 5. Convert local assets to absolute root /assets/ paths so routing works on all pages
# Match href="assets/... and src="assets/...
text = re.sub(r'href=[\"\']assets/([^\'\"]+)[\"\']', r'href="/assets/\1"', text)
text = re.sub(r'src=[\"\']assets/([^\'\"]+)[\"\']', r'src="/assets/\1"', text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("index.html fixed! Check occurrences of https:https and import:")
print("https:https count:", text.count('https:https'))
print("loader.init-shop-cart-sync count:", text.count('loader.init-shop-cart-sync'))
print("type=module count:", text.count('type="module"') + text.count("type='module'"))
