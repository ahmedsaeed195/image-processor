import express from 'express';

class ImageController {
    async index(req: express.Request, res: express.Response) {
        try {
            return res.status(200).json({
                message: 'Ok'
            });
        } catch (err) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: err
            });
        }
    }
}
export default new ImageController();
