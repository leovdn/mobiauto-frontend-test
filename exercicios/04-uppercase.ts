function checkIfTheFirstLetterIsUppercase(word: string) {
  const firstLetter = word.charAt(0)
  return firstLetter === firstLetter.toUpperCase()
}

export { checkIfTheFirstLetterIsUppercase }
