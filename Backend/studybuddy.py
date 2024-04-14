from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from generator import *
import glob
import random

app = Flask(__name__)
CORS(app)


# @app.route('/process_text', methods=['POST'])
# def process_text():
#     data = request.json
#     text = data['text']
#     response = {'message': 'Text processed', 'data': text}
#     return jsonify(response)

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = './'


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/sample')
def sample():
    return {"message": ""}

@app.route('/process_summary', methods=['POST'])
def process_summary():

    # if "file" not in request.files:
    #     return {"message": "No file part"}, 400
    # pdf_file = request.files['file']
    # # pdf_files.save(f"./{pdf_files.filename}")
    # # pdftojson(pdf_files)
    # # txt_files = request.args['input']
    # for i in pdf_files:
    #     i.save(os.path.join(".", i.filename))
    #     pdftojson()
    # with open('./outsum.json', 'r') as file:
    #     data1 = json.load(file, strict=False)
    # # with open('./Backend/outquiz.json', 'r') as file:
    # #     data2 = json.load(file)
    # # return {"message": "SUCCESS YAYY WE MADE IT HERE"}
    # return jsonify(**data1)

    print("here")
    cleaner()
    # files = request.files.getlist('file')
    if "file" not in request.files:
        return {"message": "No file part"}, 400
    file = request.files['file']
    topic = request.form['topic']
    print(topic)
    combined_results = {}
    # for file in files:
    if file and allowed_file(file.filename):
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)
        converter(file, topic)
        outputpath = './' + file.filename[:-4] + '_summary.json'
        with open(outputpath, 'r') as out:
            data = json.load(out)
            combined_results.update(data)
            print("here")
    # with open('final.json', 'w') as json_file:
    #     json.dump(combined_results, json_file, indent=4)
    # with open('./final.json', 'r') as file:
    #     json_content = json.load(file)
    # return {"Summary": "SUCCESS YAYY WE MADE IT HERE"}
    new_json_content = {'Summary': combined_results}
    with open('final.json', 'w') as json_file:
        json.dump(combined_results, json_file, indent=4)
    return jsonify(new_json_content)

@app.route('/process_quiz', methods=['GET'])
def process_quiz():
    # amt = request.form['amt']
    amt = 5
    quizzes = glob.glob('./*_quiz.json')
    combined_questions = []
    for file in quizzes:
        with open(file, 'r') as file:
            quiz = json.load(file)
            print(quiz)
            combined_questions.extend(quiz)
    random.shuffle(combined_questions) 
    if amt < len(combined_questions):
        combined_questions = combined_questions[:amt]
    # new_quiz = {f'question{i+1}': q for i, q in enumerate(combined_questions)}
    new_json_content = {'Questions': combined_questions}
    print("here")
    with open('./new_quiz.json', 'w') as file:
        json.dump(new_json_content, file, indent=4) 
    return jsonify(new_json_content)

if __name__ == '__main__':
    app.run(debug=True)
    