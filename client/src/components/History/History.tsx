import {Button, Flex} from "@chakra-ui/react";
import {RiMenu2Fill} from "react-icons/ri";
import {useState} from "react";
import "./History.css"
import {BASE_API_URL} from "@/globals.ts";

export const History = () =>{

    const [opened, setOpened] = useState<boolean>(true)
    const [histories, setHistories] = useState<any[]>([])

    const getAllHistory = async () =>{
        try{
            const response = await fetch(BASE_API_URL + "/history");
            const data = await response.json();
            setHistories(histories);
        }
        catch (e){
            console.error(e)
        }


    }


    const deleteHistory = () =>{
        try{

        }
        catch (e){

        }

    }


    return <Flex position={"absolute"} direction={"column"} left={0} marginTop={20} height={"calc(100vh - 120px)"}>
        <Button variant={"ghost"} onClick={()=>setOpened(prevState => !prevState)} ml={2}>
            <RiMenu2Fill/>
            {opened ? "Hide history" : "Show history"}
        </Button>
        <Flex className={`history-content ${opened ? "" : "hide"}`} direction={"column"} alignItems={"center"} gap={2}>
            <div>History 1</div>
            <div>History 2</div>
            <div>History 3</div>
            <div>History 4</div>
        </Flex>
    </Flex>

}