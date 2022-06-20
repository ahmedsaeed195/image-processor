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
        it('responds with 200 and no image', (done) => {
            request(app)
                .get('/api/image')
                .end((error: Error, res) => {
                    if (error) {
                        done.fail(error);
                    }
                    expect(res.status).toBe(200);
                    expect(res.headers['content-type']).not.toMatch('image');
                    done();
                });
        });
        it('responds with 200 and image', (done) => {
            request(app)
                .get('/api/image/?fileName=fjord.jpg')
                .end((error: Error, res) => {
                    if (error) {
                        done.fail(error);
                    }
                    expect(res.status).toBe(200);
                    expect(res.headers['content-type']).toMatch('image');
                    done();
                });
        });
        it('responds with 400 and no image', (done) => {
            request(app)
                .get('/api/image?width=25')
                .expect(400)
                .end((error: Error) => (error ? done.fail(error) : done()));
        });
    });
});
