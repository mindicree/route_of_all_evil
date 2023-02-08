from flask import Flask, render_template, send_file
from random import random
import json

app = Flask(__name__)

try:
    with open('config.yaml', 'r') as file:
        config = json.load(file)
except Exception as e:
    print('Could not load config file. Using Default values')
    config = {
        'HOST': '127.0.0.1',
        'PORT': '5000',
        'DEBUG': True
    }

names_list = []
with open('static/names.txt', 'r') as file:
    for line in file:
        names_list.append(line.strip())

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/name', methods=['GET'])
def get_name():
    new_name = names_list[int(random()*len(names_list))]
    print(new_name)
    return new_name

@app.route('/fonts/<font_name>')
def get_font(font_name):
    return send_file(f'./fonts/{font_name}')

@app.route('/img/<cat>/<image_name>')
def get_image(cat, image_name):
    return send_file(f'./static/img/{cat}/{image_name}')

if __name__ == '__main__':
    app.run(host=config['HOST'], port=config['PORT'], debug=config['DEBUG'])