
/**************************************
List of assert methods - See  http://chaijs.com/api/assert/#method_assert
                        for the full list
fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/

// Unit Testing with Mocha and Chai

const assert = require('chai').assert;
const R = require('../app');

describe('Field test for killer robot', function () {
  let robot = R;

  it('check that robot talks strings', function () {
    assert.isString(robot.talk(), 'string');
  })

  it('check that robot uses allowed phrases', function () {
    for (let i = 0; i < 2; i++) {
      let phrase = robot.talk();
      assert.oneOf(phrase, robot.phrases);
    }
  });

  it('make sure robot has ammo to fire', function () {
    for (let i = 0; i < 7; i++) {
      robot.fireCannon();
      assert.isAtLeast(robot.ammo, 0);
    }
  })
})