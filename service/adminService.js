import { createUserRequest, getAllUsersRequest } from "../request/request.js"
import { getStorageValue } from "../storage/storage.js"

function createUserHendler(userDetails) {
  let authHeader = "Bearer " + getStorageValue("Authorization");
  console.log("authHeader");
  console.log(authHeader);
  let responseStatus = createUserRequest(userDetails, authHeader);
  console.log("responseStatus");
  console.log(responseStatus);
}

function getUsersHendler() {
  let authHeader = "Bearer " + getStorageValue("Authorization");
  let userList = getAllUsersRequest(authHeader);
  console.log("userList");
  console.log(userList);
  return userList;
}

export { createUserHendler, getUsersHendler }
