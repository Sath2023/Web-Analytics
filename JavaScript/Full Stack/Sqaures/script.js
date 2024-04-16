function squares()
{
    let firstNumber = 1;
    let inputnumber = document.getElementById("inputnumber").value;
    let resultPar = document.getElementById("result");
    let square;
    let resultString = 0;
    while(firstNumber <= inputnumber)
    {
        square = Math.pow(firstNumber,2);
        resultString = resultString + " " + square;
        firstNumber = firstNumber + 1;
    }
    resultPar.innerHTML = resultString;
}