import google.generativeai as genai



genai.configure(api_key='AIzaSyA4U95OPm8gMXZ63Q63xjZCAydnb9mE0Tg')
model = genai.GenerativeModel('gemini-pro-vision')


prompt = """This image contains educational content.
Summarize the content in several sentences. Return output in json format:
{Summary: summary}"""

dict = {}
list = []
list.append(prompt)
import pypdfium2 as pdfium
pdf = pdfium.PdfDocument("CS121Lec01.pdf")

for i in range(len(pdf)):
    page = pdf[i]
    image = page.render(scale=4).to_pil()
    list.append(image)
    #image.save(f"output_{i:03d}.jpg")
print(len(dict))
#response = model.generate_content([prompt, dict])
response = model.generate_content(list)
print(response.text)

print(".......")

