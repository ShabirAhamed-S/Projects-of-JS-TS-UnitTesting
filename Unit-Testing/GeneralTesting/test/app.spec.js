// // Requiring modules 
const { assert } = require('chai')
const chai = require('chai')
const { verify } = require('sinon')
const sinon = require('sinon')

// Requiring Testclass from roboTesting.js
const TestClass = require('../../../../Trello_Task/roboTesting')

// Use TestClass as testClass
const testClass = new TestClass()
// expect requiring expect property from chai
const expect = chai.expect
// should requiring should property from chai
const should = chai.should()

// Testing TestClass
describe('TestingClass', () => {
  // Testing chai
  describe('Test Robot with Chai', () => {
    // // Testing should property
    it('RobotSteps Should style', (done) => {
      should.exist(testClass.robotSteps(20, 40));
      done()
    })
    // // Testing expect property
    it('RobotSteps Expect style', (done) => {
      expect(testClass.robotSteps(20, 40)).to.be.a('array');
      done()
    })
	// // Testing assert property
    it('RobotSteps Assert style', (done) => {
      assert.typeOf(testClass.robotSteps(20, 40), 'array');
      done()
    })
  })

  // Testing sinon
  describe('Test Sinon', () => {
    // Testing spy
    it('Test Binary with spy', () => {
      let spy = sinon.spy(testClass, 'binaryClock')
      var time = '12:39:09'
      testClass.callFun(time)
      // sinon.assert.calledOnce(spy)
      expect(spy.calledOnce).to.be.true
      expect(spy.calledWith('12:39:09')).to.be.true
    })
    it('Callback with spy', () => {
      let callback = sinon.spy()
      testClass.callBack(callback)
      expect(callback.calledOnce).to.be.true
    })

    // Testing mock
    it('Test mock Print', () => {
      let mock = sinon.mock(testClass)
      let expectation = mock.expects("print")
      expectation.exactly(1)
      testClass.callAn(9)
      mock.verify()
    })

    // Testing stub
    it('Test splitObject with Stub', () => {
      let stub = sinon.stub(testClass, 'isProductSum')
      stub
        .withArgs(10, 0)
        .onFirstCall()
        .returns(0)
        .onSecondCall()
        .returns(10)
        expect(testClass.isProductSum(10,0)).to.be.equal(0)
        expect(testClass.isProductSum(10,0)).to.be.equal(10)
    })
  })
})
