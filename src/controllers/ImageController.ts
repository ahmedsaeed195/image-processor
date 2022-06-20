import express from 'express';
import path from 'path';
import cache from '../config/node_cache';
import imageProcessor from '../utils/imageProcessor';

class ImageController {
    async index(req: express.Request, res: express.Response) {
        try {
            if (!Object.keys(req.query).length) {
                return res.status(200).json({
                    message:
                        'This is the image api, please add a query with the file name and possibly the desired width and height'
                });
            }
            if (!req.query.fileName) {
                return res.status(404).json({
                    message: 'No file name was set'
                });
            }
            const query = {
                fileName: req.query.fileName as unknown as string,
                width: req.query.width as unknown as string,
                height: req.query.height as unknown as string
            };
            const target = await imageProcessor(
                query.fileName,
                query.width,
                query.height
            );
            console.log('Type of target : ' + typeof target);
            if (typeof target === 'object') {
                return res.status(404).json({
                    message: 'Image was not found!',
                    error: target
                });
            }
            const file = path.normalize(
                `${__dirname}/../../assets/thumbs/${target}`
            );
            console.log('before response');
            console.log(cache.has(req.originalUrl));
            cache.set(req.originalUrl, file, 500);
            return res.status(200).sendFile(file);
        } catch (err) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
        }
    }
}
export default ImageController;
