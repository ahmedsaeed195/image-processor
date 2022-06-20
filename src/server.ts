import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//on server start, check if the thumbs folder exist, and create if missing
const dir = 'assets/thumbs';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Server is Running');
});

const server = app.listen(PORT, (): void =>
    console.log(`Listening on port ${PORT}`)
);

export default server;
