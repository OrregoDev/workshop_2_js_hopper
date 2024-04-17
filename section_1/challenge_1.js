// JULIAN`S TRIP

const destination = String(prompt('Where would you like to go?'));
let days = Number(prompt('How many days would you like to stay?'));
let budget = Number(prompt('How much would you like to spend?'));
const dailyCost = 250;
let totalCost = days * dailyCost;

if (budget < totalCost) {
  alert("Sorry, you don't have enough money. You should adjust your budget.");
} else {
  alert('Enjoy your trip!');
}
