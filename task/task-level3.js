const loadPrevDataFromStorage = () => {
  const ls = localStorage.getItem("contact-form");
  let temp = {};
  if (ls) {
    temp = JSON.parse(ls);
  }
  return temp;
};

const setInputFieldData = (id, data) => {
  document.getElementById(id).value = data ? data : ``;
};

const preloadData = () => {
  const data = loadPrevDataFromStorage();
  if (data) {
    setInputFieldData("name-field", data["name"]);
    setInputFieldData("email-field", data["email"]);
    setInputFieldData("area-field", data["area"]);
  }
};

preloadData();

const getValueFromForm = (id) => {
  const form = document.getElementById(id);
  const formVal = form.value;
  form.value = ``;
  return formVal;
};

const send = (type) => {
  const formVal = getValueFromForm(type + "-field");
  const ls = loadPrevDataFromStorage();
  ls[type] = formVal;
  const stringified = JSON.stringify(ls);
  localStorage.setItem("contact-form", stringified);
};

const del = (type) => {
  const load = loadPrevDataFromStorage();
  delete load[type];
  setInputFieldData(type + "-field", ``);
  const stringified = JSON.stringify(load);
  localStorage.setItem("contact-form", stringified);
};

const reset = () => {
  localStorage.clear();
  preloadData();
};
