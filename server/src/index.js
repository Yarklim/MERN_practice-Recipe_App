import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from './routes/user.js';
import { recipesRouter } from './routes/recipes.js';

dotenv.config();

const { MONGO__PASSWORD } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect(
  `mongodb+srv://yarklim:${MONGO__PASSWORD}@recipes.amcnjc4.mongodb.net/recipes?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log('Server running'));
