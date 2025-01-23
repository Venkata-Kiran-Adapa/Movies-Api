# Movies API

A simple API for managing movie data built with **Node.js**, **Express**, and **MongoDB**. This API allows you to perform CRUD operations on movie records, including querying by title, directors, year, and genres.

## Features
- Get a list of all movies.
- Create new movie entries.
- Query movies by title, director, year, or genre.
- Update movie details by title.
- Delete movie entries by title.

## Tech Stack
- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemon**: Tool for automatically restarting the server during development.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movies-api.git
   cd movies-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the MongoDB database:
   - Ensure MongoDB is running locally or connect to a remote MongoDB instance (for example, MongoDB Atlas).
   - Update the connection URI in `index.js` if necessary:
     ```js
     mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/Practice', {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     ```

4. Run the application:
   ```bash
   npm start
   ```
   Or, if you prefer automatic server restarts during development:
   ```bash
   npm run dev
   ```

   The API will now be running on `http://localhost:3000`.

## API Endpoints

### 1. Get All Movies
- **GET** `/api/movies`
- **Response**: Returns a list of all movies (up to 20).

### 2. Create a New Movie
- **POST** `/api/movies`
- **Body**: 
   ```json
   {
     "title": "Movie Title",
     "directors": ["Director Name"],
     "runtime": "120",
     "year": "2022",
     "genres": ["Action", "Drama"]
   }
   ```
- **Response**: Returns the newly created movie object.

### 3. Get Movies by Title
- **GET** `/api/movies/title/:title`
- **Response**: Returns movies matching the title.

### 4. Get Movies by Director
- **GET** `/api/movies/directors/:directors`
- **Response**: Returns movies matching the director name.

### 5. Get Movies by Year
- **GET** `/api/movies/year/:year`
- **Response**: Returns movies released in the specified year.

### 6. Get Movies by Genre
- **GET** `/api/movies/genre/:genre`
- **Response**: Returns movies matching the specified genre.

### 7. Update Movie by Title
- **PUT** `/api/movies/:title`
- **Body**: 
   ```json
   {
     "runtime": "130",
     "year": "2023",
     "genres": ["Comedy", "Drama"]
   }
   ```
- **Response**: Returns a success message: "Value Updated".

### 8. Delete Movie by Title
- **DELETE** `/api/movies/:title`
- **Response**: Returns the deleted movie object.

## Environment Variables

The application uses the following environment variables:

- `MONGO_URI`: The MongoDB connection string (e.g., `mongodb://localhost/Practice`).
- `PORT`: The port on which the server runs (default is 3000).

You can create a `.env` file in the root of your project and add the variables like this:

```
MONGO_URI=mongodb://localhost/Practice
PORT=3000
```


