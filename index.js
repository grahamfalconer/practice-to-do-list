var loadTime = 0

document.addEventListener("DOMContentLoaded", function(event) { 
  loadTime = event.timeStamp;
  todoList = new todoList();
  newList = document.getElementById("todo-list")
  loadingTime = document.getElementById("loading-time");
  date = document.getElementById("todays-date")
  dateToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  newNoteButton = document.getElementById("make-new-button");
  inputField = document.getElementById("input-field");
  inputButton = document.getElementById("input-button");

  loadingTime.innerHTML = loadTime;
  date.innerHTML = dateToday;
});

function addItemToList(){
  let noteMessage = inputField.value;
  let noteTextNode = document.createTextNode("* " + noteMessage);
  let noteHTMLElement = document.createElement("p")
  noteHTMLElement.setAttribute("class", "listed-note")
  noteHTMLElement.appendChild(noteTextNode);
  newList.appendChild(noteHTMLElement);
  inputField.value = "";
}

function myFunction(event) { 
  if(event.target.className == "listed-note"){
    console.log(event.target.className)
    event.target.style.textDecoration='line-through'
  }
}