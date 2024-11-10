function sums(arr) {
  size = arr.length;
  let sum = 0;
  let average;
  for (let i = 0; i < size; i++) {
    converted = parseInt(arr[i]);

    sum += converted;
    average = sum / size;
  }
  return average;
}

// arra = [2, 2, 2, 2, 2];

let input = prompt(
  'Please enter some numbers seperated by commas to get the average'
);
let arra = input.split(',');

console.log('Average = ', sums(arra));

// ans = sums();

// console.log(ans);

// console.log(sum(arr));
