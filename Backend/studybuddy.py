from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from Backend.generator import *

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

results = []
quizzes = []

@app.route('/process_summary', methods=['POST'])
def process_summary():
    cleaner()
    files = request.files.getlist('file')
    topic = request.form['topic']
    results.clear()
    quizzes.clear()
    for file in files:
        if file and allowed_file(file.filename):
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)
            converter(file, topic)
            outputpath = './' + file.filename + '_summary.json'
            with open(outputpath, 'r') as out:
                data = json.load(out)
                results.append(data)
            outputpath = './' + file.filename + '_quiz.json'
            with open(outputpath, 'r') as out:
                data = json.load(out)
                quizzes.append(data)
    return jsonify(results)

@app.route('/process_quiz', methods=['POST'])
def process_quiz():
    return jsonify(quizzes)
    

if __name__ == '__main__':
    app.run(debug=True)
    