from flask import Flask, request, jsonify, render_template
import openai
import os

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = os.environ["open_api_key"]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-image', methods=['POST'])
def generate_image():
    prompt = request.json.get('prompt')
    if not prompt:
        prompt = "a cute kitten"
    # if not prompt:
    #     return jsonify({'error': 'No prompt provided'}), 400

    try:
        response = openai.Image.create(
            # model=,
            prompt=prompt,
            n=1,
            size="1024x1024"
        )
        image_url = response['data'][0]['url']
        return jsonify({'image_url': image_url})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()