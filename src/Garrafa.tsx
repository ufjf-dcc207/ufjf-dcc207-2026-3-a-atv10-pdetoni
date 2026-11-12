import type { GarrafaType } from "./types";
import './Garrafa.css'

// Propriedades que a Garrafa recebe do componente pai:
// - garrafa: os dados dela (id, capacidade e cores dentro)
// - selecionada: verdadeiro se ela foi a escolhida no primeiro clique
// - aoClicar: função que avisa quando ela foi clicada
type GarrafaProps = {
    garrafa: GarrafaType,
    selecionada: boolean,
    aoClicar: () => void;
}

// Componente visual que desenha uma única garrafa na tela
export default function Garrafa({ garrafa, selecionada, aoClicar }: GarrafaProps) {

    return (
        // Se estiver selecionada, adiciona a classe CSS "selecionada" para dar destaque visual
        <div className={`garrafa ${selecionada ? "selecionada" : ""}`} onClick={aoClicar}>
            {/* Percorre cada cor que está dentro da garrafa e cria uma camada colorida */}
            {garrafa.cores.map((cor, index) => (
                <div key={index}
                    className={`camada ${cor.toLowerCase()}`} />
            ))}
        </div>
    )
}
