function calculateFactorial() {
    const numberInput = document.getElementById("numberInput");
    const number = parseInt(numberInput.value);
    if (isNaN(number) || number < 0) 
    {
      document.getElementById("outputArea").innerHTML = "Invalid Input: Please enter a non-negative integer.";
      return;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) 
    {
      factorial *= i;
    }
    document.getElementById("outputArea").innerHTML = `The factorial of ${number} is: ${factorial}`;
  }
  