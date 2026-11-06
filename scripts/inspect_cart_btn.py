with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = re.findall(r'<[^>]*cart[^>]*>', text, re.IGNORECASE)
for m in matches[:15]:
    print(m)
