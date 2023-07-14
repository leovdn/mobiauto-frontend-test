import updateData from '../02-object-update'

describe('updateData', () => {
  it('returns the original object if none of the new data has matching params', () => {
    const currentObject = { name: 'Marcos', country: 'Brasil', age: 22 }
    const newDataObject = {
      price: 89.9,
      amount: 15,
      description: 'camiseta 100% algodão',
    }
    const result = updateData(currentObject, newDataObject)
    expect(result).toEqual({ name: 'Marcos', country: 'Brasil', age: 22 })
  })

  it('returns the updated object if at least one param matches', () => {
    const currentObject = { name: 'Rafael', country: 'Chile', age: 42 }
    const newDataObject = { name: 'Camiseta Polo', price: 59.9, amount: 30 }
    const result = updateData(currentObject, newDataObject)
    expect(result).toEqual({ name: 'Camiseta Polo', country: 'Chile', age: 42 })
  })

  it('returns the updated object if all param matches', () => {
    const currentObject = { name: 'Rafael', country: 'Chile', age: 42 }
    const newDataObject = { name: 'Carlos', country: 'Brasil', age: 23 }
    const result = updateData(currentObject, newDataObject)
    expect(result).toEqual({ name: 'Carlos', country: 'Brasil', age: 23 })
  })
})
