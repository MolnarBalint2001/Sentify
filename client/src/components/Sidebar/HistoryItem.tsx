import {Flex, IconButton, Text} from "@chakra-ui/react";
import {LuTrash} from "react-icons/lu";
import {memo} from "react";


export const HistoryItem = memo(() =>{


    return <Flex gap={2}>
        <Flex flexDirection={"column"}>
            <Text fontSize={14}>https:localhost:3000</Text>
            <Text fontSize={14}>{new Date().toDateString()}</Text>
        </Flex>

        <IconButton size={"sm"} variant={"ghost"} colorPalette={"red"}>
            <LuTrash />
        </IconButton>
    </Flex>
});