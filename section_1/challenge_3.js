// Itinerary Planner

const minimumSavings = 500;

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

function getBudget() {
  let budget;
  while (true) {
    budget = getAmount('how much would you like to spend?');
    const estimatedCosts = getAmount(
      'How much are the estimated costs of your trip?'
    );
    if (budget > estimatedCosts) {
      break;
    } else {
      alert('Your budget is not enough.');
    }
  }
  return budget;
}

function askForArticles() {
  const articles = [];
  while (true) {
    const articleName = prompt('What is the name of the article?');
    const articleCost = getAmount('What is the cost of the article?');

    const article = {
      name: articleName,
      cost: articleCost,
    };

    articles.push(article);

    const anotherArticle = confirm('Do you want to add another article?');
    if (!anotherArticle) {
      break;
    }
  }
  return articles;
}

function getBudgetToSpend(remainingBudget, minimumSavings) {
  if (remainingBudget <= minimumSavings) {
    alert(
      'You shouldn´t buy extra articles in order to avoid exceeding your budget'
    );
    return 0;
  }
  return remainingBudget - minimumSavings;
}

function getPossiblesArticlesToBuy(articles, budgetToSpend) {
  const possibleArticlesToBuy = [];
  articles.forEach((article) => {
    if (article.cost <= budgetToSpend) possibleArticlesToBuy.push(article);
  });
  return possibleArticlesToBuy;
}

function main() {
  const budget = getBudget();
  const articles = askForArticles();
  const remainingBudget = budget - estimatedCosts;
  const budgetToSpend = getBudgetToSpend(remainingBudget, minimumSavings);
  const possibleArticlesToBuy = getPossiblesArticlesToBuy(
    articles,
    budgetToSpend
  );
  const cheapestArticle = possibleArticlesToBuy.reduce((previous, current) => {
    return current.cost > previous.cost ? current : previous;
  });
  alert(
    `The cheapest article is ${cheapestArticle.name} with a cost of ${cheapestArticle.cost}`
  );
}

main();
