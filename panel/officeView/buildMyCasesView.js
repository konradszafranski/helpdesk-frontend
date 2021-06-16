import { getTasksHendler } from "/service/service.js"
import { buildCaseDetailsView } from "./buildCaseDetailsView.js"

async function buildMyCasesView(mainDiv) {

  //get list of tasks from backend
  const taskList = await getTasksHendler();

  //delete current content
  while(mainDiv.firstChild) {
    mainDiv.firstChild.remove();
  }

  const showTaskForm =  buildCaseDetailsForm();
  mainDiv.appendChild(showTaskForm);

  const taskListDiv = buildCaseList(taskList);
  mainDiv.appendChild(taskListDiv);
}

function buildCaseDetailsForm() {

  const showTaskForm = document.createElement("div");
  showTaskForm.id = "showTask";
  showTaskForm.classList.add("w3-container");
  //showTaskForm.classList.add("w3-row-padding");
  showTaskForm.style.paddingTop = "30px";

  const header = document.createElement("h3");
  header.classList.add("w3-text-teal");
  header.innerHTML = "Show Case By ID:"
  showTaskForm.appendChild(header);

  const showTaskField = document.createElement("input");
  showTaskField.id = "taskId";
  showTaskField.classList.add("w3-input");
  showTaskField.classList.add("w3-border");
  showTaskField.style.width = "100px";
  showTaskField.type = "text";
  showTaskForm.appendChild(showTaskField);

  const showTaskButton = document.createElement("button");
  showTaskButton.id = "showTaskButton";
  showTaskButton.classList.add("w3-btn");
  showTaskButton.classList.add("w3-blue-grey");
  showTaskButton.style.width = "100px";
  showTaskForm.style.paddingTop = "10px";
  showTaskButton.type = "button";
  showTaskButton.innerHTML = "Get Task";
  showTaskButton.addEventListener("click", function() {
    let mainDiv = document.getElementById("mainContent");

    //get provided id
    let elementId = this.parentElement
                        .getElementsByTagName("input")[0]
                        .value;

    if(elementId > 0) {
      buildCaseDetailsView(mainDiv, elementId);
    } else {
      alert("wrong value provided")
    }
  });
  showTaskForm.appendChild(showTaskButton);

  return showTaskForm;
}

function buildCaseList(taskList) {

  const taskListDiv = document.createElement("div");
  taskListDiv.classList.add("w3-container");
  taskListDiv.classList.add("w3-row-padding");
  taskListDiv.style.paddingTop = "30px";

  const header = document.createElement("h3");
  header.classList.add("w3-text-teal");
  header.innerHTML = "My Cases:"

  taskListDiv.appendChild(header);

  const taskUlElement = buildUlElement();
  taskListDiv.appendChild(taskUlElement);

  for(let i = 0 ; i < taskList.length ; i++) {
    const task = buildLiElement(taskList[i]);
    taskUlElement.appendChild(task);
  }

  return taskListDiv;
}

function buildUlElement() {

  const ul = document.createElement("w3-ul");
  ul.classList.add("w3-ul");
  ul.classList.add("w3-card-4");

  return ul;
}

//take task then prepare htmlLi element
function buildLiElement(task) {

  //parent div
  const idDiv = document.createElement("div");
  idDiv.classList.add("w3-bar-item");
  idDiv.classList.add("id");
  idDiv.style.minWidth = "5%";
  //element
  const idSpan = document.createElement("span");
  idSpan.innerHTML = "<b>ID: </b>" + "</br>" + task.id;
  idDiv.appendChild(idSpan);

  //parent div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("w3-bar-item");
  titleDiv.style.minWidth = "30%";
  //element
  const titleSpan = document.createElement("span");
  titleSpan.innerHTML = "<b>TITLE: </b>" + "</br>" + task.title;
  titleDiv.appendChild(titleSpan);

  //parent div
  const initDateDiv = document.createElement("div");
  initDateDiv.classList.add("w3-bar-item");
  initDateDiv.style.minWidth = "10%";
  //element
  const dateSpan = document.createElement("span");
  dateSpan.innerHTML = "<b>DATE: </b>" + "</br>" + task.initDate;
  initDateDiv.appendChild(dateSpan);

  //parent div
  const initTimeDiv = document.createElement("div");
  initTimeDiv.classList.add("w3-bar-item");
  initTimeDiv.style.minWidth = "10%";
  //element
  const timeSpan = document.createElement("span");
  timeSpan.innerHTML = "<b>TIME: </b>" + "</br>" + task.initTime;
  initTimeDiv.appendChild(timeSpan);

  const li = document.createElement("li");
  li.classList.add("w3-bar");

  li.appendChild(idDiv);
  li.appendChild(titleDiv);
  li.appendChild(initDateDiv)
  li.appendChild(initTimeDiv);

  return li;
}

export { buildMyCasesView }
