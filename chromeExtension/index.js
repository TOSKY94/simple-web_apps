
let myLeads=[]
const inputBtn = document.getElementById("input-btn")
const inputTextEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")


let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromStorage){
    myLeads = leadsFromStorage
    renderLeads()
} 


inputBtn.addEventListener("click", function(){
    myLeads.push(inputTextEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})


function renderLeads(){
    let listItems=""
    for (let i=0; i<myLeads.length; i++){
        listItems+=`
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEL.innerHTML = listItems
    inputTextEl.value="";
}

