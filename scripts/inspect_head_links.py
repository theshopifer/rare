import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

for term in ['main.css', 'header.css', 'swiper.css', 'main.js', 'swiper.js']:
    print(f"=== {term} ===")
    for m in re.finditer(re.escape(term), text):
        start = max(0, m.start() - 100)
        end = min(len(text), m.end() + 100)
        print(text[start:end].replace('\n', ' '))
