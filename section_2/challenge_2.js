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

while (true) {
  if (dailyBudget <= dailySavingsGoal) {
    alert('Your daily budget is not enough. You should adjust your budget.');
  } else {
    break;
  }

  const couldEatOut = dailyBudget - dailySavingsGoal >= eatingOutPrice;
  const couldBuyBook = dailyBudget - dailySavingsGoal >= bookPrice;

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
}
