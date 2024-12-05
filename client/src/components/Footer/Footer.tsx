import {Flex, Text} from "@chakra-ui/react";
import YouTubeLogo from "../../assets/youtube.png";
import RedditLogo from "../../assets/reddit.png";

export const Footer = () => {


    return <Flex position={"absolute"} bottom={0} justifyContent={"start"} alignItems={"center"} gap={2} width={"100%"}
                 p={4}>
        
        <Flex alignItems={"center"} gap={2} width={400}>
            <Text fontWeight={"semibold"}>Sentify</Text>
            &middot;
            <Text>Supported content review analysis:</Text>
        </Flex>

        <Flex alignItems={"center"} width={"100%"} gap={4}>
            <Flex alignItems={"center"} gap={2}>
                <img src={YouTubeLogo}/>
                <Text>You Tube</Text>
            </Flex>
            &middot;
            <Flex alignItems={"center"} gap={2}>
                <img src={RedditLogo}/>
                <Text>Reddit</Text>
            </Flex>
        </Flex>
    </Flex>
}