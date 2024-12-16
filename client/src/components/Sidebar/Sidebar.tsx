import {Badge, Flex, Stack, Text, VStack} from "@chakra-ui/react";

import {AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot,} from "@/components/ui/accordion"
import {useState} from "react";
import {HistoryItem} from "@/components/Sidebar/HistoryItem.tsx";
import {Tooltip} from "@/components/ui/tooltip"
import {useAppDispatch} from "@/hooks.ts";
import {setActiveModel} from "@/store/model.slice.ts";
import {RadioCardItem, RadioCardLabel, RadioCardRoot,} from "@/components/ui/radio-card"


type ModelItemType = {
    key:string,
    label:string,
    description:string,
    value:string
}

const items : ModelItemType[] = [
    {
        key:"optimus",
        label:"sentify-optimus v1.0.0",
        description:"A sentiment analysis model designed to process comments scraped from YouTube. The model classifies sentiments as positive, negative, or neutral using advanced machine learning techniques to understand and interpret user opinions.",
        value:"optimus",
    },
    {
        key:"mini",
        label:"sentify-mini v1.0.0",
        description:"A lightweight sentiment analysis model that takes text input and classifies it as positive, negative, or neutral. Designed for quick processing and simplicity, it focuses solely on analyzing the sentiment of the provided text without requiring external datasets or integrations.",
        value:"mini",
    }
]

export const Sidebar = () => {
    const [value, setValue] = useState(["models"]);


    const dispatch = useAppDispatch();


    const handleModelChange = (modelName:string) =>{
        dispatch(setActiveModel(modelName))
    }

    return <Stack gap="4" position={"fixed"} height={"100%"} left={0} alignItems={"start"} padding={"1em"}>
        <Flex flexWrap={"wrap"} gap={2}>
            <Text fontWeight="medium" marginLeft={"1.5em"}>Sentify</Text>
            <Badge>2 models</Badge>
        </Flex>

        <AccordionRoot variant={"enclosed"} multiple margin={"0.5em"} value={value} onValueChange={(e) => setValue(e.value)} width={400}>
            <AccordionItem key={1} value={"models"}>
                <AccordionItemTrigger>Models</AccordionItemTrigger>
                <AccordionItemContent>
                    <Stack alignItems={"start"}>
                        <RadioCardRoot defaultValue="next">
                            <RadioCardLabel>Select model</RadioCardLabel>
                            <VStack align="stretch">
                                {items.map((item:any) => (
                                    <Tooltip content={item.description} showArrow positioning={{placement:"bottom-end"}}>
                                        <RadioCardItem
                                            colorPalette={"teal"}
                                            onClick={()=>handleModelChange(item.value)}
                                            label={item.label}
                                            description={item.description.slice(0,50) + "..."}
                                            key={item.key}
                                            value={item.value}
                                        />
                                    </Tooltip>

                                ))}
                            </VStack>
                        </RadioCardRoot>
                    </Stack>
                </AccordionItemContent>
            </AccordionItem>

            <AccordionItem key={2} value={"history"} display={"none"}>
                <AccordionItemTrigger>History</AccordionItemTrigger>
                <AccordionItemContent>
                    <Stack height={"50vh"} overflowX={"hidden"} width={"100%"}>
                        {
                            Array.from([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]).map((e)=>{
                                return <HistoryItem key={e}/>
                            })
                        }
                    </Stack>
                </AccordionItemContent>
            </AccordionItem>

        </AccordionRoot>
    </Stack>
}

