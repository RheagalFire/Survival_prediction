import pickle
import json
import numpy as np 

__model=pickle.load(open('model_rf.pickle','rb'))
def get_survival(Sex,Age,SibSp,Parch,Fare,Embarked):
    if(Sex=='M'):
        Sex=1
    if(Sex=='F'):
        Sex=0
    if(Embarked=='S'):
        Embarked=2
    if(Embarked=='C'):
        Embarked=0
    if(Embarked=='Q'):
        Embarked=1
    x=np.array([Sex,Age,SibSp,Parch,Fare,Embarked])
    return __model.predict([x])[0]


