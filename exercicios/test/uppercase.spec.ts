import { checkIfTheFirstLetterIsUppercase } from '../04-uppercase'

describe('checkIfTheFirstLetterIsUppercase', () => {
  it('returns true if the first letter is uppercase', () => {
    const word = 'Brasil'
    const result = checkIfTheFirstLetterIsUppercase(word)
    expect(result).toBe(true)
  })

  it('returns false if the first letter is not uppercase', () => {
    const word = 'mobiauto'
    const result = checkIfTheFirstLetterIsUppercase(word)
    expect(result).toBe(false)
  })

  it('returns true if string has more than one word', () => {
    const word = 'Deu Certo!'
    const result = checkIfTheFirstLetterIsUppercase(word)
    expect(result).toBe(true)
  })
})
