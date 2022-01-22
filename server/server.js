import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT|| 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = 
`mongodb+srv://${username}:${password}@kindi.c110p.mongodb.net/kindi?retryWrites=true&w=majority`;
Connection(process.env.MONGODB_URI||URL);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);