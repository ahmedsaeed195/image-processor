import sharp from 'sharp';
import path from 'path';

const imageProcessor = async (
    fileName: string,
    width: string,
    height: string
): Promise<string | unknown> => {
    try {
        const filePathLink = path.normalize('assets/images/');
        const fileOutPathLink = path.normalize('assets/thumbs/');
        const image = sharp(filePathLink + fileName);
        const metaData = await image.metadata();
        console.log('inside processor');
        const dimensions = {
            width: parseInt(width) || metaData.width,
            height: parseInt(height) || metaData.height
        };

        const imageTarget = `${dimensions.width}-${dimensions.height}-${fileName}`;
        const info = await image
            .resize({ width: dimensions.width, height: dimensions.height })
            .jpeg()
            .toFile(fileOutPathLink + imageTarget);
        console.log(info);
        return imageTarget;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default imageProcessor;
