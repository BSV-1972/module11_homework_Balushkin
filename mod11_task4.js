function printNumbers(a, b) {

let current = a; 
  
const intervalId = setInterval(function(a, b) {
     if (current <= b) {
     console.log(current);
     current++;  
    } else if (current > b) {
 clearInterval(intervalId);
    }
  }, 1000, a, b);
  
}

printNumbers(5, 15)
