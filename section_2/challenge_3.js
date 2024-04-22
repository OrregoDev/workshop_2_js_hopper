// Last minute decisions

const umbrella = { name: 'Umbrella', weight: 1, essential: true };
const camera = { name: 'Camera', weight: 2, essential: false };
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

let weatherForecast;
while (true) {
  weatherForecast = prompt('What is the weather forecast? sunny or rainy?');
  if (
    weatherForecast.toLowerCase() !== 'sunny' &&
    weatherForecast.toLowerCase() !== 'rainy'
  ) {
    alert('Please enter a valid weather forecast');
  } else {
    break;
  }
}

let weightLimit;
while (true) {
  weightLimit = getAmount('How much weight (in kg) can you carry?');
  if (weightLimit > 0) {
    break;
  } else {
    alert('Please enter a valid amount of weight.');
  }
}

let remainingLuggageSpace;
while (true) {
  remainingLuggageSpace = getAmount('How much space (in kg) do you have?');
  if (remainingLuggageSpace > 0) {
    break;
  } else {
    alert('Please enter a valid amount of space.');
  }
}

function getitems(weatherForecast, remainingLuggageSpace, weightLimit) {
  let suggesteditems = [];
  if (weatherForecast === 'rainy') {
    suggesteditems.push(umbrella);
  }

  if (remainingLuggageSpace >= hat.weight && weightLimit >= hat.weight) {
    suggesteditems.push(hat);
  }

  if (remainingLuggageSpace >= camera.weight && weightLimit >= camera.weight) {
    suggesteditems.push(camera);
  }

  if (remainingLuggageSpace >= bottle.weight && weightLimit >= bottle.weight) {
    suggesteditems.push(bottle);
  }

  if (suggesteditems.length > 0) {
    alert(
      'Based on the given conditions, it is recommended to carry the following items:'
    );
    suggesteditems.forEach((item) => {
      alert(`- ${item.name} (weight: ${item.weight} kg)`);
    });
  } else {
    alert('There are no recommended items based on the given conditions.');
  }
}

getitems(weatherForecast, remainingLuggageSpace, weightLimit);
