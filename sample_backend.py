from random import uniform as randuniform
from time import time

from flask import Flask, jsonify
from flask_cors import CORS


sample_malignancy_rate = 0.2


app = Flask(__name__)
CORS(app)

class DummyDataGenerator:
    def __init__(self):
        self.num_patients = int(time())
        self.num_breast_cancer_detected = int(self.num_patients * sample_malignancy_rate)
        self.malignancy_rate = sample_malignancy_rate

    def get_data(self):
        new_num_patients = int(time())
        num_patients_added = new_num_patients - self.num_patients
        added_patients_malignancy_rate = randuniform(0, 1)
        num_malignant_patients_added = round(added_patients_malignancy_rate * num_patients_added)

        self.num_patients = new_num_patients
        self.num_breast_cancer_detected += num_malignant_patients_added
        self.malignancy_rate = self.num_breast_cancer_detected / self.num_patients

        return self.num_patients, self.num_breast_cancer_detected, self.malignancy_rate

dummy_data_generator = DummyDataGenerator()


def get_cards_data():
    total_patients, breast_cancer_detected, malignancy_rate = dummy_data_generator.get_data()
    print(total_patients)
    print(breast_cancer_detected)
    
    cards_data = [
        {
            "title": "Total Patients Analysed",
            "change": "each",
            "amount": total_patients,
        },
        {
            "title": "Patients Analysed",
            "change": "each",
            "amount": total_patients,
        },
        {
            "title": "Breast Cancer Detected",
            "change": "each",
            "amount": breast_cancer_detected,
        },
        {
            "title": "Breast Cancer Ruled Out",
            "change": "each",
            "amount": (total_patients - breast_cancer_detected),
        },
        {
            "title": "Malignancy Rate",
            "change": "%",
            "amount": str(round(malignancy_rate * 100, 2)),
        },
        {
            "title": "Non-Malignancy Rate",
            "change": "%",  
            "amount": str((100 - round(malignancy_rate * 100, 2))),
        },
    ]
    return cards_data


@app.route('/dashboard/cards-data', methods=['GET'])
def get_dashboard_cards_data():
    return jsonify({
        'success': True,
        'result': {
            'cardsData': get_cards_data(),
        },
    })


if __name__ == '__main__':
    app.run(debug=True, port=8000)
