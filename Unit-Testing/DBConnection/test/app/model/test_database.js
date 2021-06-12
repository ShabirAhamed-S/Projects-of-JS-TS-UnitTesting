const chai = require("chai")
	, expect = chai.expect
	, chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)

const database = require('../../../app/model/database')
	, config = require('../../../config')

database.init(config.test.database)

describe('database.query', () => {
	it('should let me run a query without params', () => {
		return expect(
			database.query('SELECT 5 as value')
		).to.eventually.deep.equal([{ value: 5 }])
	})

	it('should let me run a query with params', () => {
		return expect(
			database.query(
				'SELECT ? as value', [6]
			)
		).to.eventually.deep.equal([{ value: 6 }])
	})
})