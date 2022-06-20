import express from 'express';
import cache from '../../config/node_cache';
//this method only works with GET requests
export const checkCache = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    console.log('inside cache');
    const key = req.originalUrl;
    console.log(key);
    const cachedResponse = cache.get(key);
    console.log(cachedResponse);
    if (cachedResponse) {
        console.log('Found Cache');
        return res.sendFile(cachedResponse as string);
    }
    console.log('Did not find Cache');
    return next();
};
