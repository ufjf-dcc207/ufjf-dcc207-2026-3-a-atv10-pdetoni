import { data } from "./GarrafaContext";
import type { GarrafaType } from "./types";

type Transferir = {
    type: "transferir",
    origemId: string,
    destinoId: string
}

type Reiniciar = {
    type: "reiniciar"
}

export type AcaoGarrafa = Transferir | Reiniciar;

export default function garrafaReducer(state: Array<GarrafaType>, action: AcaoGarrafa): Array<GarrafaType> {



    switch (action.type) {
        case "transferir":
            return transferirGarrafa(state, action);
        case "reiniciar":
            return structuredClone(data);

        default:
            return state;
    }
}

function transferirGarrafa(state: Array<GarrafaType>, action: Transferir): Array<GarrafaType> {
    let origem = state.find(g => g.id === action.origemId);
    let destino = state.find(g => g.id === action.destinoId);

    if (!origem || !destino || origem.id === destino.id) {
        return state;
    }

    if (origem.cores.length > 0 && destino.cores.length < 3 && (origem.cores.at(-1) === destino.cores.at(-1) || destino.cores.length == 0)) {
        const cor = origem.cores.pop();
        if (cor) {
            destino.cores.push(cor);
        }
    }

    return [...state];
}