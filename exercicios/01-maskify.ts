function maskify(string: String) {
  const trimmedString = string.replace(/\s/g, '')
  const maskedLength = trimmedString.length - 4
  const lastFourChars = trimmedString.slice(-4)

  if (string.length <= 4) {
    return string
  } else {
    const maskedChars = '#'.repeat(maskedLength)
    const maskedInput = maskedChars + lastFourChars

    return maskedInput
  }
}

export default maskify
