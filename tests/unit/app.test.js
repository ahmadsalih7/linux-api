const request = require('supertest')
const app = require('../../app')

describe("GET home page", ()=> {
    it("should return healthy", async ()=> {
        const res = await request(app).get('/').expect(200)
        expect(res.body).toMatchObject({"healthy": true})
    })
})
