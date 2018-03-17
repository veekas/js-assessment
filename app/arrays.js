exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum: function(arr) {
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
    }
    return currentSum;
  },

  remove: function (arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) newArr.push(arr[i]);
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2); // TODO: submit PR to make this solution fail
  },

  insert: function(arr, item, index) {
    let newArr = arr.slice(0, index);
    newArr.push(item)
    newArr = newArr.concat(arr.slice(index, arr.length));
    return newArr;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) count++;
    }
    return count;
  },

  duplicates: function(arr) {
    let uniqueValues = new Set();
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueValues.has(arr[i])) {
        uniqueValues.add(arr[i]);
      }
      else if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map(x => x * x);
  },

  findAllOccurrences: function(arr, target) {
    let occurrences = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) occurrences.push(i);
    }
    return occurrences;
  }
};
