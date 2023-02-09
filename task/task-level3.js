const loadPrevDataFromStorage = () => {
  const ls = localStorage.getItem("contact-form");
  let temp = {};
  if (ls) {
    temp = JSON.parse(ls);
  }
  return temp;
};

const getValueFromForm = (id) => {
  const form = document.getElementById(id);
  const formVal = form.value;
  form.innerText = ``;
  return formVal;
};
