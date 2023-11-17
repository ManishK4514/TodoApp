import express from 'express';
import { connection } from "./database/db.js";
import  { todorouter } from "./routes/TodoRoute.js"
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(todorouter);

app.listen(PORT, async()=> {
  try {
    await connection
  }
  catch(error) {
    console.log(error);
  }
  console.log(`Listening on port: ${PORT}`);
});
