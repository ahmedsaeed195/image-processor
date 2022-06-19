import express from 'express';
import ImageController from '../controllers/ImageController';
const imageRouter = express.Router();

imageRouter.get('/image', ImageController.index);

export default imageRouter;
