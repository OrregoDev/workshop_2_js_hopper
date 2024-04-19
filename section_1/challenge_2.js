// Types of Souvenirs


const BUDGET = 10000;

function getCost() {
  while (true) {
    const souvenirCost = prompt('What is the cost of the souvenir?');
    if (!isNaN(souvenirCost) && souvenirCost > 0) {
      return souvenirCost;
    } else {
      alert('Please enter a valid number.');
    }
  }
}

function askForSouvenir() {
  const souvenirs = [];
  while (true) {
    const souvenirName = prompt('What is the name of the souvenir?');
    const souvenirCost = getCost();
    const souvenirAvailability = confirm('Is the souvenir available?');

    const souvenir = {
      name: souvenirName,
      cost: souvenirCost,
      availability: souvenirAvailability,
    };

    souvenirs.push(souvenir);

    const anotherSouvenir = confirm('Do you want to add another souvenir?');
    if (!anotherSouvenir) {
      break;
    }
  }
  return souvenirs;
}

function getAvailableSouvenir(souvenirs) {
  const availableSouvenirs = [];
  souvenirs.forEach((souvenir) => {
    if (souvenir.availability === true) {
      availableSouvenirs.push(souvenir);
    }
  });
  return availableSouvenirs;
}

function showSouvenirs(availableSouvenirs) {
  if (availableSouvenirs.length === 0) {
    alert('No souvenirs available.');
  } else {
    console.log(availableSouvenirs);
  }
}

const souvenirs = askForSouvenir();
const availableSouvenirs = getAvailableSouvenir(souvenirs);
showSouvenirs(availableSouvenirs);
