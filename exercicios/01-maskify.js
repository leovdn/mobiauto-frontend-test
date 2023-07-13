function maskify(string) {
  const maskedLength = string.length - 4
  const lastFourChars = string.slice(-4)

  if (string.length <= 4) {
    console.log(string)
  } else {
    const maskedChars = '#'.repeat(maskedLength)
    const maskedInput = maskedChars + lastFourChars

    console.log(maskedInput)
  }
}

module.exports = maskify
