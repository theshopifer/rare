import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print('Occurrences of https:https:', text.count('https:https'))
for m in re.finditer(r'https:https[^\s\'\"]+', text):
    print('Found:', m.group(0))

print('Occurrences of loader.init-shop-cart-sync:', text.count('loader.init-shop-cart-sync'))
for m in re.finditer(r'[^\n]*loader\.init-shop-cart-sync[^\n]*', text):
    print('Found line:', m.group(0))

# Check any other imports inside <script> tags
imports = re.findall(r'import\([^\)]+\)', text)
print('Dynamic imports found:', len(imports))
for imp in imports:
    print(' ', imp)
