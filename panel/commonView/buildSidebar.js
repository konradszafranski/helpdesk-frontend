import { getStorageValue } from "/storage/storage.js"

//fill sidebar with user details values

function fillSidebar(sidebarUserDetailsDiv) {
  let userDetails = getStorageValue("UserDetails");

  let ulElement = document.createElement("ul");
  ulElement.classList.add("w3-ul")

  for(const [key, value] of Object.entries(userDetails)) {
    let liElement = document.createElement("li");
    liElement.style.marginTop = "20px";

    let keySpan = document.createElement("span");
    keySpan.innerHTML = key.toUpperCase() + ":";
    keySpan.style.color = "blue";

    let breakLine = document.createElement("br");

    let valueSpan = document.createElement("span");
    valueSpan.innerHTML = value;

    liElement.appendChild(keySpan);
    liElement.appendChild(breakLine);
    liElement.appendChild(valueSpan);

    ulElement.appendChild(liElement);
  }

  sidebarUserDetailsDiv.appendChild(ulElement);
}

export { fillSidebar }
