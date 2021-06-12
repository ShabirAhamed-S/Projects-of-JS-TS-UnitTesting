const log = console.log
const _ = require('lodash')
const chai = require('chai')
const chaiAsPromised = require("chai-as-promised")

chai.should()
chai.use(chaiAsPromised)

const {
    getPerson,
    getAdventureParty,
    getDevilPunkParty,
    getSuccessResponse,
    getPartyTypeFromRequest,
    PARTY_TYPE_ADVENTURE,
    getPeopleResponseFromRequestType
} = require('../index')

describe('#index', () => {
    describe('#getPerson', () => {
        it('should return object', () => {
            const person = getPerson('first name', 'last name', 'character class')
            _.isObject(person).should.be.true
        })

        it('should have first name', () => {
            const person = getPerson('first name', 'last name', 'character class')
            person.firstName.should.equal('first name')
        })
    })

    describe('#getAdventureParty', () => {
        let peeps
        beforeEach(() => {
            peeps = getAdventureParty()
        })

        it('should give an Array back', () => {
            _.isArray(peeps).should.be.true
        })

        it('should have 3 people', () => {
            peeps.should.have.lengthOf(3)
        })

        it('shabir should be a Clan', () => {
            const shabir = _.chain(peeps)
                .filter(p => p.firstName === 'shabir')
                .first()
                .value()
            shabir.characterClass.should.equal('Clan')
        })
    })

    describe('#getDevilPunkParty', () => {
        let peeps
        beforeEach(() => {
            peeps = getDevilPunkParty()
        })

        it('should give an Array back', () => {
            _.isArray(peeps).should.be.true
        })

        it('should have 3 people', () => {
            peeps.should.have.lengthOf(3)
        })

        it('shabir should be an Techno', () => {
            const shabir = _.chain(peeps)
                .filter(p => p.firstName === 'shabir')
                .first()
                .value()
            shabir.characterClass.should.equal('Techno')
        })
    })

    describe('#getSuccessResponse', () => {
        it('should give a successful result', () => {
            getSuccessResponse().result.should.be.true
        })

        it('should have a data property if we pass data in', () => {
            const mock = {}
            getSuccessResponse(mock).data.should.equal(mock)
        })
    })

    describe('#getPartyTypeFromRequest', () => {
        it('should give adventure for Adventure', () => {
            getPartyTypeFromRequest({
                params: {
                    party: 'Adventure'
                }
            }).should.equal(PARTY_TYPE_ADVENTURE)
        })
    })

    describe('#getPeopleResponseFromRequestType', () => {
        describe('for adventure', () => {
            let peeps
            beforeEach(() => {
                const response = getPeopleResponseFromRequestType({
                    params: {
                        party: 'Adventure'
                    }
                })
                peeps = _.get(response, 'data')
            })

            it('should return an Array', () => {
                _.isArray(peeps).should.be.true
            })

            it('shabir should be a Clan', () => {
                const shabir = _.chain(peeps)
                    .filter(p => p.firstName === 'shabir')
                    .first()
                    .value()
                shabir.characterClass.should.equal('Clan')
            })
        })

        describe('for devil punk', () => {
            let peeps
            beforeEach(() => {
                const response = getPeopleResponseFromRequestType({
                    params: {
                        party: 'DevilPunk'
                    }
                })
                peeps = _.get(response, 'data')
            })

            it('should return an Array', () => {
                _.isArray(peeps).should.be.true
            })

            it('shabir should be an Techno', () => {
                const shabir = _.chain(peeps)
                    .filter(p => p.firstName === 'shabir')
                    .first()
                    .value()
                shabir.characterClass.should.equal('Techno')
            })
        })
    })
})

// verify you're legit in Node 7.6.0>
describe('#async await test', () => {
    it('works', async () => {
        const Ned = await Promise.resolve('chicken dinner')
        Ned.should.equal('chicken dinner')
    })

    it('Won', async () => {
        log('chicken dinner')
    })
})