import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';

export const numArr = [3, 4, 5, 6];
export const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// 1
const arrSum = arrays.addArr(numArr);
// 2
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
//3
const five = parseInt('5');

//4
console.log(arrays.cut3(mixArr));
//5
console.log(numbers.sum(arrSum, myNum));
//6
console.log(strings.capitalize('the quick brown fox'));
//7
console.log(numbers.multiply(five, 8));
//8
console.log(arrays.lgNum(mixArr));

// Test function
export const myFunc = (num: number) => {
  return num * num;
};

