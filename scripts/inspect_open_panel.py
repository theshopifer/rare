with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.find('function openPanel')
if idx != -1:
    print(text[idx:idx+800])
else:
    print("openPanel not defined as function openPanel, searching regex")
    import re
    matches = re.findall(r'[a-zA-Z0-9_.]*openPanel[a-zA-Z0-9_.]*', text)
    print("Matches:", matches)
