import { useContext, useState } from "react";
import type { GarrafaType } from "./types";
import { GarrafaContext } from "./GarrafaContext";
import Garrafa from "./Garrafa";

export default function ListagemDeGarrafas(){

    const garrafas = useContext(GarrafaContext);
    const [criterioOrdenacao, setCriterio] = useState("cor");

    function setOrdenacao(evento){
        setCriterio(evento.target.value);
    }

    return(
        <>
        <select onChange={setOrdenacao}>
                <option value="cor">Cor</option>
                <option value="id">ID</option>
            </select>

        {garrafas.sort((x,y)=> (x as any)[criterioOrdenacao] - (y as any)[criterioOrdenacao])
        .map(p=> <Garrafa garrafa={p} key={p.id}/>)}
        </>
        
    )

}