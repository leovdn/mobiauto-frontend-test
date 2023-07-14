import maskify from '../01-maskify'

describe('maskify', () => {
  it('returns the original string if the length is less than or equal to 4', () => {
    const input = '1234'
    const result = maskify(input)
    expect(result).toBe('1234')
  })

  it('masks all characters except the last four if the length is greater than 4', () => {
    const input = '1234567890'
    const result = maskify(input)
    expect(result).toBe('######7890')
  })

  it('masks all characters except the last four if there is a space between the last 4 characters', () => {
    const input = '1234 567'
    const result = maskify(input)
    expect(result).toBe('###4567')
  })
})
