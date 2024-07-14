import Express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import Route  from "./routes/Route.js";
import cors from 'cors';


const app = Express();


//Middleware for parsing request body
app.use(Express.json());


app.use(cors());

    // app.use(
    //   cors({
    //     origin: 'http://localhost:5555',
    //   methods:['GET','POST','PUT','DELETE'],
    // allowedHeaders:['Content-Type'],
    //})
    // );



app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to mern stack");
});

app.use('/feedback',Route);



mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listning to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });