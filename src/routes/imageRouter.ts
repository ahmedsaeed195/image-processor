import express from 'express';
import ImageController from '../controllers/ImageController';
import verifyCache from '../middleware/caching/verifyCache';
const imageRouter = express.Router();
const imageController = new ImageController();

imageRouter.get('/', verifyCache, imageController.index);

export default imageRouter;
