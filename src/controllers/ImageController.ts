import express from 'express';
import path from 'path';

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
            const file = path.normalize(
                `${__dirname}/../../assets/images/${req.query.fileName}`
            );
            return res.status(200).sendFile(file);
        } catch (err) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
        }
    }
}
export default new ImageController();
