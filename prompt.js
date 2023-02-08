const showAlert = () => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    alert("This is bellow 5");
  }
};

const askSomething = () => {
  const decision = confirm("Are you going Picnic?");
  if (decision) {
    console.log("you are a whore");
  } else {
    console.log("you are a slut");
  }
};

const getUserInfo = () => {
  const name = prompt("Tell us your name.", "whore");
  console.log(name);
  if (!!name) {
    console.log("Welcome ", name);
  }
};
