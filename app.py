from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/welcome')
def welcome():
    msg = 'foobar'
    t = 'python flask'
    render_template('welcome.html', title=t, message=msg)


if __name__ == '__main__':
    app.run()
