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

async function logoutRequest() {
  const response = await fetch("http://localhost:8080/logout", {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}

export { createUserRequest, getAllUsersRequest, loginRequest, logoutRequest }
