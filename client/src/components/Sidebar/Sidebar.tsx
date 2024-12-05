import {Badge, Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";

import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import {useState} from "react";
import {HistoryItem} from "@/components/Sidebar/HistoryItem.tsx";

export const Sidebar = () => {
    const [value, setValue] = useState(["models"])

    return <Stack gap="4" position={"fixed"} height={"100%"} left={0} alignItems={"start"} padding={"1em"}>
        <Flex flexWrap={"wrap"} gap={2}>
            <Text fontWeight="medium" marginLeft={"1.5em"}>Sentify</Text>
            <Badge colorPalette={"teal"}>2 models</Badge>
            &middot;
            <Badge colorPalette={"yellow"}>webscraping</Badge>
            &middot;
            <Badge colorPalette={"purple"}>user input</Badge>
        </Flex>

        <AccordionRoot variant={"enclosed"} multiple margin={"0.5em"} value={value} onValueChange={(e) => setValue(e.value)} width={240}>
            <AccordionItem key={1} value={"models"}>
                <AccordionItemTrigger>Models</AccordionItemTrigger>
                <AccordionItemContent>
                    <Stack alignItems={"start"}>
                        <Button variant={"ghost"}>Sentify-Mini</Button>
                        <Button colorPalette={"teal"} variant={"ghost"}>Sentify-Optimus</Button>
                    </Stack>
                </AccordionItemContent>
            </AccordionItem>

            <AccordionItem key={2} value={"history"}>
                <AccordionItemTrigger>History</AccordionItemTrigger>
                <AccordionItemContent>
                    <Stack height={"50vh"} overflowX={"hidden"}>
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

