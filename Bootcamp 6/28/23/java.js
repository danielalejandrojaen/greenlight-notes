/*
What is unit testing?

unit testing is testing bits of your code in isolation with test code. The immediate advantages are
- Running the test becomes automateable & repeatable
-You can test at a much more granular level than point-and-click testing via a GUI


if ('should return the length of the input string', function() {
    expect(length('hello')).to.equal(5);
    expect(length('you)).to.equal(3);
});




Lets break it down

1. it() => accepts two arguments. A string && a callback function

2. The string we passed into it is 'should return the length of the input string'




Test Case vs. Test Suite

describe("#range", function() {
    it('should return a range between the two input integers', function() {
        expect(range(1, 5)).to.eql([1, 2, 3, 4, 5]);
    });
    it('should return a reversed range between the two input inegers, function() {
        expect(range(5, 1)).to.eql([5, 4, 3, 2, 1]);
    });
});


developers wil sometimes refer to a single unit test as a test case. these test
cases are then packaged inside a test suite that describe a bunch of unit test that
are related to one function

Organizing test files

-It is good practice to organize tests away from your actual code.
-Our spec folder has all out tests for each respective project
-Then each spec.js file correlates to each specific function its testing

Test-Driven-Development (TDD for short)

TDD brings several advantages
1. You dont write speculative "i just need to pass this to pass the tests" code
--just enough to make the tests pass

2. Your actual code is always be covered by test

3. By writing the test first, you're forced into thinking about how you want to call the code, which usually improves the design in the long run



Assert && expect

-The syntax in this project will be different from the test 
files that we saw but the expectations are the same

const foo = 'bar'
                              addtl string to descr what testing
                                 |
assert.equal(foo, 'bar', 'foo equal `bar`');

expect(foo).to.equal('bar);
