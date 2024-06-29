import express, { json, request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors';

//Make an express instance
const app = express();

//Middleware to parse the request body as a json
app.use(express.json());

//Middleware for handling CORS Policy
//Option 1: Allow all origins with default of cors
app.use(cors());
//Option 2: Allow custom origins
// app.use(cors({
//     origin: `http://localhost:${PORT}`,
//     methods:['POST','GET','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

//Routing landing page for the app
app.get("/", (request, response) => {
  return response.send("Weelcome to Mern stack tutorial");
});

//Establish connection
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("App is listening to port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/books',bookRoutes);
