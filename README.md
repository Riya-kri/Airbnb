# 🏡 Airbnb Website

A full-stack Airbnb-inspired web application where users can explore property listings, create and manage their own listings, leave reviews, and authenticate securely.

This project was built to practice **backend development, RESTful APIs, authentication, authorization, database management, image uploading, and third-party API integration**.

## 🚀 Features

* 🔐 User Authentication & Authorization

  * User signup and login
  * Passport.js authentication
  * Session-based authentication
  * Protected routes

* 🏠 Listing Management

  * Create new listings
  * View all listings
  * View individual listing details
  * Edit listings
  * Delete listings
  * Owner-based authorization

* ⭐ Reviews & Ratings

  * Add reviews to listings
  * Delete reviews
  * Rating system
  * Review authorization

* 🗺️ Map Integration

  * Location-based listing display
  * Mapbox integration for maps and location visualization

* ☁️ Image Upload

  * Upload listing images
  * Cloudinary for cloud-based image storage
  * Multer for handling multipart/form-data

* 💬 Flash Messages

  * Success and error notifications
  * User-friendly feedback after different actions

* 🛡️ Validation & Error Handling

  * Server-side validation
  * Custom error handling
  * Async error handling using middleware

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Express Session

### APIs & Services

* Mapbox
* Cloudinary

### Other Tools

* Multer
* Connect-Mongo
* EJS-Mate
* Express-Session
* Method-Override

## 📂 Project Structure

```text
airbnb-clone/
│
├── controllers/
├── init/
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── middleware.js
├── schema.js
├── cloudConfig.js
├── app.js
├── package.json
├── .env
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd airbnb-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the required environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string

MAP_TOKEN=your_mapbox_token

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

> ⚠️ Never upload your `.env` file or API keys to GitHub.

### 5. Initialize the database

If your project contains sample data, run:

```bash
node init/index.js
```

### 6. Start the server

```bash
node app.js
```

Or, if you have a development script:

```bash
npm start
```

The application will run locally at:

```text
http://localhost:8080
```

## 🔑 Authentication Flow

The application uses **Passport.js** for authentication.

1. User creates an account.
2. Password is securely handled by Passport.
3. User logs in.
4. Passport authenticates the user.
5. A session is created.
6. Protected routes check whether the user is logged in.
7. Authorization middleware verifies whether the user owns a particular listing.

## 🗺️ Mapbox Integration

Mapbox is used to display the location of listings on an interactive map.

When a listing is created, its location is converted into geographical coordinates and displayed on the map.

## ☁️ Cloudinary Image Upload

Listing images are uploaded using **Multer** and stored in **Cloudinary**.

The basic flow is:

```text
User
  ↓
Image Upload
  ↓
Multer
  ↓
Cloudinary
  ↓
Image URL
  ↓
MongoDB
```

## 🧠 What I Learned

Through this project, I gained practical experience with:

* Building RESTful routes using Express.js
* CRUD operations with MongoDB and Mongoose
* Authentication using Passport.js
* Authorization and protected routes
* Express sessions and cookies
* Middleware in Express.js
* MVC-style project structure
* EJS templating
* Server-side validation
* Error handling and custom middleware
* Image uploading with Multer
* Cloudinary integration
* Mapbox API integration
* Environment variables
* Git and GitHub

## 🔮 Future Improvements

* 💳 Add payment integration
* 📅 Add booking and reservation functionality
* ❤️ Add wishlist/favorite listings
* 🔍 Add advanced search and filtering
* 📱 Improve responsive design
* 👤 Add user profile management
* ⭐ Add average rating display
* 📊 Add an owner dashboard
* 🚀 Deploy the application

## 📸 Screenshots

Add screenshots of your application here.

```text
screenshots/
├── home.png
├── listing.png
├── create-listing.png
├── login.png
└── map.png
```

## 👩‍💻 Author

**Riya**

B.Tech Computer Science & Engineering Student

### Connect with me

* GitHub: https://github.com/Riya-kri
* LinkedIn: https://www.linkedin.com/in/riya-kumari-a992a4301

## ⭐ Acknowledgements

This project was created for learning and educational purposes and is inspired by the functionality of Airbnb.

---

⭐ If you found this project useful, consider giving it a star!
