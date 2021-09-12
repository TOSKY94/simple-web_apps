const textField = document.getElementById("textField")

function display(value){
    textField.textContent+=value
}

function clear(){
    textField.textContent=""
}

document.getElementById("1b").addEventListener("click",()=>(display(1)))
document.getElementById("2b").addEventListener("click",()=>(display(2)))
document.getElementById("3b").addEventListener("click",()=>(display(3)))
document.getElementById("4b").addEventListener("click",()=>(display(4)))
document.getElementById("5b").addEventListener("click",()=>(display(5)))
document.getElementById("6b").addEventListener("click",()=>(display(6)))
document.getElementById("7b").addEventListener("click",()=>(display(7)))
document.getElementById("8b").addEventListener("click",()=>(display(8)))
document.getElementById("9b").addEventListener("click",()=>(display(9)))
document.getElementById("0b").addEventListener("click",()=>(display(0)))

document.getElementById("+b").addEventListener("click",()=>(display("+")))
document.getElementById("-b").addEventListener("click",()=>(display("-")))
document.getElementById("*b").addEventListener("click",()=>(display("*")))
document.getElementById("/b").addEventListener("click",()=>(display("/")))

document.getElementById("clear").addEventListener("click",()=>(clear()))