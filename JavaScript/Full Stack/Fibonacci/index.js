function Genfib()
{
    let f1 = 0;
    let f2 = 1;
    let inputNumber = 5;
    console.log(f1,f2);
    while(f1 + f2 < inputNumber)
    {
        let temp = f1 + f2;
        console.log(temp);
        f1 = f2; // Swapping contents
        f2 = temp;
    }
}
