const getInputValue = (id) => {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  inputField.value = ``;
  return inputFieldValue;
};

const getValueFromLocalStorage = () => {
  const ls = localStorage.getItem("ls");
  let temp = {};
  if (ls) {
    temp = JSON.parse(ls);
  }
  return temp;
};

document.getElementById("btn-store").addEventListener("click", function () {
  const key = getInputValue("key-area");
  const value = getInputValue("value-area");
  const ls = getValueFromLocalStorage();
  ls[key] = value;
  //console.log(ls, JSON.stringify(ls));
  const stringified = JSON.stringify(ls);
  //console.log(stringified);
  localStorage.setItem("ls", stringified);
});

const getLocalStorage = () => {
  const storageValue = localStorage.getItem("ls");
  //console.log(storageValue);
};

document.getElementById("btn-remove").addEventListener("click", function () {
  const removeItem = getInputValue("remove-area");
  let theFile = JSON.parse(localStorage.getItem("ls"));
  delete theFile[removeItem];
  theFile = JSON.stringify(theFile);
  localStorage.setItem("ls", theFile);
});

document
  .getElementById("btn-show-local-storage")
  .addEventListener("click", function () {
    const showUl = document.getElementById("show-item");
    showUl.innerText = ``;
    let data = localStorage.getItem("ls");
    data = JSON.parse(data);
    for (const val in data) {
      const createLi = document.createElement("li");
      createLi.innerText = `${val} ${data[val]}`;
      //   console.log(val, data[val]);
      showUl.appendChild(createLi);
    }
  });

//getLocalStorage();
