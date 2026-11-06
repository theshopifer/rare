import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

font_faces = re.findall(r'@font-face\s*\{[^}]+\}', text)
for i, ff in enumerate(font_faces):
    print(f"Font face {i}:")
    print(ff)
