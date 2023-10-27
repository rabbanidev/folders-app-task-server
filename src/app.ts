import cors from 'cors';
import express, { Application } from 'express';
import notFoundHandler from './app/middlewares/notFoundHandler';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import Routes from './app/routes';

const app: Application = express();

// cors use
app.use(cors());

// parser use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Aplication routes
app.use('/api/v1', Routes);

// Root routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Wellcome to the server...' });
});

// Global Error Hnadler
app.use(globalErrorHandler);

// Not Found Handler
app.use(notFoundHandler);

export default app;
