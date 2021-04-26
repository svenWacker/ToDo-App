// Any code you will write for your website (in the future!) should go here

const addToList = () => {
  let userData = document.querySelector("#userData").value;
  //   console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
