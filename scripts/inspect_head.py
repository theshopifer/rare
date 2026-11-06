with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

head_start = text.find('<head>')
head_end = text.find('</head>')
print("Head length:", head_end - head_start)
head_text = text[head_start:head_end+7]

# Let's see what meta, title, inline styles, stylesheets, and scripts are in head
import re
print("Head stylesheets:")
for href in re.findall(r'<link[^>]+(?:rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+)[\"\']|href=[\"\']([^\"\']+)[\"\'][^>]+rel=[\"\']stylesheet[\"\'])', head_text):
    print(" ", href[0] or href[1])

print("\nHead scripts:")
for src in re.findall(r'<script[^>]+src=[\"\']([^\"\']+)[\"\']', head_text):
    print(" ", src)
