import {useAppSelector} from "@/hooks.ts";
import {SentifyOptimus} from "@/components/SentifyOptimus/SentifyOptimus.tsx";
import {SentifyMini} from "@/components/SentifyMini/SentifyMini.tsx";


export const AnalyzerWrapper = () =>{

    const activeModel = useAppSelector(state=>state.model.activeModel);

    if (activeModel === "optimus") return <SentifyOptimus/>
    return <SentifyMini/>

}