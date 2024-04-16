function prime()
{
    let input = document.getElementById('inputno').value
    if(input <= 1)
    {
        document.getElementById('result').innerHTML = "Invalid input"
    }
    if(input <= 3)
    {
        document.getElementById('result').innerHTML = "It is a prime number"
        return;
    }
    else if(input%2 === 0 || input%3 === 0)
    {
        document.getElementById('result').innerHTML = "It is not a prime number"
    }
    document.getElementById('result').innerHTML = `${input} is a prime number`
}