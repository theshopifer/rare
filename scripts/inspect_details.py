import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Check font-face rules
font_faces = re.findall(r'@font-face\s*\{[^}]+\}', text)
print(f"Font faces count: {len(font_faces)}")
for ff in font_faces[:5]:
    print(" ", ff[:120], "...")

# Check CSS variables
root_vars = re.findall(r':root\s*\{([^}]+)\}', text)
print(f":root matches: {len(root_vars)}")
if root_vars:
    print("Sample root vars:", root_vars[0][:300])

# Check what custom elements exist
custom_elements = set(re.findall(r'<([a-z0-9]+-[a-z0-9-]+)', text))
print("Custom elements:", custom_elements)
