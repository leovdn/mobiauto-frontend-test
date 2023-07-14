interface Data {
  [key: string]: any
}

function updateData<T extends Data, U extends Data>(
  currentObject: T,
  newDataObject: U
): T {
  const updatedObject: Partial<T> = { ...currentObject }

  for (const key in newDataObject) {
    if (currentObject.hasOwnProperty(key)) {
      updatedObject[key] = newDataObject[key]
    }
  }

  return { ...currentObject, ...updatedObject }
}

export default updateData
