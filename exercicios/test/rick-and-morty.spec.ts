import axios from 'axios'
import {
  fetchCharacterData,
  fetchRickAndMortyCharacters,
} from '../03-rick-and-morty'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetchCharacterData ', () => {
  it('should return character data when character exists', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: 'Rick Sanchez',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            species: 'Human',
          },
        ],
      },
    }
    mockedAxios.get.mockResolvedValue(mockResponse)

    const characterData = await fetchCharacterData('Rick Sanchez')

    expect(characterData).toEqual({
      nome: 'Rick Sanchez',
      genero: 'Homem',
      avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      especie: 'Humano',
    })
  })

  it('should return null when character does not exist', async () => {
    const mockResponse = {
      data: {
        results: [],
      },
    }
    mockedAxios.get.mockResolvedValue(mockResponse)

    const characterData = await fetchCharacterData('Non-existing Character')

    expect(characterData).toBeNull()
  })
})

describe('fetchRickAndMortyCharacters', () => {
  it('should return data from the requested list', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: 'Rick Sanchez',
            gender: 'Homem',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            species: 'Humano',
          },
          {
            name: 'Morty Smith',
            gender: 'Homem',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            species: 'Humano',
          },
          {
            name: 'Summer Smith',
            gender: 'Mulher',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            species: 'Humano',
          },
          {
            name: 'Beth Smith',
            gender: 'Mulher',
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            species: 'Humano',
          },
          {
            name: 'Jerry Smith',
            gender: 'Homem',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            species: 'Humano',
          },
        ],
      },
    }
    mockedAxios.get.mockResolvedValue(mockResponse)

    const charactersDataList = await fetchRickAndMortyCharacters()

    setTimeout(() => {
      expect(charactersDataList).toEqual([
        {
          nome: 'Rick Sanchez',
          genero: 'Homem',
          avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          especie: 'Humano',
        },
        {
          nome: 'Morty Smith',
          genero: 'Homem',
          avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          especie: 'Humano',
        },
        {
          nome: 'Summer Smith',
          genero: 'Mulher',
          avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
          especie: 'Humano',
        },
        {
          nome: 'Beth Smith',
          genero: 'Mulher',
          avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
          especie: 'Humano',
        },
        {
          nome: 'Jerry Smith',
          genero: 'Homem',
          avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
          especie: 'Humano',
        },
      ])
    }, 1000)
  })
})
