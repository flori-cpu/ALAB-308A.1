let count = 0;



function countRecursively() {

  count++;
  countRecursively(); 
}

try {


  countRecursively(); 
} catch (error) {


  console.log("The maximum call stack size is around: " + count);
  console.log("Error message: " + error.message);
}




// PART 2 

function flattenArray(arr) {


    return arr.reduce((flat, item) => {
      return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
  }
  
  function trampoline(fn) {


    return function (...args) {
      let result = fn(...args);
      while (typeof result === "function") {
        result = result();
      }
      return result;
    };
  }
  
  function recursiveFlatten(arr) {


    return function flattenStep(flat, rest) {
      if (rest.length === 0) return flat;
      const [first, ...remaining] = rest;
      if (Array.isArray(first)) {
        return () => flattenStep(flat, first.concat(remaining));
      } else {
        return () => flattenStep(flat.concat(first), remaining);
      }
    }([], arr);
  }
  


  const trampolinedFlatten = trampoline(recursiveFlatten);
  const nestedArray = [1, [2, [3, [4, [5]]]]];
  console.log(trampolinedFlatten(nestedArray));
  

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function showPrimes(n) {
    const output = document.createElement("div");
    document.body.appendChild(output);
  
    let currentNumber = 1;
  
    function checkNext() {
      if (currentNumber > n) {
        alert("Finished calculating primes!");
        return;
      }
  
      if (isPrime(currentNumber)) {
        const primeElement = document.createElement("div");
        primeElement.textContent = currentNumber;
        output.appendChild(primeElement);
      }
  
      currentNumber++;
      setTimeout(checkNext, 0);
    }
  
    checkNext();
  }
  
  showPrimes(10000);

  
  