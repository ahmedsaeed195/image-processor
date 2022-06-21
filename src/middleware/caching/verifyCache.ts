import express from 'express';
import cache from '../../config/node_cache';
//this method only works with GET requests
const verifyCache = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        return res.sendFile(cachedResponse as string);
    }
    return next();
};

export default verifyCache;
