with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.find('drawer_open_btn')
if idx != -1:
    print(text[idx-50:idx+350])
