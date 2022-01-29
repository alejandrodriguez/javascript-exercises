const findTheOldest = function(people) {
    let oldestAge = 0;
    const today = new Date();
    people.forEach(person => {
        person.age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : today.getFullYear() - person.yearOfBirth;
    })
    const ageSorted = people.sort((a,b) => {
        if (a.age > b.age) {
            return -1
        } else {
            return 1
        }
    })
    return ageSorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
