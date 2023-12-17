//html var
let questionInput = document.querySelector(".question-input");
let questionType = document.querySelector(".question-type");
let options = document.querySelector(".options");
let mcqOptions = document.getElementById("mcqOptions");
let writtenOptions = document.getElementById("writtenOptions");
let choicesInput = document.getElementById("choicesInput");
let mcqCorrectAnswerInput = document.getElementById("mcqCorrectAnswerInput");
let writtenCorrectAnswerInput = document.getElementById(
  "writtenCorrectAnswerInput"
);
let explanationInput = document.getElementById("explanationInput");
let addBtn = document.querySelector(".add-btn");
//bisic function
questionType.addEventListener("change", function (e) {
  if (this.value === "mcq") {
    mcqOptions.style.display = "block";
    writtenOptions.style.display = "none";
  } else {
    mcqOptions.style.display = "none";
    writtenOptions.style.display = "block";
  }
  emptyInput();
});
let display = function () {
  let question = questionInput.value;
  let choices = choicesInput.value.split(",");
  let correctAnswer =
    mcqCorrectAnswerInput.value + writtenCorrectAnswerInput.value;
  let explanation = explanationInput.value;
  console.log("question", question);
  console.log("choices", choices);
  console.log("correctAnswer", correctAnswer);
  console.log("explanation", explanation);
  emptyInput();
};
addBtn.addEventListener("click", display);
let emptyInput = function () {
  questionInput.value = "";
  choicesInput.value = "";
  mcqCorrectAnswerInput.value = "";
  writtenCorrectAnswerInput.value = "";
  explanationInput.value = "";
};
