/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return n * factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
//basecase: array[0] + sum(array.slice(1))
//n=1,  index 0 = [1] | [2,3,4,5,6]
//n=2, index 0= [2] | [3...]
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// arraySum([[12,[[34],[56]],78]]); //180
//basecase: 
//use.flat()?
//check if each item in the array is an array, if not, call the function
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }

  if (Array.isArray(array)) {
    if (Array.isArray(array[0])) {
      return sum = arraySum(array[0][0]) + arraySum(array[0].slice(1)) + arraySum(array.slice(1));
    } else {
      return sum = array[0] + arraySum(array.slice(1));
    }
  } else {
    return array;
  }
};

/*
var arraySum = function(array) {
  var sum = 0;
    for(var i = 0; i < array.length; i++){// i = 0 = 1, i = 1 = [2,3]
      if(Array.isArray(array[i])){//[2,3] 
        sum += arraySum(array[i]);//use for loop i = 0 = 2, i = 1 = 3
      }else{
        sum += array[i];//  i = 0: (0 + 1 = 1) // i = 1: 0 + 2 = 2, 2 + 3 = 5
      }
    }
       return sum;
}
*/

//forEach
/* function sum(arr) {
  var total = 0;
  arr.forEach(elm => total += Array.isArray(elem)? sum(elem) : elem);
}
*/
//reduce
/*
return arr.reduce((total, elem) => total + (Array.isArray? sum(elem) : elem), 0);
*/


