import type { GarrafaType } from "./types";
import './Garrafa.css'

type GarrafaProps = {
    garrafa: GarrafaType,
    selecionada: boolean,
    aoClicar: () => void;

}

export default function Garrafa({ garrafa, selecionada, aoClicar }: GarrafaProps) {

    return (
        <div className={`garrafa ${selecionada ? "selecionada" : ""}`} onClick={aoClicar}>
            {garrafa.cores.map((cor, index) => (
                <div key={index}
                    className={`camada ${cor.toLowerCase()}`} />
            ))}
        </div>


    )
}