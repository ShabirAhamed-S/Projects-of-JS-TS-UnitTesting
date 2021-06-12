require('dotenv/config')

const restify = require('restify')
const _ = require('lodash')

const getPerson = (firstName, lastName, characterClass) => {

    return {
        firstName,
        lastName,
        characterClass
    }
}

const getAdventureParty = () => {

    return [
        getPerson('shabir', 'ahamed', 'Clan'),
        getPerson('salman', 'abuthahir', 'Thief'),
        getPerson('ameer', 'suhail', 'White Devil')
    ]
}

const getDevilPunkParty = () => {

    return [
        getPerson('shabir', 'ahamed', 'Techno'),
        getPerson('salman', 'abuthahir', 'Troublershooter'),
        getPerson('ameer', 'suhail', 'PUBG')
    ]
}

const getSuccessResponse = (data) => {

    return {
        result: true,
        data
    }
}

const PARTY_TYPE_ADVENTURE = 'adventure'
const PARTY_TYPE_DEVIL_PUNK = 'devilpunk'
const PARTY_TYPE_UNKNOWN = 'unknown'

const acceptablePartyTypes = {
    [PARTY_TYPE_ADVENTURE]: PARTY_TYPE_ADVENTURE,
    [PARTY_TYPE_DEVIL_PUNK]: PARTY_TYPE_DEVIL_PUNK,
    [PARTY_TYPE_UNKNOWN]: PARTY_TYPE_UNKNOWN
}

const partyTypeFactoryMap = {
    [PARTY_TYPE_ADVENTURE]: getAdventureParty,
    [PARTY_TYPE_DEVIL_PUNK]: getDevilPunkParty,
    [PARTY_TYPE_UNKNOWN]: getAdventureParty
}

const getPartyTypeFromRequest = (req) => {
    let result = _.get(req, 'params.party', PARTY_TYPE_UNKNOWN)
    result = result.toLowerCase()

    return _.get(acceptablePartyTypes, result, PARTY_TYPE_UNKNOWN)
}

const getPeopleResponseFromRequestType = (req) => {
    const partyType = getPartyTypeFromRequest(req)
    const partyMakerFunction = _.get(partyTypeFactoryMap, partyType)
    const people = partyMakerFunction()
    const response = getSuccessResponse(people)

    return response
}

const startServer = () => {

    return new Promise((success, failure) => {
        const server = restify.createServer()
        server.use(restify.queryParser())

        server.get('/', (req, res) => {
            res.send("Welcome to ping pong data")
        })

        server.get('/api', (req, res) => {
            res.send("lets type - localhost:3000/api/ping or localhost:3000/api/data")
        })

        server.get('/api/data', (req, res) => {
            const response = getPeopleResponseFromRequestType(req)
            res.send(response)
        })
        server.get('/api/ping', (req, res) => res.send(getSuccessResponse('pong')))

        port = process.env.PORT

        server.listen(port, () => {
            console.log(`' Lets Play the Game' server is listening at ${port}`)
            success(server)
        })
    })
}

module.exports = {
    getPerson,
    getAdventureParty,
    getDevilPunkParty,
    getSuccessResponse,
    PARTY_TYPE_ADVENTURE,
    PARTY_TYPE_DEVIL_PUNK,
    PARTY_TYPE_UNKNOWN,
    acceptablePartyTypes,
    partyTypeFactoryMap,
    getPartyTypeFromRequest,
    getPeopleResponseFromRequestType,
    startServer
}

if (require.main === module) {
    startServer()
}