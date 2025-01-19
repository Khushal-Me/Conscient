import pandas as pd
from groq import Groq  # Replace 'some_module' with the actual module name
from flask import request

# Load the data
file_path = 'data.csv'
df = pd.read_csv(file_path)

# Extract the column name from the dataframe
def extract_column_name(df):
    column_name = df.columns[2]
    return column_name

# Extract and edit the column names
def extract_and_edit_column_name(df):
    column_names = df.columns[1:]  # Excluding the first column
    print("Original columns:", column_names)
    
    new_column_names = {}
    
    for column in column_names:
        # Extract the mood from the column name (i.e., get the part after 'Answer.f1.')
        final_column = column.split('.')[2]  # This splits the string at '.' and grabs the 3rd part
        new_column_names[column] = final_column  # Map the old column name to the new one

    # Rename the columns using the dictionary of old-to-new names
    df.rename(columns=new_column_names, inplace=True)
    return df

# Call the function to extract and edit the column names
df = extract_and_edit_column_name(df)

# Print the renamed columns and dataframe to check
print("Updated Columns:", df.columns)
print(df.head())

ratings = []

def diary(ratings, df):
    client = Groq(
        api_key="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")
    
    model_prompt = []

    # Iterate through each row and generate training prompt
    for index, row in df.iterrows():
        user_entry = row['Answer']
        # Check for TRUE values in the specified columns
        true_columns = row.iloc[1:10][row.iloc[1:10] == True].index.tolist()
        mood = ['Answer', 'afraid', 'angry', 'anxious', 'ashamed', 'awkward', 'bored',
       'calm', 'confused', 'disgusted', 'excited', 'frustrated', 'happy',
       'jealous', 'nostalgic', 'proud', 'sad', 'satisfied', 'surprised',
       'exercise', 'family', 'food', 'friends', 'god', 'health', 'love',
       'recreation', 'school', 'sleep', 'work']
        model = [
                {
                    "role": "system",
                    "content": f"""prompt
        You are a Diary Assistant AI. Your task is to respond to users' diary entries empathetically based on the mood they express. 
        Below is a user's diary entry with their mood. Try as much as possible to create an emotion for you so you can feel like an human talking to user.

        User Entry: "{user_entry}"
        Mood options: {mood}

        Your response should be aligned with the mood and encourage further interaction. Talk like you are human and facing same problem and how you overcomed it.

         "Dont display this but calculate it -expected_mood(give directly answer) , describe the moods(There can be more then one) and give a response that aligns with the mood of the user(It should be under 1 line), 
        Expected Response: if mood guessed by ai is same or diffrent from the users mood which is {true_columns} then guide something to this AI so it can be perfect next time and can talk with human emotion(write in short under one line That what ai should focus),
        Strickly follow in one line and prompt for making the final AI Model for the Diary Assisant is {model_prompt}, SO just give me the point to add nothing more. And should make the AI accurate more. Just write About the focus and in small.ANd, Rephrace the focus.
        """
            }
            ]

        chat_completion = client.chat.completions.create(
            messages=model,
            model="llama-3.3-70b-versatile",
        )
        model_prompt.append(chat_completion.choices[0].message.content)
        print(chat_completion.choices[0].message.content)
        with open('ratings.txt', 'a') as file:
            file.write(f"{chat_completion.choices[0].message.content},\n")


    # # Update the ratings list with the model prompts
    # ratings.extend(model_prompt)

    # Append the model prompts to the file
#diary(ratings,df)


def train_model():
    with open('ratings.txt', 'r') as file:
        model_prompt = file.readlines()
    
    print(model_prompt)

train_model()

