const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  console.log(userData);

  // Checking my input if it has a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);

    // Adding random colour to my list item
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";

    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    deleteButton.classList.add("delete");
    newLi.appendChild(newContainer);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newLi.classList.toggle("completed");
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
// Functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};
document.querySelector("form").addEventListener("submit", addToList);
