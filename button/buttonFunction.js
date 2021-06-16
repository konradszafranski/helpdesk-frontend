import { loginHandler, createUserHendler, getUsersHendler, createTaskHendler } from "/service/service.js"
import { buildUserList } from "../panel/adminView/buildUserList.js"
import { buildAddCaseView } from "../panel/officeView/buildAddCaseView.js"

async function login(loginUserForm) {
  let inputList = Array.from(loginUserForm.getElementsByTagName("input"));
  let userDetails = {};

  inputList.forEach((item) => {
    userDetails[item.id] = item.value;
  });
  console.log("userDetails");
  console.log(userDetails);

  let result = await loginHandler(userDetails);
  return result;
}

async function createUser(addUserForm) {
  let inputList = Array.from(addUserForm.getElementsByClassName("w3-input"));
  let radioList = Array.from(addUserForm.getElementsByClassName("w3-radio"));
  let userDetails = {};

  inputList.forEach((item) => {
    userDetails[item.id] = item.value;
  });

  radioList.forEach((item) => {
    if(item.checked) {
      userDetails["role"] = item.value;
    }
  });

  let responseStatus = await createUserHendler(userDetails);
}

async function getAllUsers() {
  let userList = await getUsersHendler();
  let listDiv = buildUserList(userList);
  return listDiv;
}

function getAddTaskView(mainDiv) {
  console.log("mainDiv1");
  console.log(mainDiv);
  while(mainDiv.hasChildNodes()) {
    console.log("deleteChildNode");
    mainDiv.removeChild(mainDiv.firstChild);
  }
  console.log("mainDiv2");
  console.log(mainDiv);
  buildAddTaskForm(mainDiv);
}

async function createTask(createTaskForm) {
  let inputList = Array.from(createTaskForm.getElementsByClassName("w3-input"));
  let taskDetails = {};

  inputList.forEach((item) => {
    taskDetails[item.id] = item.value;
  });

  createTaskHendler(taskDetails);
}

export { login, createUser, getAllUsers, createTask, getAddTaskView }
