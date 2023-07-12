async function getRickAndMortyCharacters() {
  async function getCharacterData(characterName) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${characterName}`
      )
      const data = await response.json()

      if (data.results.length > 0) {
        const character = data.results[0]
        const { name, gender, image, species } = character

        return {
          nome: name,
          genero: gender === 'Male' ? 'Homem' : 'Mulher',
          avatar: image,
          especie: species === 'Human' && 'Humano',
        }
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchRickAndMortyCharacters() {
    const characterNames = [
      'Rick Sanchez',
      'Morty Smith',
      'Summer Smith',
      'Beth Smith',
      'Jerry Smith',
    ]
    const charactersDataList = []

    for (const name of characterNames) {
      const data = await getCharacterData(name)
      if (data) {
        charactersDataList.push(data)
      }
    }

    return charactersDataList
  }

  fetchRickAndMortyCharacters().then((characters) => {
    console.log(characters)
    return characters
  })
}

getRickAndMortyCharacters()

module.exports = getRickAndMortyCharacters
