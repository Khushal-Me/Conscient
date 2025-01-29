# Conscient 🧠

Conscient is an AI-powered mental health support platform that combines intelligent conversation, mood tracking, and community connection. Built with React and powered by advanced AI models, It provides a safe space for mental health support.

[▶️ Watch the Conscient Demo Video](https://www.youtube.com/watch?v=dE0HKtUL-vY)

## 🌟 Features

- **AI Therapy Companion**: Engage in supportive conversations with our self-learning AI model
- **Smart Diary**: Keep track of your thoughts and emotions with AI-powered insights
- **Peer Connection**: Connect with others based on AI-determined compatibility
- **Secure Environment**: Username/password authentication with encrypted data storage

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Shadcn/UI components

### Backend & AI
- MongoDB Atlas for data storage
- Groq API integration
- Llama 3.3 Versatile-Versatile model
- Random Forest classifier (trained on Kaggle mental health dataset)
- Regression model for pattern analysis

## 💾 Database Structure

MongoDB Atlas collections:
- Users
- Chat histories
- Diary entries
- User interactions
- Model learning patterns

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Khushal-Me/Conscient.git
cd Conscient
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_uri
GROQ_API_KEY=your_groq_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🤖 AI Implementation

### Self-Learning Model
- Adapts to user interaction patterns
- Stores learned patterns in MongoDB
- Continuous improvement through user conversations

### Data Processing
- Kaggle dataset integration for initial model training
- Real-time pattern recognition
- Secure data handling and anonymization

## 🔒 Security Features

- Username/password authentication
- Encrypted data storage
- Secure API communications
- Protected user matching system

## 🔄 API Integration

- Groq API for AI model interactions
- Rate limiting for API calls
- Error handling and fallback strategies

## 🚀 Future Deployments

Planned deployment on Vercel for:
- Scalable infrastructure
- Automatic deployments
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/Khushal-Me/Conscient)
- [Report Issues](https://github.com/Khushal-Me/Conscient/issues)

---

Built with ❤️ for better mental health support | [Report an Issue](https://github.com/Khushal-Me/Conscient/issues)
