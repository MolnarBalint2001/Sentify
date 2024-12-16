import {Box, Flex, Text} from "@chakra-ui/react";
import YouTubeLogo from "../../assets/youtube.png";

export const Footer = () => {


    return <Flex position={"absolute"} bottom={0} justifyContent={"start"} alignItems={"center"} gap={2} width={"100%"}
                 p={4}>

        <Flex alignItems={"center"} gap={2} width={400}>
            <Text fontWeight={"semibold"}>Sentify</Text>
            &middot;
            <Flex alignItems={"center"} gap={2}>
                <img src={YouTubeLogo}/>
                <Text>You Tube</Text>
            </Flex>
            &middot;
            <Box>&#169; Balint Molnar</Box>
        </Flex>


    </Flex>
}