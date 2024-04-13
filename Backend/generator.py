import google.generativeai as genai
import pypdfium2 as pdfium
from pypdf import PdfReader

genai.configure(api_key='AIzaSyA4U95OPm8gMXZ63Q63xjZCAydnb9mE0Tg')
model = genai.GenerativeModel('gemini-1.5-pro-latest')


prompt = """I am having trouble understanding databases. Here are the lecture slides associated with it. 
Can you summarize them for me in an easy to understand way? Then, can you make a multiple choice quiz for all of them, 
with 5 questions from each slide deck, and give me the answer key at the end of each section?"""


#  Return output in json format:
# {Summary: summary}

dict = {}
list = []
list.append(prompt)

#pdf = pdfium.PdfDocument("./Backend/CS121Lec01.pdf")

# image = genai.upload_file(path='./Backend/output_015.jpg')
# response = model.generate_content([prompt, image])
# print(response.text)


# for i in range(len(pdf)):
#     page = pdf[i]
#     image = page.render(scale=4).to_pil()
#     image.save(f"./temp/output_{i:03d}.jpg")
#     file = genai.upload_file(path=f'./temp/output_{i:03d}.jpg')
#     list.append(file)

# response = model.generate_content(list)
# print(response.text)

# print(".......")

reader = PdfReader("./Backend/CS121Lec01.pdf")
text = ""
for page in reader.pages:
  text += page.extract_text() + "\n"

response = model.generate_content([prompt, text])
print(response.text)