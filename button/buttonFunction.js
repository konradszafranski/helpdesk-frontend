import { loginHandler } from "../service/loginService.js"
import { createUserHendler, getUsersHendler } from "../service/adminService.js"
import { buildUserList } from "../builder/buildUserList.js"

async function createUser(addUserForm) {
  let inputList = Array.from(addUserForm.getElementsByClassName("w3-input"));
  let checkBoxList = Array.from(addUserForm.getElementsByClassName("w3-check"));
  let userDetails = {};

  inputList.forEach((item) => {
    userDetails[item.id] = item.value;
  });

  console.log(checkBoxList);

  userDetails["userPermissions"] = [];
  checkBoxList.forEach((item) => {
    if(item.checked) {
      userDetails["userPermissions"].push(item.id);
    }
  });

  console.log("userDetails");
  console.log(userDetails);

  let responseStatus = await createUserHendler(userDetails);
}

async function getAllUsers() {
  let userList = await getUsersHendler();
  let listDiv = buildUserList(userList);
  return listDiv;
}

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

export { login, createUser, getAllUsers }


/*async function logout() {
  let response = await logoutRequest();
  console.log("response logout");
  console.log(response);
}

export { createUser, getAllUsers, login, logout }
*/
