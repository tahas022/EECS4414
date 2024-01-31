from flask import Flask, request, redirect, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
import os
import Predictor
import numpy as np 



app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


# #Backslash just means the home (2 routes work)
# @app.route('/')
# @app.route('/home')
# def hello():
#     #Render_template makes reference to the webpage and takes in variables to the template
#     return render_template('home.html')



class Test(Resource): 
    def get(self):
        return "Welcome to the Subscriber Predictor"

    
    def post(self):
        try:
            value = request.get_json()
            if(value):
                return {'Post Values': value}, 201

            return {"error":"Invalid format."}

        except Exception as error:
            return {'error': error}



#Use this class to make predictions and have outputs using the model  
class GetPredictionOutput(Resource): 

    def get(self): 
        return {"error": "Invalid Method "}
    
    def post(self): 
        try:
            #Getting our data and making a prediction using our model
            data = request.get_json()
            config_array = np.array(list(data.values()))
            config_2d_array = config_array.reshape(1, -1)
            predict = Predictor.predict_mpg(config_2d_array)
            print(predict)
            return {'prediction' : predict}
        
        except Exception as error:  
            return {'error': error}



#Adding the following resources to our apnv ni 
api.add_resource(Test,'/')
api.add_resource(GetPredictionOutput,'/getPredictionOutput')



# We just want to make sure the api is running on port 5000 (default)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
