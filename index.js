function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

test = Array(50)

for (let i = 0; i < test.length; i++) {
    test[i] = getRandomInt(0, 11)
}

console.log(test)