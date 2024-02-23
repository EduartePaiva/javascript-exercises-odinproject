const findTheOldest = function (people) {
    const arrayOfAge = people.map(person => {
        let death = person.yearOfDeath
        const birth = person.yearOfBirth
        if (!death) {
            death = new Date().getFullYear()
        }
        return death - birth
    })

    const oldestAge = Math.max(...arrayOfAge)
    return people[arrayOfAge.indexOf(oldestAge)]
};

// Do not edit below this line
module.exports = findTheOldest;
