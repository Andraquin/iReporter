// requiring express
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import redFlagRoutes from './routes/red-flag';
import authRoutes from './routes/auth';
import interventionRoutes from './routes/intervention';
import indexRoutes from './routes/index';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/api/v1', indexRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', redFlagRoutes);
app.use('/api/v1', interventionRoutes);


app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: '404 Page Not Found',
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000');
});

export default app;
