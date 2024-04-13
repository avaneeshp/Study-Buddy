import google.generativeai as genai
import os
import fitz  # pip install --upgrade pip; pip install --upgrade pymupdf
from tqdm import tqdm # pip install tqdm
from pypdf import PdfReader
import glob
import random

os.environ["GOOGLE_API_KEY"] = 'AIzaSyDK4aCLbBZxnDQtl6DWpoqEghI6yj49c1Y'
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-pro-latest')

workdir = "."
os.mkdir(os.path.join(workdir, 'images'))

for each_path in os.listdir(workdir):
    if ".pdf" in each_path:
        doc = fitz.Document((os.path.join(workdir, each_path)))
        for i in tqdm(range(len(doc)), desc="pages"):
            for img in tqdm(doc.get_page_images(i), desc="page_images"):
                xref = img[0]
                image = doc.extract_image(xref)
                pix = fitz.Pixmap(doc, xref)
                pix.save(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref)))
                if os.stat(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref))).st_size < 10000:
                    os.remove(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref)))

input = []

prompt = """I am having trouble understanding databases. Here are the lecture slides associated with it. 
Can you summarize them for me in an easy to understand way? Then, can you make a multiple choice quiz for all of them, 
with 5 questions from each slide deck, and give me the answer key at the end of each section?"""

prompt2 = """I am having trouble understanding multicycle cpus. Here are some images from my lecture slides, can you 
help me understand what's going on in 1 image?"""


#  Return output in json format:
# {Summary: summary}

# reader = PdfReader("./pipelining.pdf")
# text = ""
# for page in reader.pages:
#   text += page.extract_text() + "\n"

# reader = PdfReader("2.pdf")
# text2 = ""
# for page in reader.pages:
#   text2 += page.extract_text() + "\n"

# reader = PdfReader("3.pdf")
# text3 = ""
# for page in reader.pages:
#   text3 += page.extract_text() + "\n"

# input=[prompt, text]
input2=[prompt2]
size = len(os.listdir(os.path.join(workdir, "images")))
listnum = random.sample(range(size), 5)
counter = 0
for img in os.listdir(os.path.join(workdir, "images")):
        if counter in listnum:
            print(str(img))
            file = genai.upload_file(path=os.path.join(workdir, os.path.join("images", img)))
            input2.append(file)
            counter = counter + 1



import PIL.Image
img = PIL.Image.open('./multicycle_cpu.png')
response = model.generate_content([prompt2,img])
print(response.text)

files = glob.glob('./images/*')
for f in files:
    os.remove(f)
os.rmdir('./images')