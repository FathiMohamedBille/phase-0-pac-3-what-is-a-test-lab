const { expect } = require("chai");

const name = "Susan";
const height = 39;


const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
describe('Number Validation', function() { it('height should be greater than 0 and less than 40', function() { expect(height).to.be.greaterThan(0); expect(height).to.be.lessThan(40); }); it('message should be correct', function() { expect(message).to.equal('Susan is 39 inches tall'); }); });
