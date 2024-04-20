// personal budget calculator

function getAmount(promptMessage) {
  while (true) {
    const amount = Number(prompt(promptMessage));
    if (!Number.isNaN(amount) && amount > 0) {
      return amount;
    } else {
      alert('Please enter a valid number.');
    }
  }
}

const dailyBudget = getAmount('How much is your daily budget?');
const dailySavingsGoal = getAmount('How much is your minimum daily savings?');
const eatingOutPrice = getAmount('How much does your eating out cost?');
const bookPrice = getAmount('How much does your book cost?');

if (dailyBudget <= dailySavingsGoal) {
  alert('Your daily budget is not enough. You should adjust your budget.');
} else if (dailyBudget - dailySavingsGoal >= eatingOutPrice) {
  alert('You could go out to eat');
} else if (dailyBudget - dailySavingsGoal >= bookPrice) {
  alert('You could buy a book.');
}
