import app from '../../server';
import request from 'supertest';

describe('API', () => {
    afterAll(() => {
        app.close();
    });
    describe('GET /api', () => {
        it('responds with 200', (done) => {
            request(app)
                .get('/api')
                .expect(200)
                .end((error: Error) => (error ? done.fail(error) : done()));
        });
    });
    describe('GET /api/image', () => {
        it('responds with 200 and image', (done) => {
            request(app)
                .get('/api/image')
                .expect(200)
                .end((error: Error) => (error ? done.fail(error) : done()));
        });
        it('responds with 404 and no image', (done) => {
            request(app)
                .get('/api/image')
                .expect(404)
                .end((error: Error) => (error ? done.fail(error) : done()));
        });
    });
});
