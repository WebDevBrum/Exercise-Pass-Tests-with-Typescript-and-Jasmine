"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var arrays_js_1 = __importDefault(require("../utilities/arrays.js"));
var numbers_js_1 = __importDefault(require("../utilities/numbers.js"));
var strings_js_1 = __importDefault(require("../utilities/strings.js"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var addArr = arrays_js_1.default.addArr, lgNum = arrays_js_1.default.lgNum, cut3 = arrays_js_1.default.cut3;
var multiply = numbers_js_1.default.multiply, sum = numbers_js_1.default.sum;
var concat = strings_js_1.default.concat, capitalize = strings_js_1.default.capitalize;
// Test of functionality
it('expect myFunc(5) to equal 25', function () {
    expect(index_1.myFunc(5)).toEqual(25);
});
//arrays.concatArr  ,
//arrays.addArr  ,
it('expect addArr(numArr) to equal 18', function () {
    expect(addArr(numArr)).toEqual(18);
});
//arrays.lgNum  ,
it('expect lgNum(numArr) to equal 6', function () {
    expect(lgNum(numArr)).toEqual(6);
});
//arrays.cut3   ,
it('expect cut3(numArr) to equal [3,4,6]', function () {
    expect(cut3(numArr)).toEqual([3, 4, 6]);
});
//numbers.multiply  ,
it('expect multiply(4, 5) to be greater than 19', function () {
    expect(multiply(4, 5)).toBeGreaterThan(19);
});
//numbers.sum   ,
it('expect sum(4, 5) to be defined', function () {
    expect(sum(4, 5)).toBeDefined();
});
//strings.concat  ,
it('expect concat(wordArr[1], wordArr[2]) to be truthy', function () {
    expect(concat(wordArr[0], wordArr[1])).toBeTruthy();
});
//strings.capitalize   ,  
it('expect captitalize(jenny davies) to equal Jenny Davies', function () {
    expect(capitalize('jenny davies')).toEqual('Jenny Davies');
});
