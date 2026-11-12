import './App.css'
import { GarrafaProvider } from './GarrafaContext'
import ListagemDeGarrafas from './ListagemDeGarrafas'

export default function App() {

  return (
    <GarrafaProvider>
      <ListagemDeGarrafas />
    </GarrafaProvider>

  )
}


