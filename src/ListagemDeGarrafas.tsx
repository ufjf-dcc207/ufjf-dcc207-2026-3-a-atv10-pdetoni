import { useContext, useState } from "react";
import { GarrafaContext, GarrafaDispatcherContext } from "./GarrafaContext";
import Garrafa from "./Garrafa";

// Componente responsável por exibir todas as garrafas e controlar a interação de cliques
export default function ListagemDeGarrafas() {

    // Pega a lista de garrafas direto do contexto global
    const garrafas = useContext(GarrafaContext);
    // Pega a função para disparar ações do contexto global
    const dispacher = useContext(GarrafaDispatcherContext)!;

    // Guarda o ID da garrafa selecionada no 1º clique (ou null quando nenhuma estiver selecionada)
    const [origemId, setOrigemId] = useState<string | null>(null);

    // Função chamada toda vez que o usuário clica em uma garrafa
    function tratarClique(garrafaId: string) {

        // Se ainda não escolheu nenhuma garrafa, essa clicada agora se torna a garrafa de origem
        if (origemId === null) {
            setOrigemId(garrafaId)
            return;
        }

        // Se clicou de novo na mesma garrafa que já estava selecionada, desmarca ela (cancela a escolha)
        if (origemId === garrafaId) {
            setOrigemId(null)
            return;
        }

        // Se já havia uma garrafa selecionada e clicou em outra, dispara a ação para transferir o líquido
        dispacher({ type: "transferir", origemId: origemId, destinoId: garrafaId });
        // Limpa a seleção para reiniciar o processo de 2 cliques
        setOrigemId(null);

    }

    return (
        <>
            {/* Contêiner que organiza as garrafas lado a lado na tela */}
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
                {garrafas.map(g => (
                    <Garrafa
                        key={g.id}
                        garrafa={g}
                        // Avisa para a garrafa se ela é a que está selecionada no momento
                        selecionada={g.id === origemId}
                        // Passa a ação a ser executada quando ela for clicada
                        aoClicar={() => tratarClique(g.id)}
                    />
                ))}

            </div>

            {/* Botão que dispara a ação de resetar o jogo para o início */}
            <button onClick={() => dispacher({ type: "reiniciar" })}>Reiniciar</button>

        </>

    )

}
