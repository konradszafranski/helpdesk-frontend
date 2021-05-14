/*import { createUserRequest, getAllUsersRequest, loginRequest, logoutRequest } from "./request.js"
import { buildUserList } from "./buildUserList.js"*/

import { loginRequest } from "../request/request.js"
import { authTokenExist, setStorageValue } from "../storage/storage.js"

function isUserLogged() {
  return authTokenExist();
}

async function loginHandler(userDetails) {
  let response = await loginRequest(userDetails);
  console.log("response");
  console.log(response);
  let authHeader = response.headers.get("Authorization");

  if(authHeader != undefined) {
    let token = authHeader.replace("Bearer ", "");
    return setStorageValue("Authorization", token);
  } else {
    return false;
  }
}

export { loginHandler, isUserLogged }
