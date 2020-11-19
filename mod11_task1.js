const arr = ["dsgs", 24, 47, 0, 99, 12, 589, 34, 0, "12", 3549, null, "привет"]

let totalOdd = 0;
let totalEven = 0;
let totalZero = 0;

for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
  
    if (arr[i] === 0) {
    totalZero++;
    } else if (arr[i] %2 === 0) {
    totalEven++;
    } else if (arr[i] > 0) {
    totalOdd++;
    }
  }
}

console.log("Всего элементов в массиве - " + arr.length)
console.log(totalZero + " элементов со значением 0");
console.log(totalEven + " четных элементов");
console.log(totalOdd + " нечетных элементов");
