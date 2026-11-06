import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

scripts = re.findall(r'<script[^>]+src=[\"\']([^\"\']+)[\"\']', text)
print("Scripts in index.html:")
for s in scripts:
    print(" ", s)

css_files = re.findall(r'<link[^>]+(?:href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'][^>]+rel=[\"\']stylesheet[\"\']|rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+\.css[^\"\']*)[\"\'])', text)
css_flattened = [c[0] or c[1] for c in css_files]
print("\nCSS in index.html:")
for c in css_flattened:
    print(" ", c)
