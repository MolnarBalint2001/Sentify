import {Flex, Input, Text} from "@chakra-ui/react";
import {Button} from "@/components/ui/button.tsx";
import {RiArrowLeftLine, RiSettings3Fill} from "react-icons/ri";
import {Field} from "@/components/ui/field.tsx";
import "./SentifyMini.css";
import {useSentifyMini} from "@/components/SentifyMini/hooks/useSentifyMini.ts";
import {MiniResultItem} from "@/components/SentifyMini/MiniResultItem/MiniResultItem.tsx";

export const SentifyMini = () =>{

    const {
        inputRef,
        setFormVisible,
        formVisible,
        loading,
        analyze,
        invalid,
        result
    } = useSentifyMini();


    return <Flex flexDirection={"column"} alignItems={"center"}>


        <Flex direction={"column"} alignItems={"center"} id={"optimus-greet"} className={`${formVisible ? "hide" : ""}`}>
            <Text fontSize={48} fontWeight={"semibold"}  zIndex={10}>Sentify-Mini</Text>
            <Text>Discover the mood behind the message.</Text>
            <Button mt={10} onClick={()=>setFormVisible(true)}>
                Try Sentify-Mini
            </Button>
        </Flex>



        <Flex id={"optimus-analyzer-form"} alignItems={"center"} direction={"column"} width={"30%"} gap={2} mt={20}
              className={`${formVisible ? "" : "hide"}`}>
            <Button variant={"ghost"} alignSelf={"start"} onClick={()=>setFormVisible(false)}>
                <RiArrowLeftLine/>
            </Button>

            <Field label={"Text"} helperText="Enter custom text to analyze it." errorText={"Text is required!"} invalid={invalid}>
                <Input ref={inputRef} placeholder="Enter text"/>
            </Field>

            <Button alignSelf={"center"} colorPalette={"teal"} mt={4} loading={loading} onClick={analyze}
                    loadingText={"Analyzing..."}>
                <RiSettings3Fill/>
                Sentiment analysis
            </Button>
            {
                result ? <MiniResultItem data={result}/> : null
            }
        </Flex>


    </Flex>
}