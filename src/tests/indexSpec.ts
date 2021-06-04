import { myFunc } from "../index";
import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

const { addArr, lgNum, cut3 } = arrays;
const { multiply, sum } = numbers;
const { concat, capitalize } = strings;

// Test of functionality
it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});


//arrays.concatArr  ,



//arrays.addArr  ,
it('expect addArr(numArr) to equal 18', () => {
  expect(addArr(numArr)).toEqual(18);
});

//arrays.lgNum  ,
it('expect lgNum(numArr) to equal 6', () => {
  expect(lgNum(numArr)).toEqual(6);
});


//arrays.cut3   ,
it('expect cut3(numArr) to equal [3,4,6]', () => {
  expect(cut3(numArr)).toEqual([3, 4, 6]);
});


//numbers.multiply  ,


it('expect multiply(4, 5) to be greater than 19', () => {
  expect(multiply(4, 5)).toBeGreaterThan(19);
});


//numbers.sum   ,

it('expect sum(4, 5) to be defined', () => {
  expect(sum(4, 5)).toBeDefined();
});


//strings.concat  ,

it('expect concat(wordArr[1], wordArr[2]) to be truthy', () => {
  expect(concat(wordArr[0], wordArr[1])).toBeTruthy();
});


//strings.capitalize   ,  

it('expect captitalize(jenny davies) to equal Jenny Davies', () => {
  expect(capitalize('jenny davies')).toEqual('Jenny Davies');
});

