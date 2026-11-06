import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

inline_ces = re.findall(r'customElements\.define\([\"\']([^\"\']+)[\"\']', text)
print("Inline customElements defined in HTML:", inline_ces)
