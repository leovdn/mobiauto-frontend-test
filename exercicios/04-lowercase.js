function checkIfTheFirstLetterIsUppercase(word) {
  const firstLetter = word.charAt(0)
  return firstLetter === firstLetter.toUpperCase()
}

module.exports = checkIfTheFirstLetterIsUppercase
