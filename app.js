const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#confirmTask");
const list = document.querySelector("ul");
const delAll = document.querySelector("#reset");
var color = document.querySelector("#color").value;
const swapBtn = document.querySelector("#swapColor");
const slideBtn = document.querySelector("#slideBtn");
const bottomSlider = document.querySelector(".bottomSlider");

addBtn.addEventListener("click", addTask);
delAll.addEventListener("click", deleteAll);
swapBtn.addEventListener("click", colorSwap);
slideBtn.addEventListener("click", slidePanel);

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});

function addTask() {
  if (input.value == "") {
    alert("Add a task! :)");
  } else {
    li = document.createElement("li");
    li.innerHTML = "<a>X</a><p>" + input.value + "</p>";
    list.append(li);
    input.value = "";
  }
}

function deleteTask() {
  pass; //todo
}

function deleteAll() {
  while (list.firstElementChild) {
    list.firstElementChild.remove();
  }
  input.value = "";
}

function slidePanel() {
  if (bottomSlider.style.height == "") {
    bottomSlider.style.height = "150px";
  } else if (bottomSlider.style.height == "150px") {
    bottomSlider.style.height = "";
  }
}

function colorSwap() {
  document.documentElement.style.setProperty(
    "--mainColor",
    document.querySelector("#color").value
  );
}
