function insertValue(value) {
  const input = document.getElementById("mathInput");
  input.value += value;
}

function clearInput() {
  document.getElementById("mathInput").value = "";
  document.getElementById("solution").innerHTML = "";
}

function solveMath() {
  const input = document.getElementById("mathInput").value;
  const solutionDiv = document.getElementById("solution");

  if (input.trim() === "") {
    solutionDiv.innerHTML = "Please enter a math expression.";
    return;
  }

  try {
    // Basic evaluation (prototype only)
    const result = eval(input.replace("^", "**"));

    solutionDiv.innerHTML = `
      <p><strong>Step 1:</strong> Evaluating the expression</p>
      <p><strong>Step 2:</strong> ${input}</p>
      <p><strong>Final Answer:</strong> ${result}</p>
    `;
  } catch (error) {
    solutionDiv.innerHTML = "Invalid expression. Please check your input.";
  }
}
