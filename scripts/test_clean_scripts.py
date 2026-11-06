import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Safe script removal that NEVER spans multiple </script> tags:
def clean_scripts(html):
    # Match individual inline script tags
    def replace_inline(m):
        script_body = m.group(1)
        bad_keywords = ['wpmLoader', 'ShopifyAnalytics', 'ShopifyPaypalV4VisibilityTracking', 
                        'portableWalletsCleanup', '__TREKKIE_SHIM_QUEUE', 'customDocumentWrite']
        if any(k in script_body for k in bad_keywords):
            return '<!-- removed tracking script -->'
        return m.group(0)

    # Match individual external script tags
    def replace_external(m):
        src = m.group(1)
        bad_srcs = ['trekkie', 'perf-kit', 'origin_trials', 'privacy-banner', 'portable-wallets',
                    'standard-actions', 'account.js', 'load_feature', 'loader.init-shop-cart-sync', 'preloads.js']
        if any(b in src for b in bad_srcs):
            return '<!-- removed tracking script -->'
        return m.group(0)

    html = re.sub(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', replace_inline, html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<script[^>]+src=[\"\']([^\"\']+)[\"\'][^>]*>\s*</script>', replace_external, html, flags=re.IGNORECASE)
    return html

cleaned = clean_scripts(text)
print("Cleaned text length:", len(cleaned))
print("swiper.css in cleaned:", 'swiper.css' in cleaned)
print("header.css in cleaned:", 'header.css' in cleaned)
print("main.css in cleaned:", 'main.css' in cleaned)
print("main.js in cleaned:", 'main.js' in cleaned)
print("swiper.js in cleaned:", 'swiper.js' in cleaned)
