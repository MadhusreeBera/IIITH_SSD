from flask import Flask, jsonify
import requests

app = Flask(__name__)

def signin():
    uname = input("Uname: ")
    password = input("Pass: ")

    payload = {
        "username" : uname,
        "password" : password
    }

    resp = requests.post("http://127.0.0.1:5000/user/do_signin", json=payload).content.decode()
    print(resp)


def signup():
    uname = input("Uname: ")
    password = input("Pass: ")
    email=input("email")

    payload = {
        "username" : uname,
        "password" : password,
        "email":email
    }

    resp = requests.post("http://127.0.0.1:5000/user/signup", json=payload).content.decode()
    print(resp)

# signin()
c=int(input())
if c==1:
    signup()
if c==2:
    signin()


if "__main__" == __name__:
    app.run(host="127.0.0.1", port="3000", debug=True)