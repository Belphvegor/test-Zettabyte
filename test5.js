/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function findMinLength(arr, n) {
  let min = arr[0].length;
  for (let i = 1; i < n; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return (min);
}

function commonPrefix(arr, n) {
  let minlen = findMinLength(arr, n);
  let result = ""; // Our resultant string
  let current; // The current character
  for (let i = 0; i < minlen; i++) {
    current = arr[0][i];

    for (let j = 1; j < n; j++) {
      if (arr[j][i] != current) {
        return result;
      }
    }
    // Append to result
    result += (current);
  }

  return (result);
}

function result(words) {
  // Your Code Here
  let n = words.length;
  let ans = commonPrefix(words, n);

  if (ans.length > 0) {
    return ans;
  } else {
    return "There is no common prefix";
  }
}

console.log(result(words));