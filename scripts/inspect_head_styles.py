import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

head_match = re.search(r'<head[^>]*>(.*?)</head>', text, re.DOTALL | re.IGNORECASE)
head_content = head_match.group(1) if head_match else ''

styles = re.findall(r'<style[^>]*>(.*?)</style>', head_content, re.DOTALL | re.IGNORECASE)
print(f"Head styles count: {len(styles)}")
for i, s in enumerate(styles):
    print(f"Style {i}: {len(s)} chars")
    print(s[:200].replace('\n', ' '))
    print("-" * 30)
