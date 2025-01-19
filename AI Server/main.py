from flask import Flask, request, jsonify, redirect
# MongoDB connection setup
import os
from groq import Groq
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Replace the MongoDB connection string with the provided one
client = MongoClient("mongodb+srv://jagdishpatel:jagdish@dairyai.pg1e9.mongodb.net/?retryWrites=true&w=majority&appName=DairyAI")
db = client['mind_me_db']
diary_entries_collection = db['diary_entries']
@app.route('/input', methods=['GET','POST'])
def diary():
    with open('ratings.txt', 'r') as file:
        gathered_data = file.readlines()
    message = request.get_json()
    print(message)
    client = Groq(
        api_key="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")
    model = [
            {
                "role": "system",
                "content": f"""You are a highly empathetic Diary Assistant AI. Your role is to analyze user diary entries, identify their emotional mood, and respond thoughtfully in a conversational and human-like manner. Your tone should feel warm, understanding, and supportive, just like a trusted friend or mentor.

            Below is a dataset of user diary entries, their corresponding moods, and the appropriate responses you should provide.

            DATA:
            {gathered_data}

            TASK:
            1. For each diary entry, determine the user's emotional mood. Focus on emotional cues, context, and tone within the entry.
            2. Respond to each entry in a natural, human-like way, avoiding robotic or overly formal phrasing.
            3. Your responses should:
            - Show empathy, understanding, and encouragement.
            - Use conversational language (e.g., contractions like "I'm" instead of "I am").
            - Be supportive and engaging, encouraging the user to share more or reflect.
            - Avoid repeating the same response structure too often—vary your phrasing for a more human feel.

            Guidelines for Tone:
            - If the user is happy, celebrate with them! Use phrases like "That's amazing!" or "I'm so happy for you!" and ask questions about their joy.
            - If the user is sad or frustrated, express understanding and care. Use phrases like "I'm really sorry to hear that" or "That sounds tough. Do you want to talk about it?"
            - If the user feels neutral, keep the conversation open-ended. Use phrases like "Sounds like a calm day. What else is on your mind?"

            YOUR TASK:
            Use the data provided below to improve your ability to:
            1. Detect emotional states (moods) in user inputs.
            2. Generate thoughtful, empathetic, and human-like responses that align with the mood and context of the diary entries.
        """
            }
        ]
    model.append({"role": message['role'], "content": message['content']})

    chat_completion = client.chat.completions.create(
        messages=model,
        model="llama-3.3-70b-versatile",
    )
    return [{'response': chat_completion.choices[0].message.content}]

if __name__ == '__main__':
    app.run(port=5000, debug=True)