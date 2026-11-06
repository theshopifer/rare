with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.find('loader.init-shop-cart-sync')
if idx != -1:
    start = max(0, idx - 200)
    end = min(len(text), idx + 1000)
    print("Block:")
    print(text[start:end])