// 4. Check if a number is even.
//basecase: n - 2 === 0; 
var isEven = function(n) {
  var num = Math.abs(n);
  if (num === 0) {
    return true;
  }
  if (num === 1) {   
    return false;
  }
  return isEven(num - 2); 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//basecase: when you return and stop recursing 
// sum below zero = zero
// sum below one = zero
//sum below two  = 1 = one + sum below 1
//sum below three = 2 + 1 = 3 = (n - 1) + sum below n-1
var sumBelow = function(n) {
  if (n < 2 && n > -2) {
    return 0;
  }
  if (n <= -2) {
    return sumBelow(n + 1) + n + 1;
  } else {
    return sumBelow(n - 1) + n - 1;
  }
};
//basecase = when you are not calling the function

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//x must be +-2 of y
//not recursively calling range:
// var range = function(x, y) {
//   var ret = [];
//   var rangeR = function(x, y, arr) {
//     if (x - y <= 1 && y - x <= 1) {
//       return;
//     }
//     if (y > x) {
//       arr.push(x + 1);
//       rangeR(x + 1, y, arr);
//     } else {
//       arr.push(x - 1);
//       rangeR(x - 1, y, arr);
//     }
//   };
//   rangeR(x, y, ret);
//   return ret;
// };

// range(4, 4) = []
//range(2, 4) = [3] => [3].concat([])
//range(1, 4) = [2, 3] => [2].concat(range(2, 4))
//range(x, y) = [x+1].concat(range(x+1, y)
var range = function(x, y) {
    if (x - y <= 1 && y - x <= 1) {
      return [];
    }
    if (y > x) {
      return [x + 1].concat(range(x + 1, y));
    } else {
      return [x - 1].concat(range(x - 1, y));
    }
  };
  //rangeR(x, y, ret);
  //return ret;

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//basecase: when product = base times itself exp times
//(2, 4) => 2 * 2 * 2 * 2 = 16
var exponent = function(base, exp) {
  if(exp > 1) {
    return total = base * exponent(base, exp - 1);
  }
  if (exp < 0) {
    return total = 1 / (base * exponent(base, (exp - 2 * exp) - 1)); //cannot use absolute value abs
  }
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//power of 2 = 2 ^ n; power of 2 should return 1 as smallest positive integer before result returns a non-integer
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n / 2 === 1) {
    return true;
  } 
  if (n % 2 !== 0 || n === 0) {
    return false; 
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
//basecase: when the first character in the string is added to a new string and no more to add
//if string = "abc" => "cba"
var reverse = function(string) {
  if (string.length === 0) {
    return "";
  } else {
    return string[string.length-1] + reverse(string.substring(0, string.length-1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
//if the character appears in both first and last index
//ie. "abba" "aba" "abcba" - 01234, 123, 2

var palindrome = function(string) {
  string = string.toLowerCase();
  string = string.replace(" ","");
  if (string.length <= 1) {
    return true;
  }
  if (string[0] !== string[string.length-1]) {
    return false;
  }
  return palindrome(string.substring(1, string.length-1));
}; 


/* didn't pass arguments test
var palindrome = function(string) {
  string = string.toLowerCase();
  string = string.replace(" ","");
  var start = arguments[1] || 0;
  var end = arguments[2] || string.length-1;
  if (start >= end) {
    return true;
  }
  if (string[start] !== string[end]) {
    return false;
  }
  return palindrome(string, start + 1, end - 1);
}; 
*/ 


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
//basecase: when division does not result in a whole number
//ie. 5/2 = 2*(1/2) => 5-2 = 3; 3-2 = 1; remainder = 1
//ie. 22/6 = 3...remainder = 4
//ie. 5/3 = remainder = 2
//5/4 = 1...1
//4/5 = 0...4
var modulo = function(x, y) {
  var absX = x;
  var absY = y;
  var subtractedValue = x - y;

  if ( y === 0) {
    return NaN;
  }
  if ( y < 0) {
    absY = 0 - y;
  } 
  if (x < 0) {
    absX = 0 - x;
    subtractedValue = -(absX - absY);
  }
  
  if (absX > absY) {
    if (absX - absY > absY) {
      return modulo(subtractedValue, absY);
    }
    if (absX - absY < absY) {
      return subtractedValue;
    }
    return 0;
  } else {
    return x;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
//2*3 = 2 + 2 + 2
var multiply = function(x, y) {

  if ( x < 0) {
    x = -(x);
    return - (x + multiply(x, y - 1));
  }
  if ( y < 0) {
    y = -(y);
    return - (x + multiply(x, y - 1));
  } 
  if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    return x + multiply(x, y - 1);
  }
  return 0;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// 5 /3 = 1.666 => 1
//7 /3 = 2.333 => 2
//17/5 = 3.4 ==>
// 78/453 => 0.171..
 // if (arguments[2]) { 
  //   var count = arguments[2];
  // } else {
  //   count = 0;
  // }
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < y) {
    return 0;
  }
  if (x >= 0 && y >= 0) {
    return 1 + divide( x - y, y); 
  } else {
    return divide( x + y, y); 
  }
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
//expect(gcd(4,36)).to.equal(4);
//expect(gcd(24,88)).to.equal(8);
// gcd(4,6) => 2
// 8 & 6 =>2
//3 & 6

// given 4,6
// 1    |  4 < 6 && 6 % 4 = 2 |  return gcd(3,6)
// 2    |  3 < 6 && 6 % 3 = 0 |  return 3 -> SHOULD RETURN 2
// 1    |  8 > 6 && 8 % 6 = 2 | return gcd(7, 6)
// 2    |  7 > 6 && 7 % 6 = 1 | return gcd(6, 6) ... ->SHOULD BE 1
//3     | 6 === 6 & 6 % 6 = 1 | return 6 -> should return 2
// 1    | 24 < 88 & 88 % 24 !== 0  | return gcd(23, 88)
// 2    | 23 < 88 ......% !== 0   | return gcd(22, 88)
// 3    | 22 < 88... % === 0   | return 22 --> should return 8


var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x % y === 0) {
    return y;
  } else {
    return gcd(y, x % y);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
//return false str1[n] !== str2[n]
var compareStr = function(str1, str2) {
  // if (str1.length !== str2.length) {
  //   return false;
  // }
  
  // if current character in str1 and str2 are not equal return false
  
  // if both lengths are zero return true

  // return compareStr(str1.substring(1), str2.substring(1))


  if (str1[0] !== str2[0]) {
    return false;
  } 
  if (str1.length === 0 && str2.length === 0) {
    return true;
  } 
    return compareStr(str1.substring(1), str2.substring(1));
};


// if (str1.length <= 1 && str2.length <= 1 && str1[0] === str2[0]) {
//     return true;
//   }
//   if (str1[str1.length - 1] !== str2[str2.length - 1]) {
//     return false;
//   } else {
//     return compareStr(str1.substring(0, str1.length-1), str2.substring(0,str2.length-1));
//   }


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//'abc' => [a, b, c]
//'b' => ['b']
//""=>[]
var createArray = function(str) {
  // str = str.split("");
  // console.log(str);
  // return str[0].concat(createArray(str.slice(1)).toString());

  if (str.length === 0) {
    return [];
  }
  return [str[0]].concat(createArray(str.substring(1, str.length))); 
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var results = [];

	if (array.length === 1) {
		return array;
	}
	results.push(array.pop());
	return results.concat(reverseArr(array));

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var results = [];

  if (length === 1) {
    return [value];
  }
  results.push(value);
  return results.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

var fizzBuzz = function(n) {
  var results = [];
  var str;

  if (n === 1) {
    console.log(n)
  	return [n + ''];
  }
  if (n % 3 === 0 && n % 5 === 0) {
  	str = 'FizzBuzz'
  } else if (n % 5 === 0) {
  	str = 'Buzz';
  } else if (n % 3 === 0) {
  	str = 'Fizz';
  } else {
  	str = n + '';
  }
  var mainStr = fizzBuzz(n - 1).join(',');
  var mainArray = mainStr + ',' + str;
  return mainArray.split(','); //[1,2,'fizz']
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var result = 0;

  if (array.length === 0) {
  	return 0;
  }
  if (array[0] === value) {
  	result++;
  }
  array.shift();
  return result + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var slicedArray = array.slice();
  var results = [];

  if (slicedArray.length === 0) {
  	return array;
  }
  results.push(callback(slicedArray.shift()))
  return results.concat(rMap(slicedArray, callback));


};

// 22. Write a function that counts the number of times a key occurs in an object.
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var result = 0;

	for (var keyName in obj) {
		if (keyName === key) {
			result++;
		}
		if (typeof obj[keyName] === 'object') {
			result += countKeysInObj(obj[keyName], key)
		}
	}
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
