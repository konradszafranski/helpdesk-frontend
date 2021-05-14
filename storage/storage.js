function authTokenExist() {
  let token = sessionStorage.getItem("Authorization");
  if(token != undefined) {
    return true;
  } else {
    return false;
  }
}

function setStorageValue(key, value) {
  try {
    sessionStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.log("error");
    console.log(e);
    return false;
  }
}

function getStorageValue(key) {
  let token = sessionStorage.getItem(key);
  return token;
}

export { setStorageValue, authTokenExist, getStorageValue }
