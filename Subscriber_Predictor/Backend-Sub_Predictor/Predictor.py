import pickle
import pandas as pd


# This is going to be for loading a data frame in and sending it through our pkl model that we've serialized 
def predict_mpg(config):
    ##loading the model from the saved file
    pkl_filename = "Linear_Reg_Model.pkl"
    with open(pkl_filename, 'rb') as f_in:
        model = pickle.load(f_in)

    # if type == dict: 
    #     df = pd.DataFrame(config)

    # else: 
        df = config

    y_pred = model.predict(df) 
    result = y_pred[0] if len(y_pred) > 0 else None

    return result





