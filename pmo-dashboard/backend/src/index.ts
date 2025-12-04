import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

import dataImportRoutes from './routes/dataImportRoutes';
import jiraRoutes from './routes/jiraRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import authRoutes from './routes/authRoutes';

app.use('/api/import', dataImportRoutes);
app.use('/api/jira', jiraRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('PMO Analytics Dashboard API');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
