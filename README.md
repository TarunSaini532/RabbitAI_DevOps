# Sales Insight Automator

A full-stack application that allows users to upload sales datasets (CSV/XLSX), automatically generate a short AI-based sales analysis, and send the summary to a specified email address.

The goal of this project is to demonstrate a simple data-processing workflow combined with AI summarization, email automation, and DevOps practices such as containerization and CI.

---

## Overview

The application works as follows:

1. A user uploads a sales dataset from the frontend.
2. The backend parses the file and extracts the relevant data.
3. The dataset is sent to an LLM (Groq API) to generate a concise executive summary.
4. The generated summary is delivered via email to the user.

This project also includes API documentation using Swagger and is containerized with Docker for easier deployment.

---

## Tech Stack

**Frontend**

- React
- Vite
- TailwindCSS
- Axios

**Backend**

- Node.js
- Express.js
- Multer (file uploads)
- Nodemailer (email delivery)
- Swagger (API documentation)

**AI Integration**

- Groq API (Llama model)

**DevOps / Infrastructure**

- Docker
- Docker Compose
- GitHub Actions (CI pipeline)

**Deployment**

- Frontend: Vercel
- Backend: Render

---

## Project Structure

```
RabbitAI_DevOps
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── utils
│   ├── swagger.js
│   └── app.js
│
├── frontend
│   ├── src
│   └── components
│
├── docker-compose.yml
└── README.md
```

---

## Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/your-username/RabbitAI_DevOps.git
cd RabbitAI_DevOps
```

### 2. Install dependencies

Backend:

```
cd backend
npm install
```

Frontend:

```
cd ../frontend
npm install
```

---

### 3. Configure environment variables

Create a `.env` file inside the backend directory:

```
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
GROQ_API_KEY=your_groq_api_key
```

---

### 4. Start the backend

```
cd backend
node app.js
```

The server should start on:

```
http://localhost:5000
```

---

### 5. Start the frontend

```
cd frontend
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## API Documentation

Swagger is used to document and test the backend API.

Open the following URL:

```
http://localhost:5000/docs
```

From there you can test the `/api/upload` endpoint by uploading a dataset and providing an email address.

---

## Running with Docker

You can run the full stack using Docker:

```
docker compose up --build
```

This will start both the backend and frontend containers.

---

## Deployment

Frontend and backend are deployed separately.

Frontend (Vercel)

```
https://your-frontend-url.vercel.app
```

Backend (Render)

```
https://your-backend-url.onrender.com
```

Swagger documentation:

```
https://your-backend-url.onrender.com/docs
```

---

## Key Features

- Upload CSV or XLSX sales datasets
- Automatic AI-generated business summary
- Email delivery of analysis
- API documentation with Swagger
- Docker containerization
- CI pipeline with GitHub Actions

---

## Future Improvements


Some improvements that could be added in the future:

- Dataset validation and schema detection
- Visual dashboards for insights
- Background job queue for large datasets
- Authentication and user management

---

## Author

Tarun Saini

Computer Science undergraduate interested in backend systems, DevOps, and scalable software design.
