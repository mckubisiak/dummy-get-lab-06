const  app  = require('../server')
const supertest = require('supertest')
const request = supertest(app)

it('get all the marbles data', async() => {
    marbles = [ 
    
        {
        id: 1,
        name: 'Crack Attack',
        image: 'crackattack.png',
        description: 'Crack attack breaks other marbles in half',
        category: 'rare',
        price: 189.00,
        cost: 16.00
    },
    
    {
        id: 2,
        name: 'Basic Blue',
        image: 'basicblue.png',
        description: 'Baisc blue has some boring swirls',
        category: 'common',
        price: 6.50,
        cost: 0.25
    },
    
    { 
        id: 3,
        name: 'Windy',
        image: 'windy.png',
        description: 'Swwoooosh',
        category: 'uncommon',
        price: 15.00,
        cost: 3.00
    },
    
    {
        id: 4,
        name: 'catyeye',
        image: 'catyeye.png',
        description: 'This ones just gonna knock your stuff down.',
        category: 'common',
        price: 50.00,
        cost: 4.25 
    },
    
    { 
        id: 5,
        name: 'Neuron',
        image: 'neuron.png',
        description: 'Swwoooosh',
        category: 'rare',
        price: 250.00,
        cost: 45.00
    }
    ]
    const response = await request.get('/marble')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(marbles)
})

it('get a singular marbles data', async() => {

    const response = await request.get('/marble/2')
    
    expect(response.status).toBe(200)
    expect(response.body.name).toEqual('Basic Blue')
})