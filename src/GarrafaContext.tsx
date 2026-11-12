import { createContext, useReducer, type ReactNode, type Dispatch } from "react"
import type { AcaoGarrafa } from "./garrafaReducer";
import garrafaReducer from "./garrafaReducer";
import type { GarrafaType } from "./types";

export const data: Array<GarrafaType> = [
    { id: "g1", volume: 3, cores: ["Vermelho", "Amarelo", "Verde"] },
    { id: "g2", volume: 3, cores: ["Vermelho", "Verde", "Amarelo"] },
    { id: "g3", volume: 3, cores: [] },
    { id: "g4", volume: 3, cores: [] }
]

export const GarrafaContext = createContext<Array<GarrafaType>>([]);
export const GarrafaDispatcherContext = createContext<Dispatch<AcaoGarrafa> | null>(null);

type GarrafaContextProps = {
    children: ReactNode
}

export function GarrafaProvider({ children }: GarrafaContextProps) {

    const [garrafas, dispacher] = useReducer(garrafaReducer, structuredClone(data));

    return (
        <GarrafaContext value={garrafas}>
            <GarrafaDispatcherContext value={dispacher}>
                {children}
            </GarrafaDispatcherContext>
        </GarrafaContext>
    )

}





