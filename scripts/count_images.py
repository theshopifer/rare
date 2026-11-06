import re
from urllib.parse import urljoin

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find all image sources (img src, data-src, srcset, background-image)
img_srcs = re.findall(r'<img[^>]+src=[\"\']([^\"\']+)[\"\']', text)
srcset_matches = re.findall(r'srcset=[\"\']([^\"\']+)[\"\']', text)
for sm in srcset_matches:
    parts = sm.split(',')
    for p in parts:
        u = p.strip().split(' ')[0]
        if u:
            img_srcs.append(u)

bg_matches = re.findall(r'url\([\'\"]?([^\'\"\)]+)[\'\"]?\)', text)
img_srcs.extend(bg_matches)

valid_imgs = set()
for s in img_srcs:
    s = s.replace('&amp;', '&').strip()
    if any(ext in s.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']):
        if s.startswith('//'):
            s = 'https:' + s
        valid_imgs.add(s)

print(f"Total unique images found: {len(valid_imgs)}")
# print some samples
for u in list(valid_imgs)[:10]:
    print(" ", u)
