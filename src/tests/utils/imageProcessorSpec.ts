import imageProcessor from '../../utils/imageProcessor';

describe('Process Images', () => {
    it('process the image', async () => {
        const image = await imageProcessor('fjord.jpg', '1024', '750');
        expect(image).toBeTruthy();
    });
    it('fails to process the image', async () => {
        const image = await imageProcessor('fjord.jp', '1024', '750');
        expect(image).toBeNull();
    });
});
