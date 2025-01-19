from pymongo import MongoClient

# MongoDB connection function
def get_mongo_client(uri="mongodb+srv://jagdishpatel:jagdish@dairyai.pg1e9.mongodb.net/?retryWrites=true&w=majority&appName=DairyAI"):

    try:
        client = MongoClient(uri, tlsAllowInvalidCertificates=True)
        print("Connected to MongoDB!")
        return client
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        return None

def insert_diary_entry(collection,title, diary_entry):

    
    try:
        result = collection.insert_one(title,diary_entry)
        return result.inserted_id
    except Exception as e:
        print(f"Error inserting diary entry: {e}")
        return None

# Function to fetch documents
def fetch_documents(collection, query={}):
 
    try:
        documents = list(collection.find(query))
        print(f"Fetched {len(documents)} documents.")
        return documents
    except Exception as e:
        print(f"Error fetching documents: {e}")
        return []

# Function to update a document
def update_rating(collection, query, update):

    try:
        result = collection.update_one(query, update)
        print(f"Matched {result.matched_count}, Modified {result.modified_count}")
        return result
    except Exception as e:
        print(f"Error updating document: {e}")
        return None

# Function to delete a document
def delete_diary(collection, query):
    try:
        result = collection.delete_one(query)
        print(f"Deleted {result.deleted_count} document(s).")
        return result
    except Exception as e:
        print(f"Error deleting document: {e}")
        return None

# Main function for testing
if __name__ == "__main__":
    # Connect to MongoDB
    client = get_mongo_client()
    
