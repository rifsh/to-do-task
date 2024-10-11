import express, { Express, NextFunction, Request, Response } from 'express';
import router from './routes/todo.routes';
import cors from 'cors';

const app: Express = express();

//to parse json response
app.use(express.json());
app.use(cors())

//route
app.use('/api/v1/to-do', router);

//error handling middleware
app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

export default app;