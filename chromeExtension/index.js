
let myLeads=[]
const inputBtn = document.getElementById("input-btn")
const inputTextEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function(){
    myLeads.push("linkedin.com")
    console.log(myLeads)
})