function Genfib()
{
    let f1 = 0;
    let f2 = 1;
    let inputNumber = document.getElementById("inputNumber").value;
    let resultvalue = " ";
    let result = document.getElementById("result");
    resultvalue = resultvalue + f1 +" "+ f2;
    // console.log(f1,f2);
    function Genefib(f1,f2,inputNumber)
    {
        if(f1 + f2 >= inputNumber)
        {
            return;
        }
        resultvalue = resultvalue + " " + (f1 + f2);
        //console.log(f1 + f2);
        Genefib(f2,f1+f2,inputNumber);
        result.innerHTML = resultvalue;
    }
Genefib(f1,f2,inputNumber);
}
