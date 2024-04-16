document.getElementById('submit').addEventListener('click',()=>{
    //1. Creatae a XMLHTTP Request
    let xhr = new XMLHttpRequest()

    //2. Configure the request
    xhr.open('GET','https://reqres.in/api/users?page=2',true)

    xhr.onload=()=>{
        console.log(typeof xhr.responseText)
    }
    xhr.send()
})