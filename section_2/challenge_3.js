// Last minute decisions

const paraguas = { name: 'Umbrella', weight: 1, essential: true };
const cámara = { name: 'Camera', weight: 2, essential: false };
const hat = { name: 'hat', weight: 1, essential: false };
const bottle = { name: 'bottle', weight: 1, essential: true };

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

while (true) {
  const weathers = ['sunny', 'cloudy', 'rainy'];
  const weatherForecast = prompt(
    'What is the weather forecast? sunny, cloudy or rainy?'
  );
  if (weathers.indexOf(weatherForecast)) {
    alert('Please enter a valid weather forecast');
  } else {
    break;
  }
}

while (true) {
  const weightLimit = getAmount('How much weight (in kg) can you carry?');
  if (weightLimit > 0) {
    break;
  } else {
    alert('Please enter a valid amount of weight.');
  }
}

const tripDuration = getAmount('How long is your trip (in days)?');

while (true) {
  const remainingLuggageSpace = getAmount(
    'How much space (in kg) do you have?'
  );
  if (remainingLuggageSpace > 0) {
    break;
  } else {
    alert('Please enter a valid amount of space.');
  }
}

function suggestedArticles(remainingLuggageSpace, weightLimit, tripDuration) {}
