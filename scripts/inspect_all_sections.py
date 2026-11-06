import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

pattern = re.compile(r'<(section|div)\s+id=[\"\'](shopify-section-[^\"\']+)[\"\']([^>]*)>', re.IGNORECASE)
matches = list(pattern.finditer(text))

print(f"Total shopify sections found: {len(matches)}")
for i, m in enumerate(matches):
    tag = m.group(1)
    sec_id = m.group(2)
    attrs = m.group(3)
    cls_match = re.search(r'class=[\"\']([^\"\']+)[\"\']', attrs)
    cls = cls_match.group(1) if cls_match else ''
    print(f"[{i+1}] <{tag}> {sec_id} | class: {cls}")
