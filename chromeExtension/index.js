
let myLeads=["pascal","james"]
const inputBtn = document.getElementById("input-btn")
const inputTextEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputTextEl.value)
    console.log(myLeads)
})

for (let i=0; i<myLeads.length; i++){
    console.log(myLeads[i])
    ulEL.innerHTML+="<li>"+myLeads[i]+"</li>"
}