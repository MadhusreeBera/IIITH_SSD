from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_manager, login_user, logout_user, login_required, UserMixin
from flask import request


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY']='secret_key'

db = SQLAlchemy(app)
login_manager=LoginManager()


login_manager.init_app(app)

class User(UserMixin,db.Model):
    id=db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)


with app.app_context():

    db.create_all()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/user/do_signin', methods=['POST'])
def do_signin():
    if(request.method == 'POST'):
        req=request.get_json()
        username=req['username']
        password=req['password']
        check_user = User.query.filter_by(username=username).first()
        if(check_user is not None):
            login_user(check_user)
            return "LOGGED in successfully"
        else:
            return "ERRRO!!! User does not exist"

@app.route('/user/signup', methods=['POST'])
def signup():
    if(request.method=='POST'):
        req=request.get_json()
        username=req['username']
        password=req['password']
        email=req['email']

        user = User(1, username, email, password)

        db.session.add(user)
        db.session.commit()

        return "User added"

@app.route("/hello")
def hello():
    return "Hiiii"

if "__main__" == __name__:
    app.run(host="127.0.0.1", port="5000", debug=True)
