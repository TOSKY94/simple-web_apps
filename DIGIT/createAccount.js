const form = document.querySelector('#form');
const email = document.querySelector('#email');
const ID = document.querySelector('#ID');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const emailValue = email.value.trim()
    const IDValue = ID.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    console.log(emailValue)
    console.log(IDValue)
    console.log(passwordValue)
    console.log(confirmPasswordValue)
    errorMsg.textContent=''
    if (passwordValue!==confirmPasswordValue){
        errorMsg.textContent='password does not match'
        password.value=''
        confirmPassword.value=''
    }
    if (!(passwordValue.length>5||passwordValue.includes('a'))){
        errorMsg.textContent='password does not meet requirement'
    }
}
