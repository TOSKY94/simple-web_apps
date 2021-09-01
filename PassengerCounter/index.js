let saveEle=document.getElementById("save-ele");
let countEle=document.getElementById("count-ele");
let count=0;


function increment(){
    count+=1
    countEle.innerHTML = count;
}

function save(){
    let countStr= count+" - "
    saveEle.textContent+=countStr;
    count=0;
    countEle.innerHTML = 0;

}
/*
function clear(){
    saveEle.textContent="Previous entries: ";
}
*/

function clearEntries(){
    saveEle.textContent="Previous entries: ";
}
