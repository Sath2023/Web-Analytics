(function(){
    let formFields=document.querySelector('.needs-validation')
    // Formfields are in nodelist data structure 
    //Converting nodelist to array
    Array.prototype.slice.call(formFields).forEach(field=>{
        field.addEventListener('submit',event=>{
            if(!field.checkValidity())
            {
                event.preventDefault()
                event.stopPropogation()
            }
            field.classList.add('was-validated')
        },false)
    })
})();