import './App.css'
import { GarrafaProvider } from './GarrafaContext'
import ListagemDeGarrafas from './ListagemDeGarrafas'

export default function App() {

  return (
    //Componente que envolve o projeto passando o contexto necessário, como o objeto da lista de dados e o objeto que controla as ações feitas
    <GarrafaProvider>
      <ListagemDeGarrafas />
    </GarrafaProvider>

  )
}


