import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

scripts = re.findall(r'<script[^>]+src=[\"\']([^\"\']+)[\"\']', text)
print(f"Scripts ({len(scripts)}):")
for s in scripts:
    print(" ", s)

fonts = re.findall(r'https://fonts\.[^\"]+', text)
print(f"Fonts ({len(fonts)}):")
for f in set(fonts):
    print(" ", f)

# Check inline script themes or settings
settings_matches = re.findall(r'window\.theme\s*=\s*(\{.*?\});', text, re.DOTALL)
print(f"theme settings matches: {len(settings_matches)}")
