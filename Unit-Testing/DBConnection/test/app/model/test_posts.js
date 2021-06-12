const chai = require("chai")
	, expect = chai.expect
	, chaiAsPromised = require("chai-as-promised")
	, post = require('../../../app/model/post')
	, database = require('../../../app/model/database')
	, config = require('../../../config')
const { after } = require("mocha")

chai.use(chaiAsPromised)

describe('post', () => {
	before(() => {
		// Drop post If post exists
		post.drop()
		database.init(config.test.database)
		return post.createTable()
	})

	beforeEach(() => {
		return post.deleteAll()
	})

	after(() => {
		return post.drop()
	})

	describe('#add', () => {
		it('should add a post', () => {
			return expect(post.add({
				title: 'Test',
				body: 'Hello',
				slug: 'test'

			})).to.eventually.equal(1)
		})
	})

	describe('#remove', () => {
		it('should remove a post', () => {
			return expect(
				post.add({
					title: 'Test',
					body: 'Hello',
					slug: 'test'
				}).then((id) => {
					return post.remove(id)
				})
			).to.eventually.equal(1)
		})
	})

	describe('#getAll', () => {
		it('should get all the post', () => {
			return expect(
				post.add({
					title: 'Test',
					body: 'Hello',
					slug: 'test',
					posted_at: new Date('2015-09-01')
				}).then(() => {
					return post.add({
						title: 'Test 2',
						body: 'Another',
						slug: 'test2',
						posted_at: new Date('2015-10-01')
					})
				}).then(() => {
					return post.getAll()
				})
			).to.eventually.deep.equal([
				{
					id: 1,
					title: 'Test',
					body: 'Hello',
					slug: 'test',
					posted_at: new Date('2015-09-01')
				},
				{
					id: 2,
					title: 'Test 2',
					body: 'Another',
					slug: 'test2',
					posted_at: new Date('2015-10-01')
				}
			])
		})
	})

	describe('#getBySlug', () => {
		it('should return a post from the slug', () => {
			return expect(
				post.add({
					title: 'Test',
					body: 'Hello',
					slug: 'test',
					posted_at: new Date('2015-09-01')
				}).then(() => {
					return post.getBySlug('test')
				})
			).to.eventually.deep.equal({
				id: 1,
				title: 'Test',
				body: 'Hello',
				slug: 'test',
				posted_at: new Date('2015-09-01')
			})
		})
	})

	describe('#update', () => {
		it('should update a post', () => {
			return expect(
				post.add({
					title: 'Test',
					body: 'Hello',
					slug: 'test'
				}).then((id) => {
					return post.update(id, {
						body: 'New body'
					})
				}).then(() => {
					return post.getBySlug('test')
				}).then((post) => {
					return post.body
				})
			).to.eventually.equal('New body')
		})
	})
})
