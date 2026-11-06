with open('sample_predictive_result.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print("Predictive result length:", len(text))
print("Sample start:", text[:1500])
