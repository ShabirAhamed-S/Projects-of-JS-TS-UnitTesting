const User = require('../src/app');
const axios = require('axios');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

chai.use(sinonChai);

let user;

describe('the User Class', () => {
    const sandbox = sinon.createSandbox();

    beforeEach(() => {
        user = new User('ShabirAhamed-S');
    });

    afterEach(() => {
        sandbox.restore();
    });

    // We can add nested blocks for different tests
    describe("Test1", () => {
        test('should get the user id', (done) => {
            const getStub = sandbox.stub(axios, 'get').resolves({ data: { id: 1234 } });

            user.getUserId()
                .then(result => {
                    expect(result).to.be.a('number');
                    expect(result).to.be.eq(1234);
                    expect(getStub).to.have.been.calledOnce;
                    // expect(getStub).to.be.calledTwice; error
                    expect(getStub).to.have.been.calledWith('https://api.github.com/users/ShabirAhamed-S');
                    done();
                })
                .catch(done);
        });
    });
    
    // We can add nested blocks for different tests
    describe("Test1", () => {
        test('should return a repository if the user can view repos', (done) => {
            const getStub = sandbox.stub(axios, 'get').resolves({ data: ['repo1', 'repo2', 'repo3'] });
            sandbox.stub(user, 'canViewRepos').value(true);

            user.getUserRepo(2)
                .then(response => {
                    expect(response).to.be.eq('repo2');
                    expect(getStub).to.have.been.calledOnceWith('https://api.github.com/users/ShabirAhamed-S/repos');
                    done();
                })
                .catch(done);
        });
    });

    // We can add nested blocks for different tests
    describe("Test1", () => {
        test('should return an error if the user cannot view repos', (done) => {
            const getStub = sandbox.stub(axios, 'get');
            sandbox.stub(user, 'canViewRepos').value(false);

            user.getUserRepo(2)
                .catch(error => {
                    expect(error).to.be.eq('Cannot view repos');
                    expect(getStub).to.not.have.been.called;
                    done();
                });
        });
    });
});

// const expect = require('chai').expect;

// describe("Testing with chai", () => {
//     it("It return 4 when adding 2 + 2", () => {
//       expect(2 + 2).to.equal(4);
//     });

//     it("It return string value as true", () => {
//       expect('a' == 'a').to.be.true;
//     });

//     it("Are both the sentences matching", () => {
//       expect("This is working").to.equal('This is working');
//     });
//  });

// describe("Testing with Jest", () => {
//     test("Addition", () => {
//       const sum = 2 + 3;
//       const expectedResult = 5;
//       expect(sum).toEqual(expectedResult);
//     });

//     // Jest also allows a test to run multiple
//     // times using different values
//     test.each([['a', 'b', 'ab'], [-1, 1, 0], [3, 2, 5]])(
//     '%s + %s equals %s', (a, b, expectedResult) => {
//       expect(a + b).toEqual(expectedResult);
//     });
//   });

// describe("Test", function () {
//     it("Addition", function () {
//         var sum = 2 + 3;
//         expect(sum).toEqual(5);
//     });
// });