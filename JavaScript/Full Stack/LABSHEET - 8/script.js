// // let validate=(inputString,regex)=>inputString.match(regex)?true:false
// let firstName = document.getElementById('fname').value
// let lastName = document.getElementById('lname').value
// let phoneno = document.getElementById('phno').value
// let emailID = document.getElementById('mailID').value
// let Password = document.getElementById('pwd').value
// let Address = document.getElementById('address').value
// let isEmpty=(inputString)=>inputString.length == 0?true:false
// /* let regexCollection={
//     firstname : /^[a-zA-Z]{6,}$/,
//     lastname : /^[a-zA-Z]+$/,
//     phone : /^[0-9]{10}$/,
//     mailID : /[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]/,
//     pwd : /^[a-zA-Z0-9]{6,}$/,
//     address : /[a-zA-Z0-9]+/
// }*/
// let firstname = /^[a-zA-Z]{6,}$/
// let lastname = /^[a-zA-Z]+$/
// let phone = /^[0-9]{10}$/
// let mailID = /[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]/
// let pwd = /^[a-zA-Z0-9]{6,}$/
// let address = /[a-zA-Z0-9]+/

// if(!fname.match(firstname))
// {
//     alert('invalid or empty')
// }
// if(!lname.isEmpty(lastName))
// {
//     alert('invalid or alert');
// }
// if(!phno.isEmpty(phone))
// {
//     alert('invalid or alert');
// }
// if(!maidID.isEmpty(emailID))
// {
//     alert('invalid or alert');
// }
// if(!pwd.isEmpty(Password))
// {
//     alert('invalid or alert');
// }
// if(!address.isEmpty(Address))
// {
//     alert('invalid or alert');
// }

let isEmpty=(inputString)=>inputString.length==0?true:false
let isValid=(inputString,regex)=>inputString.match(regex)?true:false

let validate=()=>{
    let formFields={
        firstName:document.getElementById('fname'),
        lastName:document.getElementById('lname'),
        email:document.getElementById('maidID'),
        phoneNumber:document.getElementById('phno'),
        password:document.getElementById('pwd'),
        address:document.getElementById('address'),
        submit:document.getElementById('registerBtnx')
    }
    let regularExp={
        firstName:/^[a-zA-Z]{6,}$/,
        lastName:/^[a-zA-Z]+$/,
        email:/^[a-zA-Z]{1,}@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
        password:/^[a-zA-Z0-9]{6,}$/,
        phoneNumber:/\d{10}/,
        address:/[a-zA-Z0-9]*/
    }
    let formFieldsCollection=document.querySelectorAll('.validate')
    Array.prototype.slice.call(formFieldsCollection).forEach(field=>{
        if(!isEmpty(field.value))
        {
            console.log(field.getAttribute('id'))
            if(!isValid(field.value,regularExp[field.getAttribute('id')]))
            {
                alert(`${field.getAttribute('name')} is not valid`)
            }
        }
        else
        {
            alert(`${field.getAttribute('name')} is empty`)
        }
    })

}
