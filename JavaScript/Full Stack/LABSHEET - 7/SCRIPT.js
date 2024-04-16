let input = 'Hi I am sathvik my contact number is 6364441166 and my mail is sathvik@gmail.com'
//let re = /[0-9]{10}/
let emailre = /^[a-z]+\@[a-z]+\.[a-z]/
if(input.match(emailre))
{
    console.log("Match")
}
else
{
    console.log("Not match")
}
