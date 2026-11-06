with open('assets/main.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.find('window.Shopify.routes.root+"cart/add.js"')
if idx != -1:
    print(text[idx:idx+1500])
