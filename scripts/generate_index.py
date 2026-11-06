import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# 1. Clean tracking scripts safely without greedy spanning
def clean_scripts(html_text):
    def replace_inline(m):
        script_body = m.group(1)
        bad_keywords = ['wpmLoader', 'ShopifyAnalytics', 'ShopifyPaypalV4VisibilityTracking', 
                        'portableWalletsCleanup', '__TREKKIE_SHIM_QUEUE', 'customDocumentWrite']
        if any(k in script_body for k in bad_keywords):
            return '<!-- tracking script removed -->'
        return m.group(0)

    def replace_external(m):
        src = m.group(1)
        bad_srcs = ['trekkie', 'perf-kit', 'origin_trials', 'privacy-banner', 'portable-wallets',
                    'standard-actions', 'account.js', 'load_feature', 'loader.init-shop-cart-sync', 'preloads.js']
        if any(b in src.lower() for b in bad_srcs):
            return '<!-- external tracking script removed -->'
        return m.group(0)

    html_text = re.sub(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', replace_inline, html_text, flags=re.DOTALL | re.IGNORECASE)
    html_text = re.sub(r'<script[^>]+src=[\"\']([^\"\']+)[\"\'][^>]*>\s*</script>', replace_external, html_text, flags=re.IGNORECASE)
    return html_text

html = clean_scripts(html)

# 2. Replace assets path with local assets/
html = re.sub(r'//aspire-demo-2\.myshopify\.com/cdn/shop/t/214/assets/([a-zA-Z0-9_.-]+(?:\?[^\'\"\s>]*)?)', r'assets/\1', html)
html = re.sub(r'assets/([a-zA-Z0-9_.-]+)\?[a-zA-Z0-9_=&.-]+', r'assets/\1', html)

# Replace accelerated checkout css
html = html.replace('https://aspire-demo-2.myshopify.com/cdn/shopifycloud/portable-wallets/latest/accelerated-checkout-backwards-compat.css', 'assets/accelerated-checkout-backwards-compat.css')

# Replace RARE SVG logos
html = re.sub(r'//aspire-demo-2\.myshopify\.com/cdn/shop/files/RARE\.svg[^\'\"]*', 'assets/RARE.svg', html)
html = re.sub(r'//aspire-demo-2\.myshopify\.com/cdn/shop/files/RARE_1\.svg[^\'\"]*', 'assets/RARE_1.svg', html)
html = re.sub(r'https://aspire-demo-2\.myshopify\.com/cdn/shop/files/RARE\.svg[^\'\"]*', 'assets/RARE.svg', html)
html = re.sub(r'https://aspire-demo-2\.myshopify\.com/cdn/shop/files/RARE_1\.svg[^\'\"]*', 'assets/RARE_1.svg', html)

# Replace protocol-relative URLs with https:
html = html.replace('//aspire-demo-2.myshopify.com/', 'https://aspire-demo-2.myshopify.com/')
html = html.replace('//cdn.shopify.com/', 'https://cdn.shopify.com/')

# Ensure Shopify global object exists
shopify_shim = '''
<script>
  window.Shopify = window.Shopify || {};
  window.Shopify.shop = "aspire-demo-2.myshopify.com";
  window.Shopify.locale = "en";
  window.Shopify.currency = { "active": "USD", "rate": "1.0" };
  window.Shopify.country = "US";
  window.Shopify.theme = { "name": "Aspire", "id": 214, "theme_store_id": null, "role": "main" };
  window.Shopify.routes = { "root": "/" };
</script>
'''
if '<head>' in html:
    html = html.replace('<head>', '<head>\n' + shopify_shim)

# Insert Google Fonts in head
font_link = '''
  <!-- Google Fonts Montserrat -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,700&display=swap" rel="stylesheet">
'''
if '<head>' in html:
    html = html.replace('<head>', '<head>\n' + font_link)

# Add our interactive logic before </body>
interactive_scripts = '''
  <script src="assets/products-db.js"></script>
  <script src="assets/interactive.js"></script>
'''
if '</body>' in html:
    html = html.replace('</body>', interactive_scripts + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Generated index.html successfully! Size: {len(html)} bytes")
