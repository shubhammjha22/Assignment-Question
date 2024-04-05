// Q4
function lastManWithGun(totalPeople) {
  let numberOfPeople = new Array(totalPeople); //Number of People left
  for (let i = 0; i < totalPeople; i++) {
    numberOfPeople[i] = i + 1;
  }
  let personWithGun = 0;

  while (numberOfPeople.length > 1) {
    personWithGun++;
    personWithGun = personWithGun % numberOfPeople.length;
    //we are taking modulao to make it circular

    numberOfPeople.splice(personWithGun, 1); //removing the person who are killed
  }
  return numberOfPeople[0];
}
let totalPeople = 100;
let lastPerson = lastManWithGun(totalPeople);
console.log("The Last Person", lastPerson);
console.log("\n Shubham Jha");
