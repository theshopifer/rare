with open('assets/predictive-search.js', 'r', encoding='utf-8', errors='ignore') as f:
    ps = f.read()

idx = ps.find('fetch(')
while idx != -1:
    print(ps[idx:idx+200])
    print("-" * 20)
    idx = ps.find('fetch(', idx + 1)
