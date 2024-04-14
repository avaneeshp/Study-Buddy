import google.generativeai as genai
import os

genai.configure(api_key='AIzaSyC_Ux1439H-Zf20pH6xyH2-dG00UAOdxf4')

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("Give me python code to sort a list")
print(response.text)