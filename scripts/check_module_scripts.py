import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

module_scripts = re.findall(r'<script[^>]*type=[\"\']module[\"\'][^>]*>(.*?)</script>', text, re.DOTALL | re.IGNORECASE)
print(f"Total <script type='module'> count: {len(module_scripts)}")
for i, s in enumerate(module_scripts):
    print(f"Module script {i}:")
    print(s[:300])
    print("=" * 40)
