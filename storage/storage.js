function authTokenExist() {
  let token = sessionStorage.getItem("Authorization");
  if(token != undefined) {
    return true;
  } else {
    return false;
  }
}

function getStorageValue(key) {
  let jsonItem = sessionStorage.getItem(key);
  let item = JSON.parse(jsonItem);
  return item;
}

function setStorageValue(key, value) {
  console.log("value");
  console.log(value);
  console.log(typeof value);

  try {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log("error");
    console.log(e);
    return false;
  }
}

export { setStorageValue, authTokenExist, getStorageValue }
