with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
custom_elements = re.findall(r'customElements\.define\([\"\']([^\"\']+)[\"\']', text)
print("customElements defined in main.js:")
for ce in custom_elements:
    print(" -", ce)
