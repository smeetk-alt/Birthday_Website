import os

file_path = r"C:\Users\smeet\OneDrive\Desktop\Birthday_Website\yashvi\index_1.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replacements
content = content.replace("Exhibit 15", "Exhibit 14")
content = content.replace("Exhibit No. 15", "Exhibit No. 14")
content = content.replace("FIFTEEN", "FOURTEEN")
content = content.replace("Fifteen", "Fourteen")
content = content.replace("15th", "14th")
content = content.replace("pass === '15'", "pass === '14'")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done replacing 15 to 14.")
