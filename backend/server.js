const express = require("express");
const notes = require("./Data/notes")
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { errorHandler, notFound } = require("./middlewares/errorMiddleware.js");
const path = require("path");


const app = express();
dotenv.config();
connectDB()
app.use(express.json());



// //create route

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/frontend/build")));

    app.get("/*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
//create web server
app.listen(PORT, console.log(`server started on PORT ${PORT}` || 5000));