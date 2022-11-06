const { web } = require("webpack");

/*
 * @Author: daffodilma daffodilma@163.com
 * @Date: 2022-11-04 10:10:19
 * @LastEditors: daffodilma daffodilma@163.com
 * @LastEditTime: 2022-11-06 10:41:10
 * @FilePath: \chapter2\migrations\2_deploy_contracts.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting,['Rama','Nick','Jose'].map(x => web3.utils.asciiToHex(x)),{gas:50000});
};
