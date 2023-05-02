// test/Box.proxy.js
// Load dependencies
const { expect } = require('chai');
// require("@nomiclabs/hardhat-ethers");
// require('@openzeppelin/hardhat-upgrades');

let Box;
let box;
 
// Start test block
describe('Box (proxy)', function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});  //proxy contract
  });
 
  // Test case
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42');         //testing it in the storage of proxy, not the implementation.
                                                                    //The delegate call sends the call to the implementation. 
  });
});