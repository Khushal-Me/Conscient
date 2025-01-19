import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report


file_path = '/mnt/data/data.csv'
data = pd.read_csv(file_path)

# Add a 'Rating' column
data['Rating'] = None

print(data.head())


def preprocess_data(df):

    feature_columns = [col for col in df.columns if col.startswith('Answer.')]  # All emotion and topic flags
    df = df[['Answer'] + feature_columns].copy()
    
    df['Answer'].fillna('', inplace=True)
    
    return df

data = preprocess_data(data)


X_text = data['Answer'] 
X_flags = data.drop(columns=['Answer', 'Rating'])  


tfidf_vectorizer = TfidfVectorizer(max_features=1000, stop_words='english')
X_text_tfidf = tfidf_vectorizer.fit_transform(X_text)


import scipy.sparse as sp
X_combined = sp.hstack([X_text_tfidf, sp.csr_matrix(X_flags.values)])


y = data['Answer.f1.happy.raw'] 

X_train, X_test, y_train, y_test = train_test_split(X_combined, y, test_size=0.2, random_state=42)


model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))

import joblib
joblib.dump(model, 'emotion_model.pkl')
joblib.dump(tfidf_vectorizer, 'tfidf_vectorizer.pkl')


def add_user_rating(entry_index, rating):
    """
    Updates the 'Rating' column for a specific entry.
    """
    data.loc[entry_index, 'Rating'] = rating

add_user_rating(0, 5)  
print("Updated Data Preview:")
print(data.head())
