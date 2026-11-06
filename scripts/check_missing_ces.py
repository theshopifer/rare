import re
import os

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

html_ces = set(re.findall(r'<([a-z0-9]+-[a-z0-9-]+)', text))

defined_ces = set()
for fname in os.listdir('assets'):
    if fname.endswith('.js'):
        path = os.path.join('assets', fname)
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        ces = re.findall(r'customElements\.define\([\"\']([^\"\']+)[\"\']', content)
        defined_ces.update(ces)

missing = html_ces - defined_ces
print(f"HTML CEs: {len(html_ces)}")
print(f"Defined CEs: {len(defined_ces)}")
print(f"Missing in JS: {missing}")
