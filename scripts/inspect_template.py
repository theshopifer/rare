import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's search for template--
template_sections = re.findall(r'id=[\"\'](template--[^\"\']+)[\"\']', text)
print("Template IDs:", template_sections)

# Let's search for tags containing "section"
tags_with_sec = re.findall(r'<([a-zA-Z0-9-]+)[^>]+id=[\"\']([^\"\']*(?:section|template)[^\"\']*)[\"\']', text)
print("Tags with section/template in ID:")
for tag, sid in tags_with_sec[:25]:
    print(f"  <{tag} id='{sid}'>")
