from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})

KIMI_API_URL = "https://api.moonshot.cn/v1/chat/completions"
KIMI_API_KEY = "sk-zVm3O4F0UwIylW2ROiDrNRhKI9MOEdDDekOZfrIX9skD0xBL"

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the KimiAI Chat API!", 200

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    if not user_message:
        return jsonify({'error': 'Message is required'}), 400

    try:
        kimi_response = call_kimi_api(user_message)
        return jsonify({'response': kimi_response})
    except Exception as e:
        return jsonify({'error': f'Failed to get response: {str(e)}'}), 500
def call_kimi_api(user_message):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {KIMI_API_KEY}"
    }

    payload = {
        "model": "moonshot-v1-8k",
        "messages": [
            {"role": "user", "content": user_message}
        ],
        "temperature": 0.5
    }

    response = requests.post(KIMI_API_URL, headers=headers, data=json.dumps(payload))

    if response.status_code == 200:
        result = response.json()
        return result['choices'][0]['message']['content']
    else:
        raise Exception(f"Kimi API request failed with status {response.status_code}: {response.text}")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
