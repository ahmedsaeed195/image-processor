import app from '../server';
import request from 'supertest';

describe('Server', () => {
    afterAll(() => {
        app.close();
    });
    it('is running', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((error: Error) => (error ? done.fail(error) : done()));
    });
});
