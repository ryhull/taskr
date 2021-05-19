const input = document.querySelector("#task-input");
const addBtn = document.querySelector("#confirm-task");
const list = document.querySelector("ul");
const delAll = document.querySelector("#reset");
const swapBtn = document.querySelector("#swap-color");
const slideBtn = document.querySelector("#slide-btn");
const bottomSlider = document.querySelector(".bottom-slider");
var color = document.querySelector("#color").value;

addBtn.addEventListener("click", addTask);
delAll.addEventListener("click", deleteAll);
swapBtn.addEventListener("click", colorSwap);
slideBtn.addEventListener("click", slidePanel);

function addTask() {
  if (input.value == "") {
    alert("Add a task :)");
  } else {
    li = document.createElement("li");
    li.innerHTML = `<p class="todo" onclick="strikeText(event)">${input.value}<span class="remove-btn" onclick="removeTask(event)">X</span></p>`;
    list.append(li);
    input.value = "";
  }
}

//Allowing enter key to submit tasks
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});

//Show task as 'completed' when clicked
function strikeText(event) {
  switch (event.currentTarget.style.textDecoration) {
    case "line-through":
      event.currentTarget.style.textDecoration = "none";
      event.currentTarget.style.opacity = "1";
      break;
    default:
      event.currentTarget.style.textDecoration = "line-through";
      event.currentTarget.style.opacity = "0.8";
      break;
  }
}

function removeTask(event) {
  event.target.parentNode.parentNode.remove();
}

function deleteAll() {
  while (list.firstElementChild) {
    list.firstElementChild.remove();
  }
  input.value = "";
}

//Open or close the color panel
function slidePanel() {
  if (bottomSlider.style.width == "") {
    bottomSlider.style.width = "250px";
    bottomSlider.style.opacity = "1"
    slideBtn.title = "Close Color Panel";
  } else if (bottomSlider.style.width == "250px") {
    bottomSlider.style.width = "";
    bottomSlider.style.opacity = "0"
    slideBtn.title = "Open Color Panel";
  }
}

function colorSwap() {
  document.documentElement.style.setProperty(
    "--mainColor",
    document.querySelector("#color").value
  );
}