import {useRef, useState} from "react";
import {BASE_API_URL} from "@/globals.ts";


export const useSentifyMini = () =>{

    //States
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [invalid, setInvalid] = useState<boolean>(false);
    const [result, setResult] = useState<any>(null);


    //Refs
    const inputRef = useRef<HTMLInputElement>(null)


    const analyze = async () =>{
        setLoading(true)
        const text = inputRef.current?.value;
        if (!text || text.length === 0){
            setInvalid(true);
            return;
        }


        try{
            const response = await fetch(BASE_API_URL + "/mini-analyze", {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({text:text})
            });
            const data = await response.json();
            setResult(data.result);
        }
        catch (e){

        }
        finally {
            setLoading(false);
        }
    }

    return {
        setFormVisible,
        formVisible,
        inputRef,
        analyze,
        loading,
        invalid,
        result
    }
}