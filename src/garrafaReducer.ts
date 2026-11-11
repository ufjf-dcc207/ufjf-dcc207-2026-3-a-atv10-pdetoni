import Garrafa from "./Garrafa";
import type { GarrafaType } from "./types";

type EncherGarrafa = {
    type: "encher",
    id: "string"
}

type EsvaziarGarrafa = {
    type: "esvaziar",
    id: "string"
}

export type AcaoGarrafa = EncherGarrafa | EsvaziarGarrafa;

export default function garrafaReducer(state: Array<GarrafaType>, action: AcaoGarrafa): Array<GarrafaType>{
    switch (action.type) {
        case "encher":
            return null;

        case "esvaziar":
            return null;

        default:
            return state;
    }
}