import { data } from "./GarrafaContext";
import type { GarrafaType } from "./types";

// Tipos de ações permitidas no jogo:
// 1. Transferir líquido de uma garrafa de origem para uma de destino
type Transferir = {
    type: "transferir",
    origemId: string,
    destinoId: string
}

// 2. Reiniciar o jogo voltando para a configuração inicial
type Reiniciar = {
    type: "reiniciar"
}

// União de todas as ações que o jogo aceita
export type AcaoGarrafa = Transferir | Reiniciar;

// Função Reducer: recebe o estado atual das garrafas e a ação solicitada,
// e devolve o novo estado atualizado com base no tipo da ação.
export default function garrafaReducer(state: Array<GarrafaType>, action: AcaoGarrafa): Array<GarrafaType> {

    switch (action.type) {
        case "transferir":
            // Executa a lógica de passar a cor de uma garrafa para outra
            return transferirGarrafa(state, action);

        case "reiniciar":
            // Reseta as garrafas para o estado inicial fazendo uma cópia limpa
            return structuredClone(data);

        default:
            // Caso receba alguma ação desconhecida, apenas mantém o estado como está
            return state;
    }
}

// Função auxiliar que cuida de toda a regra do jogo ao mover um líquido
function transferirGarrafa(state: Array<GarrafaType>, action: Transferir): Array<GarrafaType> {
    // Procura a garrafa de onde vai sair a cor e a garrafa que vai receber
    let origem = state.find(g => g.id === action.origemId);
    let destino = state.find(g => g.id === action.destinoId);

    // Se alguma das garrafas não existir ou se clicou na mesma garrafa duas vezes, não faz nada
    if (!origem || !destino || origem.id === destino.id) {
        return state;
    }

    // Regras para poder despejar o líquido:
    // 1. A garrafa de origem precisa ter líquido (cores.length > 0)
    // 2. A garrafa de destino não pode estar cheia (menos de 3 cores)
    // 3. A cor do topo da origem tem que ser igual à do topo do destino OU o destino precisa estar vazio
    if (origem.cores.length > 0 && destino.cores.length < 3 && (origem.cores.at(-1) === destino.cores.at(-1) || destino.cores.length == 0)) {
        // Tira a cor do topo da garrafa de origem
        const cor = origem.cores.pop();
        if (cor) {
            // Coloca essa cor no topo da garrafa de destino
            destino.cores.push(cor);
        }
    }

    // Retorna um novo array para o React perceber a mudança e redesenhar a tela
    return [...state];
}
