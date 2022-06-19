import express from 'express';
import imageRouter from './imageRouter';
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Hello');
});
router.get('/image', imageRouter);

export default router;
