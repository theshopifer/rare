import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's find all section tags
section_pattern = re.compile(r'<div\s+id=[\"\'](shopify-section-[^\"\']+)[\"\']([^>]*)>', re.IGNORECASE)
matches = list(section_pattern.finditer(text))

print(f"Total sections found: {len(matches)}")
for i, m in enumerate(matches):
    start = m.start()
    end = matches[i+1].start() if i+1 < len(matches) else len(text)
    chunk = text[start:end]
    sec_id = m.group(1)
    attrs = m.group(2)
    
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', chunk, re.DOTALL | re.IGNORECASE)
    clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if re.sub(r'<[^>]+>', '', h).strip()]
    
    img_matches = re.findall(r'<img[^>]+src=[\"\']([^\"\']+)[\"\']', chunk)
    
    print(f"\n[{i+1}] {sec_id}")
    if clean_headings:
        print("  Headings:", clean_headings[:4])
    print(f"  Images ({len(img_matches)}) sample:", img_matches[:2] if img_matches else "none")
