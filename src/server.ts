import express from 'express';
import routes from './routes';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Server is Running');
});

const server = app.listen(PORT, (): void =>
    console.log(`Listening on port ${PORT}`)
);

export default server;
