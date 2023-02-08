document.getElementById("btn-add").addEventListener("click", function () {
  const number = prompt("Which number do you wanna add with 250?");
  console.log(number);
  alert(`the summation is ${parseInt(number) + 250}`);
});
