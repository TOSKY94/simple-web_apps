
let myLeads=[]
const inputBtn = document.getElementById("input-btn")
const inputTextEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputTextEl.value)
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
            
        console.log(listItems)
    }
    ulEL.innerHTML = listItems
    inputTextEl.value="";
}

//<li><a href='facebook.com' target='_blank'>facebook.com</a></li>