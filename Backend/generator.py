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
    As a professor focusing on that field, can you summarize that for me? Return output in json format without nesting."""
    promptquiz = """I am having trouble understanding """ + topic +  """. Here are the lecture information associated with it. 
    Can you make a multiple choice quiz (A,B,C,D) with 10 questions, and give me the answers? Return output in json format of a list of question, options, and answer."""

    if ".pdf" in file.filename:
        reader = PdfReader(file.filename)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"

        inputsum=[promptsum, text]
        inputquiz=[promptquiz, text]

        response = model.generate_content(inputsum)
        with open('./' + file.filename[:-4] + '_summary.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename[:-4] + '_summary.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

        response = model.generate_content(inputquiz)
        with open('./' + file.filename[:-4] + '_quiz.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename[:-4] + '_quiz.json', 'r+') as f:
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
        with open('./' + file.filename[:-4] + '_summary.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename[:-4] + '_summary.json', 'r+') as f:
            lines = f.readlines()
            f.seek(0)
            f.truncate()
            f.writelines(lines[1:-1])

        response = model.generate_content(inputquiz)
        with open('./' + file.filename[:-4] + '_quiz.json', 'w') as f:
            f.write(response.text)
        with open('./' + file.filename[:-4] + '_quiz.json', 'r+') as f:
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