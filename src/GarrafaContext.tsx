import { createContext, useReducer, type ReactNode } from "react"
import type { AcaoGarrafa } from "./garrafaReducer";
import {} from "react";
import React from "react";
import garrafaReducer from "./garrafaReducer";
import type { GarrafaType } from "./types";

const data: Array<GarrafaType> = [

]

export const GarrafaContext = createContext<Array<GarrafaType[]>>([]);
export const GarrafaDispatcherContext = createContext<React.Dispatch<AcaoGarrafa | null> (null);

export function GarrafaProvider(children: ReactNode){

    const [garrafas, dispacher] = useReducer(garrafaReducer, data);

    <GarrafaContext value={garrafas}>
        <GarrafaDispatcherContext value={dispacher}>
            {children}
        </GarrafaDispatcherContext>
    </GarrafaContext>


}





