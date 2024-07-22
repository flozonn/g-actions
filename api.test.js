const request = require('supertest');
const app = require('./api');

describe('POST /add', () => {
    it('should return the sum of two integers', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 5, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 8 });
    });

    it('should return a 400 error for invalid input', async () => {
        const response = await request(app)
            .post('/add')
            .send({ a: 'five', b: 3 });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });
});

describe('POST /multiply', () => {
    it('should return the product of two integers', async () => {
        const response = await request(app)
            .post('/multiply')
            .send({ a: 5, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 15 });
    });

    it('should return a 400 error for invalid input', async () => {
        const response = await request(app)
            .post('/multiply')
            .send({ a: 'five', b: 3 });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });

    describe('POST /substract', () => {
        it('should return the substraction of two integers', async () => {
            const response = await request(app)
                .post('/substract')
                .send({ a: 5, b: 3 });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 2 });
        });

        it('should return a 400 error for invalid input', async () => {
            const response = await request(app)
                .post('/substract')
                .send({ a: 'five', b: 3 });
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({ error: 'Invalid input' });
        });
});
