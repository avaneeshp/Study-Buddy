import google.generativeai as genai
import os
import fitz  # pip install --upgrade pip; pip install --upgrade pymupdf
from tqdm import tqdm # pip install tqdm
from pypdf import PdfReader
import glob
import random
import PIL.Image

os.environ["GOOGLE_API_KEY"] = 'AIzaSyA4U95OPm8gMXZ63Q63xjZCAydnb9mE0Tg'
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

workdir = "."

def converter(file, topic):
    os.environ["GOOGLE_API_KEY"] = 'AIzaSyA4U95OPm8gMXZ63Q63xjZCAydnb9mE0Tg'
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    model = genai.GenerativeModel('gemini-1.5-pro-latest')
    promptsum = """I am having trouble understanding """ + topic +  """. Here is the lecture information associated with it.
    As a professor focusing on that field, can you summarize that for me, organizing it by the main topics? Return output in json format."""
    promptquiz = """I am having trouble understanding """ + topic +  """. Here are the lecture information associated with it. 
    Can you make a multiple choice quiz (A,B,C,D) with 10 questions, and give me the answers? Return output in json format."""

    if ".pdf" in file.filename:
        reader = PdfReader(file.filename)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"

        inputsum=[promptsum, text]
        inputquiz=[promptquiz, text]

        response = model.generate_content(inputsum)
        with open('./' + file.filename + '_summary.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_summary.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

        response = model.generate_content(inputquiz)
        with open('./' + file.filename + '_quiz.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_quiz.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

    elif ".txt" in file.filename:
        with open(file.filename, 'r') as file:
            text = file.read()
            
        inputsum=[promptsum, text]
        inputquiz=[promptquiz, text]

        response = model.generate_content(inputsum)
        with open('./' + file.filename + '_summary.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_summary.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

        response = model.generate_content(inputquiz)
        with open('./' + file.filename + '_quiz.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_quiz.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

    else:
        img = PIL.Image.open(file.filename)
        inputsum=[promptsum, img]
        inputquiz=[promptquiz, text]
        
        response = model.generate_content(inputsum)
        with open('./' + file.filename + '_summary.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_summary.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

        response = model.generate_content(inputquiz)
        with open('./' + file.filename + '_quiz.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename + '_quiz.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])


def cleaner():
    json_files = glob.glob(os.path.join('./', '*.json'))
    for file_path in json_files:
        os.remove(file_path)

# os.mkdir(os.path.join(workdir, 'images'))

# for each_path in os.listdir(workdir):
#     if ".pdf" in each_path:
#         doc = fitz.Document((os.path.join(workdir, each_path)))
#         for i in tqdm(range(len(doc)), desc="pages"):
#             for img in tqdm(doc.get_page_images(i), desc="page_images"):
#                 xref = img[0]
#                 image = doc.extract_image(xref)
#                 pix = fitz.Pixmap(doc, xref)
#                 pix.save(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref)))
#                 if os.stat(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref))).st_size < 10000:
#                     os.remove(os.path.join(os.path.join(workdir, 'images'), "%s_p%s-%s.png" % (each_path[:-4], i, xref)))

# input = []

# prompt = """I am having trouble understanding file linking. Here are the lecture slides associated with it. 
# Can you summarize them for me in an easy to understand way? Then, can you make a multiple choice quiz 
# with 5 questions from each input, and give me the answer key at the end of each section? Return Output in json format {Summary: summary, Quiz: {Questions: [question1, question2, question3, etc], Answers: [question1, question2, question3, etc]}} such that the output is a json file, organized by slide deck"""

# promptquiz = """I am having trouble understanding calibration. Here are the lecture information associated with it. 
# Can you make a multiple choice quiz (A,B,C,D) with 10 questions, and give me the answers? Return output in json format."""

# promptsum = """I am having trouble understanding calibration. Here is the lecture information associated with it.
# As a professor focusing on that field, can you summarize that for me, organizing it by the main topics? Return output in json format."""

# promptimg = """I am having trouble understanding multicycle cpus. Here are some images from my lecture slides, can you 
# help me understand what's going on in 1 image? Output in json format such that the output is a json file"""

# model = genai.GenerativeModel('gemini-1.5-pro-latest')

#  Return output in json format:
# {Summary: summary}

# reader = PdfReader("./calibration.pdf")
# text = ""
# for page in reader.pages:
#   text += page.extract_text() + "\n"

# # reader = PdfReader("2.pdf")
# # text2 = ""
# # for page in reader.pages:
# #   text2 += page.extract_text() + "\n"

# # reader = PdfReader("3.pdf")
# # text3 = ""
# # for page in reader.pages:
# #   text3 += page.extract_text() + "\n"

# #input=[prompt, text]
# inputsum=[promptsum, text]
# inputquiz=[promptquiz, text]

# # inputimg=[promptimg]
# # size = len(os.listdir(os.path.join(workdir, "images")))
# # listnum = random.sample(range(size), 5)
# # counter = 0
# # for img in os.listdir(os.path.join(workdir, "images")):
# #         if counter in listnum:
# #             print(str(img))
# #             file = genai.upload_file(path=os.path.join(workdir, os.path.join("images", img)))
# #             input2.append(file)
# #             counter = counter + 1



# # import PIL.Image
# # img = PIL.Image.open('./multicycle_cpu.png')
# reader = PdfReader('./Picasso.pdf')
# text = ""
# for page in reader.pages:
#     text += page.extract_text() + "\n"

# inputsum=[promptsum, text]
# inputquiz=[promptquiz, text]

# response = model.generate_content(inputsum)
# with open('./outsum.json', 'w') as f:
#     f.write(response.text)

# response = model.generate_content(inputquiz)
# with open('./outquiz.json', 'w') as f:
#     f.write(response.text)
    
# with open('./outsum.json', 'r+') as f:
#     lines = f.readlines()
#     f.seek(0)
#     f.truncate()
#     f.writelines(lines[1:-1])

# with open('./outquiz.json', 'r+') as f:
#     lines = f.readlines()
#     f.seek(0)
#     f.truncate()
#     f.writelines(lines[1:-1])


# # files = glob.glob('./images/*')
# # for f in files:
# #     os.remove(f)
# # os.rmdir('./images')

# print("done!")
