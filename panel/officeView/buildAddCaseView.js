import { createTask } from "/button/buttonFunction.js";

function buildAddCaseView(mainDiv) {

  //delete current content
  while(mainDiv.firstChild) {
    mainDiv.firstChild.remove();
  }

  const addTaskForm = document.createElement("div");
  addTaskForm.id = "addTaskForm";
  addTaskForm.classList.add("w3-container");
  addTaskForm.classList.add("w3-row-padding");
  addTaskForm.style.paddingTop = "30px";

  //form header
  const header = document.createElement("h3");
  header.classList.add("w3-text-teal");
  header.innerHTML = "Create New Case:"
  addTaskForm.appendChild(header);

  const titleLabel = document.createElement("label");
  titleLabel.innerHTML = "<b>Title:</b>";
  addTaskForm.appendChild(titleLabel);

  const titleField = document.createElement("input");
  titleField.id = "title";
  titleField.classList.add("w3-input");
  titleField.classList.add("w3-border");
  titleField.style.maxWidth = "60%";
  titleField.type = "text";
  addTaskForm.appendChild(titleField);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.innerHTML = "<b>Description:</b>";
  addTaskForm.appendChild(descriptionLabel);

  const descriptionField = document.createElement("input");
  descriptionField.id = "description";
  descriptionField.classList.add("w3-input");
  descriptionField.classList.add("w3-border");
  descriptionField.style.maxWidth = "60%";
  descriptionField.style.height = "100px";
  descriptionField.type = "text";
  addTaskForm.appendChild(descriptionField);

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "createTask";
  addTaskButton.classList.add("w3-btn");
  addTaskButton.classList.add("w3-blue-grey");
  addTaskButton.type = "button";
  addTaskButton.innerHTML = "Create Task";
  addTaskButton.addEventListener("click", function() {
    let createTaskForm = document.getElementById("addTaskForm");
    createTask(createTaskForm);
  });
  addTaskForm.appendChild(addTaskButton);

  mainDiv.appendChild(addTaskForm);
}

export { buildAddCaseView }
