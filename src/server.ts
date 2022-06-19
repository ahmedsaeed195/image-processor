import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/api', (req, res) => {
    return res.send('Hello');
});

app.listen(PORT, (): void => console.log(`Listening on port ${PORT}`));

export default app;
