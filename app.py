from flask import Flask, request, jsonify 
from flask_cors import CORS 
from tensorflow.keras.models import load_model 
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
import numpy as np
from PIL import Image 
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = "monument_classifier_mobilenetv2.h5"
model = load_model(MODEL_PATH)


class_labels = ["Ajanta Caves", "Charar-E- Sharif", "Chhota_Imambara", "Ellora Caves", "Fatehpur Sikri", "Gateway of India", 
                "Hawa mahal", "Humayun_s Tomb", "India_gate", "Khajuraho", "Sun Temple Konark", "alai_darwaza", "alai_minar", 
                "basilica_of_bom_jesus", "charminar", "golden temple", "iron_pillar", "jamali_kamali_tomb", "lotus_temple", 
                "mysore_palace", "qutub_minar", "tajmahal", "tanjavur temple", "victoria memorial"
]

@app.route("/predict", methods = ["POST"]) 
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}),400
    file = request.files["file"]
    if file.filename == " ":
        return jsonify({"error": "Empty filename"}),400
    
    try:
        image = Image.open(file).convert("RGB")
        image = image.resize((224,224))
        image = img_to_array(image)
        image = preprocess_input(image)
        image = np.expand_dims(image,axis = 0)
        
        predictions = model.predict(image)[0]
        class_idx = np.argmax(predictions)
        class_name = class_labels[class_idx]
        confidence = float(np.max(predictions))
        
        return jsonify({
            "place": class_name,
            "confidence": round(confidence,2)
        })
    except Exception as e:
        return jsonify({"error": str(e)}),500
    
@app.route("/",methods=["GET"])
def home():
    return jsonify({"message":"Monument prediction API is running!"})

if __name__ == "__main__":
    app.run(debug = True)

    


