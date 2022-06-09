const addButton = document.querySelector(".btn-danger");
const whatToDo = document.querySelector(".what-to-do");
const addToDo = document.querySelector("#addtodo");
const forum = document.getElementById(".forum");
const trashcan = document.getElementById(".fa-trash-can");
const tempcheck = document.querySelector(".temp-check");
const checkBox = document.querySelector(".temp-check-box")


addButton.addEventListener("click", (e) => {
    if (addToDo.value) {
        console.log(addToDo.value);
        addElements();
        // addcheckbox();
        addToDo.value = ""
        e.preventDefault();

    }

})

whatToDo.addEventListener("click", (e) => {
    // tempcheck.style.animation ="slide 1s";
    if (e.target.classList.contains("fa-trash-can")){
           whatToDo.removeChild(e.target.parentElement); 
    }
    else if (e.target.classList.contains("temp-check-box")){
        if (e.target.checked){
   console.log("pressed check box");
   e.target.parentElement.style.textDecoration = "line-through";

        }
        else {
            console.log("none checked");
            e.target.parentElement.style.textDecoration = "none";
        }
     
    
    }
    



})

function addElements() {
    // create a new div element


    const newDiv = document.createElement("div");

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    newDiv.appendChild(x);
    x.setAttribute("class", "temp-check-box");
    newDiv.appendChild(x);
    console.log(document.getElementsByClassName("temp-check-box"));


    newDiv.setAttribute("class", "temp-check")
    // addcheckbox();
    // and give it some content
    const newContent = document.createTextNode(addToDo.value);
    // newContent.innerHTML += "<i class="fa-regular fa-trash-can"></i>";
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    whatToDo.insertBefore(newDiv, currentDiv);
    console.log(whatToDo.firstElementChild);
    whatToDo.lastElementChild.innerHTML += " <i class='fa-solid fa-trash-can'></i> ";

}

function addcheckbox() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    // x.setAttribute("class","temp-check-box" );
    tempcheck.appendChild(x);
    x.setAttribute("class", "temp-check-box");
    tempcheck.appendChild(x);
    console.log(document.getElementsByClassName("temp-check-box"));
}