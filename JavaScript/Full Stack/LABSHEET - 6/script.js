let emailgroupObject = document.getElementById('email-group')
let websiteGroupObject = document.getElementById('web-group')
let empIDGroupObject = document.getElementById('employeeid-group')

//Disappering the fields
emailgroupObject.style.display = 'none'
empIDGroupObject.style.display = 'none'
websiteGroupObject.style.display = 'none'
// None makes the field disapper and block makes it come back

//Fucntion for calculating age
let calculateAge=(dob=>{
    let todaysDate = new Date();
    let dateOFBirth = new Date(dob)
    let age = todaysDate.getFullYear() - dateOFBirth.getFullYear()
    age = todaysDate.getMonth() - dateOFBirth.getMonth()<0?--age:age
    return age
})
document.getElementById('dob')
//Logic for displaying the fields
let displayFields=()=>
{
    let age = calculateAge(document.getElementById('dob').value)
    if(age < 18)
    {
        emailgroupObject.style.display = 'none'
        empIDGroupObject.style.display = 'none'
        websiteGroupObject.style.display = 'none'
    }
    else if(age>=18 && age<25)
    {
        emailgroupObject.style.display = 'block'
        empIDGroupObject.style.display = 'block'
        websiteGroupObject.style.display = 'none'
    }
    else
    {
        emailgroupObject.style.display = 'block'
        empIDGroupObject.style.display = 'block'
        websiteGroupObject.style.display = 'block'
    }

    document.getElementById('submit').addEventListener("click",()=>{
        document.write(`Hi ${fnameObject.value} Welcome`)
    })
}