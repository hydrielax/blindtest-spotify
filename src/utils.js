/* Return a random number between 0 included and x excluded */
export function getRandomNumber(x) {
  return Math.floor(Math.random() * x)
}

export function shuffleArray(array) {
  let counter = array.length

  while (counter > 0) {
    let index = getRandomNumber(counter)
    counter--
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}
