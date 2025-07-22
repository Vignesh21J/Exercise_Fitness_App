# 🏋️ Exercise Fitness App

A responsive web application built with React and Node.js to explore various exercises with animated demos and related YouTube videos.

## 🚀 Features

- Search exercises by body part, equipment, or name
- View animated GIFs (proxied securely via backend)
- Watch related YouTube videos
- Clean and responsive UI with Material UI

## 🛠️ Tech Stack

- **Frontend**: React, MUI, Axios
- **Backend**: Express.js (Node)
- **APIs**: ExerciseDB, YouTube Search (via RapidAPI)

## 📦 Project Structure

Exercise_Fitness_App/
├── frontend/ # React app
│ └── .env # Contains REACT_APP_RAPID_API_KEY
├── proxy-server/ # Node.js backend
│ └── .env # Contains RAPIDAPI_KEY


## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/Exercise_Fitness_App.git

2. Install dependencies
  cd frontend && npm install
  cd ../proxy-server && npm install

3. Add .env files in both frontend/ and proxy-server/

4. node server.js

5. npm start
