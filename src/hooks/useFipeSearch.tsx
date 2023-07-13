import { FipeSearchContext } from '@/context/FipeSearchContext'
import { useContext } from 'react'

export default function useFipeSearch() {
  return useContext(FipeSearchContext)
}
