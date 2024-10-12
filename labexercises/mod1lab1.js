function changeBackgroundColor() {
  const body = document.body;
  console.log("Body element:", body); // Debugging log
  const newColor = getRandomColor();
  console.log("New color:", newColor); // Debugging log
  document.getElementById("column1").style.backgroundColor = newColor;
  changePic("img1");
  changeHeading("heading1");
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function changeBackgroundColor2() {
  const body = document.body;
  console.log("Body element:", body); // Debugging log
  const newColor = getRandomColor();
  console.log("New color:", newColor); // Debugging log
  document.getElementById("column2").style.backgroundColor = newColor;
  changePic("img2");
  changeHeading("heading2");
}

function changePic(picID) {
  console.log("Change Picture 1");
  document.getElementById(picID).src =
    "https://i.pinimg.com/474x/d2/d5/b8/d2d5b82ee47c2fb3ec6a8660a17558fc.jpg";
}

function changeHeading(headingID) {
  document.getElementById(headingID).textContent = "leFleur";
}
