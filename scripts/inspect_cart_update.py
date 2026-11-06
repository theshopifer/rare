with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.find('cartUpdate(e){')
if idx != -1:
    print(text[idx:idx+1200])
