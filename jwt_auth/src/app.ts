require('dotenv').config();
import express, { Request, Response } from 'express';
import config from 'config';
import connectDB from './utils/connectDB';

const app = express();

app.get('/', (req: Request, res:  Response) => {
    res.send('hhhh')
})

const port = config.get<Number>('port');
app.listen(port, () => {    
  console.log(`Server started on port: ${port}`);
});