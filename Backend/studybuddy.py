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

@app.route('/process_msg', methods=['POST'])
def process_msg():
    pdf_files = request.files['pdf']
    txt_files = request.args['input']
    for i in pdf_files:
        i.save(os.path.join("./Backend", o.filename))
        pdftojson()
    with open('./Backend/outsum.json', 'r') as file:
        data1 = json.load(file)
    with open('./Backend/outquiz.json', 'r') as file:
        data2 = json.load(file)
    return [jsonify(data1),jsonify(data2)]


if __name__ == '__main__':
    app.run(debug=True)
    