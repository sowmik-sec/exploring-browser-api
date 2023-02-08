const getCountValue = () => {
  const ls = localStorage.getItem("increment");
  let temp = {};
  if (ls) {
    temp = JSON.parse(ls);
  }
  return temp;
};

const currentCountValue = () => {
  return parseInt(document.getElementById("count").innerText);
};

const setCurrentValue = () => {
  const cur = JSON.parse(localStorage.increment);
  document.getElementById("count").innerText = cur.cnt;
  //   console.log(cur.cnt);
};

setCurrentValue();

document.getElementById("btn-increase").addEventListener("click", function () {
  const val = currentCountValue() + 1;
  document.getElementById("count").innerText = val;
  let ls = getCountValue();
  ls["cnt"] = val;
  ls = JSON.stringify(ls);
  localStorage.setItem("increment", ls);
});

//currentCountValue();
