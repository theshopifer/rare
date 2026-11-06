import os
import re

for fname in os.listdir('assets'):
    if fname.endswith('.js'):
        path = os.path.join('assets', fname)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        ces = re.findall(r'customElements\.define\([\"\']([^\"\']+)[\"\']', content)
        if ces:
            print(f"{fname}: {ces}")
