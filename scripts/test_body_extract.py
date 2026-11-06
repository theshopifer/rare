import re

with open('raw_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's extract everything inside <body>...</body>
body_match = re.search(r'<body[^>]*>(.*?)</body>', text, re.DOTALL | re.IGNORECASE)
if not body_match:
    print("Could not find body tag!")
    exit(1)

body_content = body_match.group(1)

# Extract body attributes (class, id, etc.)
body_tag_match = re.search(r'<body([^>]*)>', text, re.IGNORECASE)
body_attrs = body_tag_match.group(1) if body_tag_match else ''

print(f"Extracted body: {len(body_content)} chars")
print(f"Body attributes: {body_attrs}")

# Clean out shopify analytics and tracking scripts from body_content
# We remove <script> tags that contain shopify analytics, trekkie, etc.
scripts = re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', body_content, re.DOTALL | re.IGNORECASE)
print(f"Body has {len(scripts)} inline scripts")

# Let's write generate_site.py to carefully assemble index.html
