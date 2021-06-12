require('dotenv/config')

const _ = require('lodash')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const restify = require('restify')

const port = process.env.PORT
const host = process.env.HOT

chai.should()

const {
    startServer
} = require('../index')
//const { set } = require('lodash')

const get = (client, url) => {

    return new Promise((success, failure) => {
        client.get(url, (err, req, res, obj) => {
            if (err) {
                return failure(err)
            }
            return success(obj)
        })
    })
}

describe("#index integration", () => {
    let server
    let client
    let getURL
    let ping
    let getAdventurers
    let getDevilPunk

    before((done) => {
        client = restify.createJsonClient({
            url: `http://${host}:${port}`
        })
        getURL = _.partial(get, client)
        ping = _.partial(getURL, '/api/ping')
        getAdventurers = _.partial(getURL, '/api/data?party=adventurers')
        getDevilPunk = _.partial(getURL, '/api/data?party=devilpunk')
        startServer()
            .then((result) => {
                server = result
                done()
            })
            .catch(done)
    })

    after(() => {
        client.close()
        server.close()
    })

    describe('#GET api/ping', () => {
        it('should respond', () => {
            return ping().should.eventually.be.fullfilled
        })

        it('should get a pong back', () => {
            // {result: true, data: 'pong'}
            return ping().should.eventually.have.property('data', 'pong')
        })

        it('should get a pong back via async/await', async () => {
            // const response = await ping()
            // response.data.should.equal('pong')
            (await ping()).data.should.equal('pong')
        })
    })

    it('#GET all should be fine via await', async () => {
        const pong = await ping()
        const party = await getAdventurers()
        const crew = await getDevilPunk()
        const allAreObjects = _.every([pong, party, crew], o => _.isObject(o))
        allAreObjects.should.be.true

        return ping()
            .then((results) => {
                _.isObject(results).should.be.true
                return getAdventurers()
            })
            .then((results) => {
                _.isObject(results).should.be.true
                return getDevilPunk()
            })
            .then((results) => {
                _.isObject(results).should.be.true
            })
    })
})