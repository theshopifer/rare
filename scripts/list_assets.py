import re
from urllib.parse import urljoin

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

base_url = "https://aspire-demo-2.myshopify.com/"

# Find all stylesheets
css_links = re.findall(r'<link[^>]+(?:href=[\"\']([^\"\']+)[\"\'][^>]+rel=[\"\']stylesheet[\"\']|rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+)[\"\'])', text)
css_urls = [c[0] or c[1] for c in css_links]

# Find all scripts
script_srcs = re.findall(r'<script[^>]+src=[\"\']([^\"\']+)[\"\']', text)

# Find all preload styles and images
preloads = re.findall(r'<link[^>]+as=[\"\']style[\"\'][^>]+href=[\"\']([^\"\']+)[\"\']', text)

print("CSS Count:", len(css_urls))
for u in set(css_urls):
    print("CSS:", u)

print("\nScripts Count:", len(script_srcs))
for u in set(script_srcs):
    print("Script:", u)

print("\nPreload styles count:", len(preloads))
for u in set(preloads):
    print("Preload style:", u)
