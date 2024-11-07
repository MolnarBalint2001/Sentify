import {useRef, useState} from "react";
import {BASE_API_URL} from "@/globals.ts";
import {AnalysisResultType} from "@/@types/analysisResult.type.ts";


export const useAnalyze = () =>{


    const [loading, setLoading] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [invalid, setInvalid] = useState<boolean>(false);
    const [result, setResult] = useState<AnalysisResultType | null>(null);
    const [formVisible, setFormVisible] = useState<boolean>(false);


    const analyze = async () =>{

        const url = inputRef.current?.value;
        if (!url || url?.length === 0){
            setInvalid(true);
            return;
        }
        else{
            setInvalid(false);
        }

        setLoading(true);

        try{
            const response = await fetch(BASE_API_URL + "/analyze", {
                method:"POST",
                headers:{
                  "Content-Type" : "application/json"
                },
                body:JSON.stringify({url:url})
            });
            const data = await response.json();
            console.log(data.result)
            //console.log(parsed)
            setResult(data.result)
        }
        catch (e){
            console.error(e);
        }
        finally {
            setTimeout(()=>{
                setLoading(false)
            }, 2000);
        }


    }



    return {
        loading,
        analyze,
        invalid,
        inputRef,
        result,
        formVisible,
        setFormVisible
    }
}