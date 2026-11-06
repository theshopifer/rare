import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', text, re.DOTALL | re.IGNORECASE)
print(f"Inline scripts count: {len(scripts)}")
for i, s in enumerate(scripts):
    s_clean = s.strip()
    preview = s_clean[:120].replace('\n', ' ')
    print(f"Script {i} ({len(s_clean)} chars): {preview}...")
