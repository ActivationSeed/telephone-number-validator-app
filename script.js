const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const isValidPhoneNumber = (input) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  return regex.test(input);
}

checkBtn.addEventListener("click", function() {
  const inputValue = userInput.value;

  if (inputValue === "") {
    alert("Please provide a phone number");
    } 
  else if (isValidPhoneNumber(inputValue)) {
    resultsDiv.innerText = `Valid US number: ${inputValue}`
      }
  else {
    resultsDiv.innerText = `Invalid US number: ${inputValue}`}
});

clearBtn.addEventListener("click", function() {
  resultsDiv.innerText = "";
  userInput.value = "";
});