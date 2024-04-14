from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from Backend.generator import *
import random
import glob

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


@app.route('/process_summary', methods=['POST'])
def process_summary():
    cleaner()
    files = request.files.getlist('file')
    topic = request.form['topic']
    combined_results = {}
    for file in files:
        if file and allowed_file(file.filename):
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)
            converter(file, topic)
            outputpath = './' + file.filename + '_summary.json'
            with open(outputpath, 'r') as out:
                data = json.load(out)
                combined_results.update(data)
    # with open('final.json', 'w') as json_file:
    #     json.dump(combined_results, json_file, indent=4)
    # with open('./final.json', 'r') as file:
    #     json_content = json.load(file)
    new_json_content = {'summary': combined_results}
    return jsonify(new_json_content)

@app.route('/process_quiz', methods=['POST'])
def process_quiz():
    amt = request.form['amt']
    quizzes = glob.glob('./*_quiz.json')
    combined_questions = []
    for file in quizzes:
        with open(file, 'r') as file:
            quiz = json.load(file)
            combined_questions.extend(quiz['quiz'].values())
    random.shuffle(combined_questions)
    if amt < len(combined_questions):
        combined_questions = combined_questions[:amt]
    new_quiz = {'quiz': {f'question{i+1}': q for i, q in enumerate(combined_questions)}}
    # with open('./new_quiz.json', 'w') as file:
    #     json.dump(new_quiz, file, indent=4) 
    return jsonify(new_quiz)
    

if __name__ == '__main__':
    app.run(debug=True)
    