"use strict";
exports.__esModule = true;
var randsum_1 = require("randsum");
// Overloading Example
// const numberResult = randsum(20)
// const stringResult = randsum('20')
// const objResult = randsum({ sides: 20 })
// const foo = objResult + 4
// console.log(`Number: ${numberResult}`)
// console.log(`String: ${stringResult}`)
// console.log(`Object: ${objResult}`)
// const detailedNumberResult = randsum(20, { detailed: true })
// const detailedStringResult = randsum('20', { detailed: true })
// const detailedObjResult = randsum({ sides: 20, detailed: true })
// console.log(`Detailed Number`)
// console.log(detailedNumberResult)
// console.log(`Detailed String`)
// console.log(detailedStringResult)
// console.log(`Detailed Object`)
// console.log(detailedObjResult)
// Conditional Example
// const stringConditional = randsum('20', { detailed: true })
// const numConditional = randsum(20, { detailed: true })
// console.log(
//   'String Conditional sides is a ' +
//     typeof stringConditional.rollParameters.sides
// )
// console.log(
//   'Num Conditional sides is a ' + typeof numConditional.rollParameters.sides
// )
// const stringObjConditional = randsum({ sides: '20', detailed: true })
// console.log(
//   'String Object Conditional sides is a ' +
//     typeof stringObjConditional.rollParameters.sides
// )
// Template String
// const bad = randsum('twenty')
// const cool = randsum('4')
// const alsoBad = randsum('4d')
// const stillBad = randsum('4ddd20')
var good = (0, randsum_1["default"])('20');
var alsoGood = (0, randsum_1["default"])('4D20');
var reallyGood = (0, randsum_1["default"])('4d20D{>15,<5}H', { detailed: true });
console.log(reallyGood);
