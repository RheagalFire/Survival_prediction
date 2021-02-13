from flask import Flask,request,jsonify,render_template
import util

app=Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')



@app.route('/predict_survival',methods=['POST','GET'])
def predict_survival():
    Age=float(request.form['Age'])
    Sex=request.form['Sex']
    SibSp=int(request.form['SibSp'])
    Parch=int(request.form['Parch'])
    Fare=float(request.form['Fare'])
    Embarked=request.form['Embarked']
    response=jsonify({
    'Est_survival':str(util.get_survival(Sex,Age,SibSp,Parch,Fare,Embarked))
        })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__=='__main__':
    print('Starting server')
    app.run(debug=True)
