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

function getDailySavingsGoal(dailyBudget) {
  while (true) {
    const dailySavingsGoal = getAmount('How much is your daily savings goal?');
    if (dailySavingsGoal <= dailyBudget) {
      return dailySavingsGoal;
    } else {
      alert(
        'Your daily budget is not enough. You should adjust your daily savings goal.'
      );
    }
  }
}

const dailySavingsGoal = getDailySavingsGoal(dailyBudget);
const eatingOutPrice = getAmount('How much does your eating out cost?');
const bookPrice = getAmount('How much does your book cost?');
const remainingBudget = dailyBudget - dailySavingsGoal;

const couldEatOut = remainingBudget >= eatingOutPrice;
const couldBuyBook = remainingBudget >= bookPrice;

if (couldEatOut && couldBuyBook) {
  alert(
    'You can have the eating out and the book and reach your savings goal.'
  );
} else if (couldEatOut) {
  alert('You can just have the eating out and reach your savings goal.');
} else if (couldBuyBook) {
  alert('You can just have the book and reach your savings goal.');
} else {
  alert(
    'You should adjust your budget to afford anything else and yet reach your savings goal.'
  );
}
