function buildUserList(userList) {
  let unorderedList = document.createElement("ul");
  unorderedList.classList.add("w3-ul");

  for(let i = 0 ; i < userList.length ; i++) {
    unorderedList.appendChild(buildUserLiElement(userList[i]));
  }

  let userListDiv = document.createElement("div");
  userListDiv.classList.add("w3-container");
  userListDiv.appendChild(unorderedList);

  return userListDiv;
}

function buildUserLiElement(user) {
  let nameSpan = document.createElement("span");
  nameSpan.innerHTML = user.name;
  let surnameSpan = document.createElement("span");
  surnameSpan.innerHTML = user.surname;

  let nameDiv = document.createElement("div");
  nameDiv.appendChild(nameSpan);
  let surnameDiv = document.createElement("div");
  surnameDiv.appendChild(surnameSpan);

  let liElement = document.createElement("li");
  liElement.classList.add("w3-bar");
  liElement.appendChild(nameDiv);
  liElement.appendChild(surnameDiv);

  return liElement;
}

export { buildUserList }
