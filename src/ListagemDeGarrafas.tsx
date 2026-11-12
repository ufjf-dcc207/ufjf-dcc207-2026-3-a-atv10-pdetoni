import { useContext, useState } from "react";
import { GarrafaContext, GarrafaDispatcherContext } from "./GarrafaContext";
import Garrafa from "./Garrafa";

export default function ListagemDeGarrafas() {

    const garrafas = useContext(GarrafaContext);
    const dispacher = useContext(GarrafaDispatcherContext)!;

    const [origemId, setOrigemId] = useState<string | null>(null);

    function tratarClique(garrafaId: string) {

        if (origemId === null) {
            setOrigemId(garrafaId)
            return;
        }

        if (origemId === garrafaId) {
            setOrigemId(null)
            return;
        }

        dispacher({ type: "transferir", origemId: origemId, destinoId: garrafaId });
        setOrigemId(null);

    }

    return (
        <>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
                {garrafas.map(g => (
                    <Garrafa
                        key={g.id}
                        garrafa={g}
                        selecionada={g.id === origemId}
                        aoClicar={() => tratarClique(g.id)}
                    />
                ))}

            </div>

            <button onClick={() => dispacher({ type: "reiniciar" })}>Reiniciar</button>

        </>

    )

}