import { getSpecificTask } from "/service/service.js"

async function buildCaseDetailsView(mainDiv, elementId) {

  //get specific task from backend
  const specificTask = await getSpecificTask(elementId);

  //delete current content
  while(mainDiv.firstChild) {
    mainDiv.firstChild.remove();
  }

  mainDiv.appendChild(buildTaskDetailsForm(specificTask));
}

function buildTaskDetailsForm(specificTask) {

  const taskDetailsForm = document.createElement("div");
  taskDetailsForm.classList.add("w3-container");
  taskDetailsForm.classList.add("w3-row-padding");
  taskDetailsForm.style.paddingTop = "40px";

  //form header
  const header = document.createElement("h2");
  header.classList.add("w3-text-teal");
  header.innerHTML = "Case Details:"

  //parent div
  const idDiv = document.createElement("div");
  idDiv.classList.add("w3-bar-item");
  idDiv.style.maxWidth = "60%";
  //element
  const idSpan = document.createElement("span");
  idSpan.innerHTML = "<b> CASE ID: </b>" + specificTask.id;
  idDiv.appendChild(idSpan);

  //parent div
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("w3-bar-item");
  dateDiv.style.maxWidth = "60%";
  //element
  const dateSpan = document.createElement("span");
  dateSpan.innerHTML = "<b>CREATED DATE: </b>" + specificTask.initDate;
  dateDiv.appendChild(dateSpan);

  //parent div
  const timeDiv = document.createElement("div");
  timeDiv.classList.add("w3-bar-item");
  timeDiv.style.maxWidth = "60%";
  //element
  const timeSpan = document.createElement("span");
  timeSpan.innerHTML = "<b>CREATED TIME: </b>" + specificTask.initTime;
  timeDiv.appendChild(timeSpan);

  //parent div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("w3-bar-item");
  titleDiv.style.maxWidth = "60%";
  //element
  const titleSpan = document.createElement("span");
  titleSpan.innerHTML = "</br> <b>CASE TITLE: </b>" + specificTask.title;
  titleDiv.appendChild(titleSpan);

  //parent div
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("w3-bar-item");
  descriptionDiv.style.maxWidth = "60%";
  //element
  const descriptionSpan = document.createElement("span");
  descriptionSpan.innerHTML = "<b>DESCRIPTION: </b>" + "</br>" + specificTask.description;
  descriptionDiv.appendChild(descriptionSpan);

  taskDetailsForm.appendChild(header);
  taskDetailsForm.appendChild(idDiv);
  taskDetailsForm.appendChild(dateDiv);
  taskDetailsForm.appendChild(timeDiv);
  taskDetailsForm.appendChild(titleDiv);
  taskDetailsForm.appendChild(descriptionDiv);

  return taskDetailsForm;
}

export { buildCaseDetailsView }
