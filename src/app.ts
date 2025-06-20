import express, { Application, Request, Response } from 'express';
import { bookRoutes } from './app/controllers/books.controler';



const app : Application = express();

app.use(express.json());
app.use("/api",bookRoutes)







app.get('/', (req:Request, res:Response) => {

    res.send('Hello, Library Management!');
});



export default app;