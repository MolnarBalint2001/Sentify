import {Button, Flex} from "@chakra-ui/react";
import {RiMoonFill, RiSunFill} from "react-icons/ri"
import {useColorMode} from "@/components/ui/color-mode.tsx";

export const Navbar = () =>{


    const {colorMode, toggleColorMode} = useColorMode();


    return <Flex justifyContent={"end"} width={"100%"} px={8} py={4} alignItems={"center"} position={"fixed"}>
        <div>
            <Button onClick={toggleColorMode} variant={"ghost"} colorPalette={"gray"} >
                {colorMode === "light" ? <RiMoonFill/> : <RiSunFill color={"orange"}/>}
            </Button>
        </div>
    </Flex>

}