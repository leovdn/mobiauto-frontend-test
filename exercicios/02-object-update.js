function updateData(currentObject, newDataObject) {
  const updatedObject = { ...currentObject }

  for (const key in newDataObject) {
    if (updatedObject.hasOwnProperty(key)) {
      updatedObject[key] = newDataObject[key]
    }
  }

  return updatedObject
}

module.exports = updateData
