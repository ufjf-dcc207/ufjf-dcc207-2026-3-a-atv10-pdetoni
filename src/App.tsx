import './App.css'
import Garrafa from './Garrafa'
import { GarrafaContext, GarrafaDispatcherContext, GarrafaProvider } from './GarrafaContext'
import ListagemDeGarrafas from './ListagemDeGarrafas'

export default function App() {

  return (
    <GarrafaProvider>
       <ListagemDeGarrafas/>
    </GarrafaProvider>  

  )
}


