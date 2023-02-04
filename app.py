from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/fonts/<font_name>')
def get_font(font_name):
    return send_file(f'./fonts/{font_name}')

@app.route('/img/<cat>/<image_name>')
def get_image(cat, image_name):
    return send_file(f'./static/img/{cat}/{image_name}')

if __name__ == '__main__':
    app.run(debug=True)