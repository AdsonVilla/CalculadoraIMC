const button = document.querySelector("#calcBtn");
button.addEventListener("click", function (event) {
  event.preventDefault();
  //   button.innerText = "RESETAR";
  const height = document.getElementById("height");
  const textHeight = height.value;

  const weight = document.getElementById("weight");
  const textWeight = weight.value;
  console.log(`Altura: ${textHeight} m \nPeso: ${textWeight} Kg`);

  const sectionResult = document.getElementById("result");
  const div = document.createElement("div");
  div.className = "contents";
  const breakLine = document.createElement("br");
  const imcP = document.createElement("p");
  const result = textWeight / (textHeight * textHeight);
  imcP.innerText = `Seu IMC é = ${result.toFixed(2)}`;

  const span = document.createElement("span");

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.innerText = "RESETAR";
  resetButton.className = "button";
  resetButton.addEventListener("click", function () {
    sectionResult.removeChild(div);
    height.value = "";
    weight.value = "";
    button.disabled = false;
    inputHeight.disabled = false;
    inputWeight.disabled = false;
  });

  button.disabled = true;
  const inputHeight = document.querySelector(".inputHeight");
  inputHeight.disabled = true;
  const inputWeight = document.querySelector(".inputWeight");
  inputWeight.disabled = true;

  span.appendChild(resetButton);
  div.append(breakLine, imcP, resetButton);
  sectionResult.append(div);
});
