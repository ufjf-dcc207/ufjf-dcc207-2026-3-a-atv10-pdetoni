import type { GarrafaType } from "./types";
import './Garrafa.css'

type GarrafaProps = {
    garrafa: GarrafaType
}

export default function Garrafa({garrafa}:GarrafaProps){
    return(
        <div className="garrafa">
            <dt>ID:</dt>
            <dd>{garrafa.id}</dd>

            <dt>Volume</dt>
            <dd>{garrafa.volume}</dd>
        </div>
    
    )
}