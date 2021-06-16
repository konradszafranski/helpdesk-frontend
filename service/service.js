import { loginRequest, createUserRequest, getAllUsersRequest,
  createTaskRequest, getMyTasksRequest, getSpecificTaskRequest } from "/request/request.js"
import { authTokenExist, getStorageValue, setStorageValue } from "/storage/storage.js"

function isUserLogged() {
  return authTokenExist();
}

function getUserRole() {
  const userDetails = getStorageValue("UserDetails");

  console.log("userDetails");
  console.log(userDetails);

  console.log("userDetails.role");
  console.log(userDetails.role);

  return userDetails["role"];
}

async function loginHandler(userDetails) {
  const response = await loginRequest(userDetails);
  console.log("response");
  console.log(response);
  const authHeader = response.headers.get("Authorization");

  const responseBodyJson = await response.json();
  console.log("responseBodyJson");
  console.log(responseBodyJson);

  if(authHeader != undefined && responseBodyJson != undefined) {
    let token = authHeader.replace("Bearer ", "");
    return setStorageValue("Authorization", token) && setStorageValue("UserDetails", responseBodyJson);
  } else {
    return false;
  }
}

function createUserHendler(userDetails) {
  const authHeader = "Bearer " + getStorageValue("Authorization");
  const responseStatus = createUserRequest(userDetails, authHeader);
  console.log("responseStatus");
  console.log(responseStatus);
}

function getUsersHendler() {
  const authHeader = "Bearer " + getStorageValue("Authorization");
  const userList = getAllUsersRequest(authHeader);
  console.log("userList");
  console.log(userList);
  return userList;
}

async function createTaskHendler(taskDetails) {
  console.log("taskDetails");
  console.log(taskDetails);
  const authHeader = "Bearer " + getStorageValue("Authorization");
  const responseStatus = await createTaskRequest(taskDetails, authHeader);
  console.log("responseStatus");
  console.log(responseStatus);
}

async function getTasksHendler() {
  const authHeader = "Bearer " + getStorageValue("Authorization");
  const taskList = await getMyTasksRequest(authHeader);
  return taskList;
}

async function getSpecificTask(elementId) {
  const authHeader = "Bearer " + getStorageValue("Authorization");
  console.log("id:::");
  console.log(elementId);
  const specificTask = await getSpecificTaskRequest(elementId, authHeader);
  return specificTask;   
}


export { createUserHendler, getUsersHendler, loginHandler,
  isUserLogged, getUserRole, createTaskHendler,
  getTasksHendler, getSpecificTask }
