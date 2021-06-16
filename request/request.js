async function loginRequest(loginCredentials) {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginCredentials)
  });
  return response;
}

async function createUserRequest(userDetails, authHeader) {
  const response = await fetch("http://localhost:8080/createNewEmployee", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
    body: JSON.stringify(userDetails)
  });
  return response;
}

async function getAllUsersRequest(authHeader) {
  const response = await fetch("http://localhost:8080/getListOfEmployees", {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
  });
  const jsonValue = response.json();
  console.log("getAllEmployees response");
  console.log(jsonValue);
  return jsonValue;
}

async function createTaskRequest(taskDetails, authHeader) {
  const response = await fetch("http://localhost:8080/createNewTask", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
    body: JSON.stringify(taskDetails)
  });
  const jsonValue = response.json();
  console.log("getAllEmployees response");
  console.log(jsonValue);
  return jsonValue;
}

async function getMyTasksRequest(authHeader) {
  const response = await fetch("http://localhost:8080/getListOfTasks", {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
  });
  const jsonValue = response.json();
  console.log("getAllTasks json");
  console.log(jsonValue);
  return jsonValue;
}

async function getSpecificTaskRequest(elementId, authHeader) {
  const response = await fetch("http://localhost:8080/getTask", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": authHeader
    },
    body: JSON.stringify(elementId)
  });
  const jsonValue = response.json();
  console.log("getTask json");
  console.log(jsonValue);
  return jsonValue;
}

export { createUserRequest, getAllUsersRequest, loginRequest,
  createTaskRequest, getMyTasksRequest, getSpecificTaskRequest }
