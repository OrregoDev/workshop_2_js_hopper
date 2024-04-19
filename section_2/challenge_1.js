// Julian's evaluation

const energyLevel = prompt('from 1 to 10, how much energy do you have?');
const weather = prompt('What is the weather at the moment?');
const workload = prompt('from 1 to 10, how much workload do you have?');

if (energyLevel <= 3) {
  alert('You should take the day off.');
} else if (weather === 'sunny' && workload <= 5) {
  alert('You should go for a walk');
} else if (workload > 5) {
  alert('You should work in your personal projects');
} else {
  alert('Take a rest day');
}
