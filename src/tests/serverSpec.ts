import app from '../server';
import request from 'supertest';
describe('Server', () => {
    it('is running', (done) => {
        request(app)
            .get('/api')
            .expect(200)
            .end((error: Error) => (error ? done.fail(error) : done()));
    });
});
