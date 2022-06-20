import express from 'express';
import ImageController from '../controllers/ImageController';
import { checkCache } from '../middleware/caching/verifyCache';
const imageRouter = express.Router();
const imageController = new ImageController();

imageRouter.get('/', checkCache, imageController.index);

export default imageRouter;
