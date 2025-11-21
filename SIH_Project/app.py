from flask import Flask, request, render_template, redirect, url_for
from models import db, Login, SignUp
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:sqlpass@localhost/Alumini_DB'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app,db)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

@app.route('/login',methods =['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('pass')

        new_user = Login(name=username,password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('login_signup.html')

@app.route('/signup', methods =['GET','POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email_id = request.form.get('email')
        password = request.form.get('pass')

        new_user = SignUp(name=username, email = email_id,password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('login_signup.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=10000, debug=True)