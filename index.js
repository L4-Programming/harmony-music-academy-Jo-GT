// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Form submitted");
  let userEmail = document.querySelector("#email").value;
  console.log({ userEmail });
});
// Store the user's email address as userEmail (string/text)
// Store the user's level as userLevel (string/text)
// Store the user's hours of study as userHours (number)
// Validate the user's input
// Check if the user has selected a level
// Check if the user has provided an email address
// Check if the user has specified at least one hour of study
// Check if the number of hours requested is within the allowed range
// Calculate the total cost
// Display the total cost to the user