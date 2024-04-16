// Regular expressions 
// Pattern for phone number - 10 digits from 0 to 9 ->/d{10} or [0-9]{10}
// Pattern for Email ID - Few characters '@' Few Characters '.' Few Characters -> [a-zA-Z] + \@ [a-zA-Z] +\. [a-zA-Z]
// + -> Represents one or more and * -> represents 0 or more 
// First Name - ^[a-zA-Z]{6,}$ -> {6,} refers minimum 6 to no limit
// ^ -> Starts with , $ -> End with
// Last Name -> ^[a-zA-Z]+$
// Password ->^[a-zA-Z0-9]{6,}$

let firstname = 'Sathvik'
console.log(firstname.match(/^[a-zA-Z]{6,}$/)?true:false)
let lastname = 'Math'
console.log(lastname.match(/^[a-zA-Z]+$/)?true:false)
let phone = '6364441166'
console.log(phone.match(/^[0-9]{10}$/)?true:false)