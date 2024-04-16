function Fib()
{
    let f1 = 0
    let f2 = 1
    let inputValue = document.getElementById('input').value
    let resultValue = " "
    let result = document.getElementById('result')
    resultValue = resultValue + f1 + "," + f2

    function Genefib(f1,f2,inputValue)
    {
        if(f1 + f2 >= inputValue)
        {
            return;
        }
        resultValue = resultValue + " " + (f1 + f2)
        Genefib(f2,(f1+f2),inputValue)
        result.innerHTML=resultValue
    }
    Genefib(f1,f2,inputValue)
}
