import axios from 'axios'

interface Character {
  name: string
  gender: string
  image: string
  species: string
}

interface TransformedCharacter {
  nome: string
  genero: 'Homem' | 'Mulher'
  avatar: string
  especie: 'Humano'
}

async function fetchCharacterData(
  characterName: string
): Promise<TransformedCharacter | null> {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    )
    const data = response.data

    if (data.results.length > 0) {
      const character: Character = data.results[0]
      const { name, gender, image, species } = character

      return {
        nome: name,
        genero: gender === 'Male' ? 'Homem' : 'Mulher',
        avatar: image,
        especie: 'Humano',
      }
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

async function fetchRickAndMortyCharacters(): Promise<TransformedCharacter[]> {
  const characterNames: string[] = [
    'Rick Sanchez',
    'Morty Smith',
    'Summer Smith',
    'Beth Smith',
    'Jerry Smith',
  ]
  const charactersDataList: TransformedCharacter[] = []

  for (const name of characterNames) {
    const data = await fetchCharacterData(name)
    if (data) {
      charactersDataList.push(data)
    }
  }

  return charactersDataList
}

export { fetchCharacterData, fetchRickAndMortyCharacters }
