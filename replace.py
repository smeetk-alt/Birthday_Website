import re

with open(r"C:\Users\smeet\OneDrive\Desktop\Birthday_Website\gayatri\index_1.html", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Names
content = content.replace("GAYATRI", "YASHVI")
content = content.replace("GAYATRI'S", "YASHVI'S")
content = content.replace("gayatri_main_gate", "yashvi_main_gate")
content = content.replace("gayatri", "yashvi")
content = content.replace("To Chota Don,", "To Yashvi,")

# Replace media
content = content.replace('src="IMAGE 2.jpeg"', 'src="1.jpeg"')
content = content.replace('src="IMAGE 3.jpeg"', 'src="2.jpeg"')

# Video 4 -> 3
content = re.sub(r'<video src="VIDEO 4\.mp4" autoplay loop muted playsinline class="art-image"\s*style="object-position: center;"></video>', '<img src="3.jpeg" alt="Exhibit 3" class="art-image">', content)

content = content.replace('src="IMAGE 4.jpeg"', 'src="4.jpeg"')

# Video 1 -> 5
content = re.sub(r'<video src="VIDEO 1\.mp4" autoplay loop muted playsinline class="art-image"\s*style="object-position: center;"></video>', '<img src="5.jpeg" alt="Exhibit 5" class="art-image">', content)

content = content.replace('src="IMAGE 5.jpeg"', 'src="6.jpeg"')
content = content.replace('src="IMAGE 6.jpeg"', 'src="7.jpeg"')

# Video 2 -> 8
content = re.sub(r'<video src="VIDEO 2\.mp4" autoplay loop muted playsinline class="art-image"\s*style="object-position: center;"></video>', '<img src="8.jpeg" alt="Exhibit 8" class="art-image">', content)

# Video 3 -> 9
content = re.sub(r'<video src="VIDEO 3\.mp4" autoplay loop muted playsinline class="art-image"\s*style="object-position: center;"></video>', '<img src="9.jpeg" alt="Exhibit 9" class="art-image">', content)

content = content.replace('src="IMAGE 7.jpeg"', 'src="10.jpeg"')

# Scratch bg
content = content.replace('src="IMAGE 8.jpeg"', 'src="1.jpeg"')

# Ensure title is Title Case / Uppercase properly as needed
with open(r"C:\Users\smeet\OneDrive\Desktop\Birthday_Website\yashvi\index_1.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
