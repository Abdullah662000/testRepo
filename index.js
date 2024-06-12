//===================================================================//=============================================================
////////////////////////////////////////////////////////////Q1 descending sort/////////////////////////////////////////////////////
// let testarray = [3, 2, 7, 4, 6, 9];
// const merge = (leftArray, rightArray) => {
//   let sortedArray = [];
//   while (leftArray.length > 0 && rightArray.length > 0) {
//     if (leftArray[0] > rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// };
// const mergSort = (array) => {
//   if (array.length <= 1) return array;
//   let mid = Math.floor(array.length / 2);
//   let leftArray = mergSort(array.slice(0, mid));
//   let rightArray = mergSort(array.slice(mid));
//   return merge(leftArray, rightArray);
// };
// console.log(mergSort(testarray));
//===================================================================//=============================================================
//////////////////////////////////////////////////////////// Q2 palindrome check /////////////////////////////////////////////////////
// const check_palindrome = (str) => {
//   let j = str.length - 1;
//   for (let i = 0; i < j / 2; i++) {
//     let start = str[i];
//     let end = str[j - i];
//     if (start != end) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(check_palindrome("madamm"));
//===================================================================//=============================================================
//////////////////////////////////////////////////////// Q3 sum of two larges numbers ///////////////////////////////////////////////
// let testArray = [3, 7, 1, 5, 11, 19];
// let sortedArray = testArray.sort((a, b) => a - b);
// let sum =
//   sortedArray[sortedArray.length - 2] + sortedArray[sortedArray.length - 1];
// console.log(sum);
//===================================================================//=============================================================
//////////////////////////////////////////////////////////// Q4 missing entries ////////////////////////////////////////////////////
// let testArray = [3, 4, 9, 1, 7, 3, 2, 6];
// let sortedArray = testArray.sort((a, b) => a - b);
// let largestNumber = sortedArray[sortedArray.length - 1];
// let missingNumbers = [];
// for (let i = 0; i < largestNumber; i++) {
//   if (sortedArray.indexOf(i) == -1) {
//     missingNumbers.push(i);
//   }
// }
// console.log(missingNumbers);
//===================================================================//=============================================================
//////////////////////////////////////////////////////////// Q5 missing entries ////////////////////////////////////////////////////
// let testArray = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
// let sortedArray = testArray.sort((a, b) => a - b);
// let element;
// let maxOccurance = 0;
// let elemCount = 1;
// for (let i = 1; i < sortedArray.length; i++) {
//   if (sortedArray[i] == sortedArray[i - 1]) {
//     elemCount++;
//   } else {
//     elemCount = 1;
//   }
//   if (elemCount > maxOccurance) {
//     maxOccurance = elemCount;
//     element = sortedArray[i];
//   }
// }
// console.log(element + " is repeated " + maxOccurance + " times");
//===================================================================//=============================================================
///////////////////////////////////////////////////////// Q6 shift entries to right ////////////////////////////////////////////////
// let array = [3, 8, 9, 7, 6];
// let elementToShift = array.pop();
// array.unshift(elementToShift);
// console.log(array);
