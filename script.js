let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0]; // Set max date to today
let result = document.getElementById("result");

function calculateAge() {
  let birthdate = new Date(userinput.value);

  // If the input is empty or invalid, do nothing
  if (isNaN(birthdate)) {
    result.innerHTML = "Please select a valid birthdate.";
    return;
  }

  let today = new Date();

  // Calculate the difference in milliseconds
  let diff = today - birthdate;

  // Convert the difference into years, months, days, hours, minutes, and seconds
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Approximation for leap years
  diff -= years * 1000 * 60 * 60 * 24 * 365.25;

  let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Approximation for months
  diff -= months * 1000 * 60 * 60 * 24 * 30.44;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;

  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;

  let minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;

  let seconds = Math.floor(diff / 1000);

  // Display the result
  result.innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;
  
}

// Update age every second only if the input value exists
setInterval(() => {
  if (userinput.value) calculateAge();
}, 1000);

function getDays(year, month) {
  return new Date(year, month, 0).getDate(); // Get the last day of the month
}
