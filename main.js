const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Please enter your task");
// Updated - v3.4.8
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
// Updated - v1.2.9
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
// Updated - v5.3.4
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();