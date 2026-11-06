import re
import json

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

title = re.search(r'<title>(.*?)</title>', text, re.IGNORECASE)
print('Title:', title.group(1).strip() if title else 'No title')

css_files = re.findall(r'<link[^>]+(?:href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'][^>]+rel=[\"\']stylesheet[\"\']|rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'])', text)
flattened_css = [c[0] or c[1] for c in css_files]
print(f'CSS files found ({len(flattened_css)}):')
for c in flattened_css:
    print('  CSS:', c)

sections = re.findall(r'id=[\"\']shopify-section-([^\"\']+)[\"\']', text)
print(f'Sections found ({len(sections)}):')
for s in sections:
    print('  Section:', s)

# Let's check sections with class or tag name
section_tags = re.findall(r'<div id=\"shopify-section-([^\"]+)\" class=\"([^\"]+)\"', text)
print('Section classes:')
for sid, cls in section_tags:
    print(f'  {sid} -> {cls}')
