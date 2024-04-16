document.getElementById('click').addEventListener("click")=()=>{
let xhr = new XMLHttpRequest();
xhr.open('GET','server/data.txt',true)
xhr.onload=()=>
{
    console.log(chr.responseText)
    document.getElementById('result').innerHTML = xhr.responseText();
}
xhr.responseType = "text";
xhr.send();
});
