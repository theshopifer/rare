with open('assets/header-search.js', 'r', encoding='utf-8', errors='ignore') as f:
    hs = f.read()

idx = hs.find('fetch(')
while idx != -1:
    print(hs[idx:idx+200])
    print("-" * 20)
    idx = hs.find('fetch(', idx + 1)
