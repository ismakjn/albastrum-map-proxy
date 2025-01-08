import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes/index.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3000, 'localhost', () => {
    console.log('Listening on port ' + process.env.PORT || 3000);
    console.log(process.env.GOOGLE_PLACE_ENDPOINT)
})