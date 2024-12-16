import {Badge, Card,Text} from "@chakra-ui/react";
import {useColorMode} from "@/components/ui/color-mode.tsx";
import "./MiniResultItem.css";

type MiniResultItemProps = {
    data:any
}

export const MiniResultItem = ({data}:MiniResultItemProps) =>{

    const {colorMode} = useColorMode();

    return <Card.Root className={`result-item ${colorMode === "dark" ? "dark" : ""}`} width={"100%"}  mt={"5em"}>
        <Card.Header><Text font={"medium"} fontSize={24}>Analysis result &middot; {data.execution_time?.toFixed(2)} s</Text></Card.Header>
        <Card.Body>
            {data.text}
        </Card.Body>
        <Card.Footer>
            <Badge fontSize={20} p={2}
                   colorPalette={data.sentiment === "Positive" ? "green" : "red"}>{data.sentiment}</Badge>
            &middot;
            <Text>Prediction: {data.prediction}</Text>
        </Card.Footer>
    </Card.Root>
}