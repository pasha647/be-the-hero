const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ongs', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () =>{
        await connection.destroy()
    })


    it('shoud be able to create an ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: 'APAD',
            email: 'bruno-albino@hotmail.com',
            whatsapp: '19988255375',
            city: 'Campinas',
            uf: 'SP'
        })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8)
    })
})