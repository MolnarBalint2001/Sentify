

import "./ResultItem.css"
import {Badge, Card, Text} from "@chakra-ui/react";
import {sentiments, TextResultType} from "@/@types/analysisResult.type.ts";
import {memo} from "react";
import {useColorMode} from "@/components/ui/color-mode.tsx";



type ResultItemProps = {
    data:TextResultType,
    index:number
}

export const ResultItem = memo(({data, index}:ResultItemProps) => {

    const {colorMode} = useColorMode();
    return <Card.Root key={data.text} width={"100%"} alignSelf={"center"} className={`result-item ${colorMode === "dark" ? "dark" : ""}`}>
        <Card.Header>
            <Text fontWeight={"medium"}>#{index + 1}</Text>
        </Card.Header>
        <Card.Body>
            {data.text}
        </Card.Body>
        <Card.Footer>
            <Badge fontSize={20} p={2}
                   colorPalette={sentiments[data.sentiment].color}>{sentiments[data.sentiment].label}</Badge>
        </Card.Footer>
    </Card.Root>
})