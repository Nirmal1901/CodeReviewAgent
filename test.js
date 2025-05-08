// calculator.js - Simple addition calculator

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Create input elements
  const input1 = document.createElement("input");
  input1.type = "number";
  input1.placeholder = "Enter first number";

  const input2 = document.createElement("input");
  input2.type = "number";
  input2.placeholder = "Enter second number";

  // Create button
  const button = document.createElement("button");
  button.textContent = "Add Numbers";

  // Create result display
  const result = document.createElement("div");
  result.style.marginTop = "10px";
  result.style.fontWeight = "bold";

  // Append all to body
  document.body.appendChild(input1);
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(input2);
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(button);
  document.body.appendChild(result);

  // Add functionality to button
  button.addEventListener("click", () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers!";
      result.style.color = "red";
    } else {
      const sum = num1 + num2;
      result.textContent = `Sum: ${sum}`;
      result.style.color = "green";
    }
  });
});

// Optional: Add some basic styles
const style = document.createElement("style");
style.textContent = `
  input {
    margin: 5px;
    padding: 8px;
    width: 200px;
  }
  button {
    padding: 8px 12px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);
