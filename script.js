const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskBtn = document.querySelector(".add");
const trash = document.getElementById("trash");


addTaskBtn.addEventListener("click", function(){
    
    if(inputBox.value === ''){
        alert("YOU MUST WRITE SOMETHING !!!")
    }

    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();

});


inputBox.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){

        if(inputBox.value === ''){
            alert("YOU MUST WRITE SOMETHING !!!")
        }
    
        else{
            let li = document.createElement("li");
            li.innerText = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerText = "\u00d7";
            li.appendChild(span);
        }
    
        inputBox.value = "";
        saveData();

    }
});


listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    
    localStorage.setItem("my-data", listContainer.innerHTML)

}


function showData(){

    listContainer.innerHTML = localStorage.getItem("my-data");

}

showData();


function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }


trash.addEventListener("click", function(){

    listContainer.remove();
    localStorage.clear();
    AutoRefresh(1);

});
