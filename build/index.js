"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = exports.wordArr = exports.numArr = void 0;
var arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
var numbers_js_1 = __importDefault(require("./utilities/numbers.js"));
var strings_js_1 = __importDefault(require("./utilities/strings.js"));
exports.numArr = [3, 4, 5, 6];
exports.wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// 1
var arrSum = arrays_js_1.default.addArr(exports.numArr);
// 2
var mixArr = arrays_js_1.default.concatArr(exports.numArr, exports.wordArr);
var myNum = '15' % 2;
//3
var five = parseInt('5');
//4
console.log(arrays_js_1.default.cut3(mixArr));
//5
console.log(numbers_js_1.default.sum(arrSum, myNum));
//6
console.log(strings_js_1.default.capitalize('the quick brown fox'));
//7
console.log(numbers_js_1.default.multiply(five, 8));
//8
console.log(arrays_js_1.default.lgNum(mixArr));
// Test function
var myFunc = function (num) {
    return num * num;
};
exports.myFunc = myFunc;
