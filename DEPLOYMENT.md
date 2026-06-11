# AI Learning Labs - Deployment Guide

## Local Development

### Backend
```bash
cd backend
npm install
npm start
```
Server runs on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm start
```
App runs on `http://localhost:3000`

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/ai-learning-labs
JWT_SECRET=your_secret_key
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment Options

### Backend Deployment (Railway)
1. Create account at railway.app
2. Connect GitHub repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel)
1. Create account at vercel.com
2. Connect GitHub repository
3. Set environment variables
4. Deploy

## Production Checklist
- [ ] Update CORS_ORIGIN to production domain
- [ ] Change JWT_SECRET to secure value
- [ ] Enable HTTPS
- [ ] Set NODE_ENV=production
- [ ] Configure database (MongoDB Atlas)
- [ ] Test all features
- [ ] Monitor errors and logs