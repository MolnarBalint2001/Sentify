import {Button, Flex, Text} from "@chakra-ui/react";
import {RiMoonFill, RiSunFill} from "react-icons/ri"
import {useColorMode} from "@/components/ui/color-mode.tsx";

export const Navbar = () =>{


    const {colorMode, toggleColorMode} = useColorMode();


    return <Flex justifyContent={"space-between"} width={"100%"} px={8} py={4} alignItems={"center"} position={"fixed"}>

        <Flex gap={2} alignItems={"center"}>
            <img src={"https://img.icons8.com/?size=32&id=57136&format=png&color=10CF95"}/>
            <Text fontWeight={"semibold"} fontSize={24}>Sentify</Text>
        </Flex>

        <div>
            <Button onClick={toggleColorMode} variant={"ghost"} colorPalette={"gray"} >
                {colorMode === "light" ? <RiMoonFill/> : <RiSunFill color={"orange"}/>}
            </Button>
        </div>


    </Flex>

}