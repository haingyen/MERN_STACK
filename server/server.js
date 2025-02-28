import express from 'express';
// import cookieParse from 'cookie-parser';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cookieParse());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/blog', blogRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Hai Nguyen!');
});

app.listen(PORT, async() => {
    console.log(`Server running on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;