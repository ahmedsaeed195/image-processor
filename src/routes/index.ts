import express from 'express';
import imageRouter from './imageRouter';
const router = express.Router();

router.get(
    '/',
    (req: express.Request, res: express.Response): express.Response => {
        return res.send('Hello');
    }
);
router.use('/image', imageRouter);

export default router;
