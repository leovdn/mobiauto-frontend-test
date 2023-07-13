import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

interface Car {
  codigo: number
  nome: string
}

interface Model {
  codigo: number
  nome: string
}

interface Year {
  codigo: string | number
  nome: string
}

interface FipeSearchContextProps {
  carList: Car[]
  modelList: Model[]
  yearList: Year[]
  isLoading: boolean
  error: Error | null
  selectCar: (carId: number) => void
  selectModel: (modelId: number) => void
  selectYear: (yearId: string) => void
}

export const FipeSearchContext = createContext<FipeSearchContextProps>({
  carList: [],
  modelList: [],
  yearList: [],
  isLoading: false,
  error: null,
  selectCar: () => {},
  selectModel: () => {},
  selectYear: () => {},
})

export function FipeSearchProvider({
  children,
  initialCarList,
}: {
  children: React.ReactNode
  initialCarList: Car[]
}) {
  const [carList, setCarList] = useState<Car[]>(initialCarList)
  const [modelList, setModelList] = useState<Model[]>([])
  const [yearList, setYearList] = useState<Model[]>([])
  const [selectedCar, setSelectedCar] = useState<number | null>(null)
  const [selectedModel, setSelectedModel] = useState<number | null>(null)
  const [selectedYear, setselectedYear] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchModels() {
      if (selectedCar) {
        setIsLoading(true)
        setError(null)

        try {
          const response = await axios.get(
            `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedCar}/modelos`
          )
          const data = response.data
          setModelList(data.modelos)
          setYearList(data.anos)

          //ajustar
        } catch (error: any) {
          setError(error)
        }

        setIsLoading(false)
      }
    }

    fetchModels()
  }, [selectedCar])

  const selectCar = (carId: number) => {
    setSelectedCar(carId)
  }

  const selectModel = (modelId: number) => {
    setSelectedModel(modelId)
  }

  const selectYear = (yearId: string) => {
    setselectedYear(yearId)
  }

  return (
    <FipeSearchContext.Provider
      value={{
        carList,
        modelList,
        isLoading,
        error,
        selectCar,
        selectModel,
        selectYear,
        yearList,
      }}
    >
      {children}
    </FipeSearchContext.Provider>
  )
}
