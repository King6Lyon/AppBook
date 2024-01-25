import  express  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import userRoutes from "./routes/user.js";
import dotenv from 'dotenv';
const app= express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

dotenv.config();


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  //route el auth 
app.use('/auth',userRoutes)
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send('Welcom to BookStore');
})

app.use('/books', booksRoute);

