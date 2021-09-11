let myLeads=[]
const inputTextEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTabBtn = document.getElementById("saveTab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEL = document.getElementById("ul-el")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
} 

function render(leads){
    let listItems=""
    for (let i=0; i<leads.length; i++){
        listItems+=`
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEL.innerHTML = listItems
    inputTextEl.value="";
}


inputBtn.addEventListener("click", function(){
    if (inputTextEl.value){
        myLeads.push(inputTextEl.value)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
      }
    
})

saveTabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})