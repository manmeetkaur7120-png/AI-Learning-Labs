# 🧠 AI Learning Labs

An interactive platform where beginners can learn AI concepts through text-based interaction, quizzes, and hands-on experimentation.

## Features

✨ **6 Interactive Topics**
- Introduction to Machine Learning
- Neural Networks Basics
- Deep Learning
- Natural Language Processing
- Computer Vision
- Reinforcement Learning

📝 **Quiz System**
- 8 questions per topic
- Real-time scoring
- Detailed explanations
- Progress tracking

🏆 **Leaderboard**
- User rankings
- Score tracking
- Performance analytics
- Achievement badges

🧠 **Neural Network Lab**
- Interactive neural network simulator
- Real-time training visualization
- Parameter experimentation
- Loss graph and training history

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Dotenv** - Environment configuration

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **TensorFlow.js** - ML operations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install all dependencies
npm run install-all

# Or manually:
cd backend && npm install
cd ../frontend && npm install
```

### Development

```bash
# Start both servers
npm start

# Or separately:
npm run start:backend
npm run start:frontend
```

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### Demo Credentials

```
Email: john@test.com
Password: test123
```

## Project Structure

```
ai-learning-labs/
├── backend/
│   ├── routes/
│   ├── topics.json
│   ├── quizzes.json
│   ├── scores.json
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── config.js
│   ├── .env
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Topics
- `GET /api/topics` - Get all topics

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `GET /api/quizzes/:id` - Get quiz by ID
- `GET /api/quizzes/topic/:topicId` - Get quiz by topic
- `POST /api/quizzes/submit` - Submit quiz answers

### Scores
- `GET /api/scores/rankings` - Get user rankings
- `GET /api/scores/user/:userId` - Get user scores
- `POST /api/scores/save` - Save quiz score

### Neural Network
- `POST /api/neural-network/create` - Create network
- `POST /api/neural-network/train` - Train network
- `GET /api/neural-network/status/:id` - Get training status

## Deployment

### Backend (Railway)
1. Connect GitHub repository to Railway
2. Set environment variables
3. Deploy

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set `REACT_APP_API_URL` environment variable
3. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Learning Outcomes

By using AI Learning Labs, students learn:

- ✅ Fundamentals of machine learning
- ✅ Neural network architecture and training
- ✅ Deep learning concepts (CNNs, RNNs)
- ✅ Natural language processing basics
- ✅ Computer vision fundamentals
- ✅ Reinforcement learning principles
- ✅ Hands-on experimentation with ML models

## Future Enhancements

- [ ] MongoDB integration
- [ ] User authentication with JWT
- [ ] More advanced topics
- [ ] Video tutorials
- [ ] Code examples
- [ ] Certificate generation
- [ ] Mobile app
- [ ] Multiplayer challenges

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please reach out to the development team.

---

**Happy Learning! 🚀**