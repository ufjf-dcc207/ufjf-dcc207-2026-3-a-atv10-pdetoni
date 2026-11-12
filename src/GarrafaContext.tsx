import { createContext, useReducer, type ReactNode, type Dispatch } from "react"
import type { AcaoGarrafa } from "./garrafaReducer";
import garrafaReducer from "./garrafaReducer";
import type { GarrafaType } from "./types";

// Estado inicial do jogo: define como as garrafas começam (quais têm líquidos coloridos e quais começam vazias)
export const data: Array<GarrafaType> = [
    { id: "g1", volume: 3, cores: ["Vermelho", "Amarelo", "Verde"] },
    { id: "g2", volume: 3, cores: ["Vermelho", "Verde", "Amarelo"] },
    { id: "g3", volume: 3, cores: [] },
    { id: "g4", volume: 3, cores: [] }
]

// Contexto para guardar e compartilhar a lista de garrafas com os componentes
export const GarrafaContext = createContext<Array<GarrafaType>>([]);

// Contexto para compartilhar a função de disparar ações (transferir cores, reiniciar)
export const GarrafaDispatcherContext = createContext<Dispatch<AcaoGarrafa> | null>(null);

type GarrafaContextProps = {
    children: ReactNode
}

// Componente que "embrulha" os outros componentes e distribui os dados e as ações para eles
export function GarrafaProvider({ children }: GarrafaContextProps) {

    // useReducer gerencia o estado das garrafas usando a função garrafaReducer.
    // Usamos structuredClone para criar uma cópia independente dos dados iniciais.
    const [garrafas, dispacher] = useReducer(garrafaReducer, structuredClone(data));

    return (
        // Disponibiliza a lista de garrafas para quem estiver dentro
        <GarrafaContext value={garrafas}>
            {/* Disponibiliza a função de disparar ações */}
            <GarrafaDispatcherContext value={dispacher}>
                {children}
            </GarrafaDispatcherContext>
        </GarrafaContext>
    )

}






