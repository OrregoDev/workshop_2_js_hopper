// JULIAN`S TRIP

const destination = prompt ("Insert the destination you would like to visit");
let days = prompt ("Insert the days you are planning to stay there");
let budget = prompt ("Insert you budget for this trip");
const dailyCost = 200;

function checkBudget (days, budget, dailyCost) {
    const totalCost = days * dailyCost;
    if (budget >= totalCost) {
        return "Julian has enough money";
    } else {
        return "Julian should adjust the destination or the amount of days";
    }
}

console.log(checkBudget(days, budget, estimatedDailyCost));