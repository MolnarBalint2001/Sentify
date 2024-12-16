

import {Badge, createListCollection, Flex, Input, Separator, Text} from "@chakra-ui/react";
import {Field} from "@/components/ui/field.tsx";
import {RiArrowLeftLine, RiSettings3Fill} from "react-icons/ri"
import {useAnalyze} from "@/components/SentifyOptimus/hooks/useAnalyze.ts";
import {Button} from "@/components/ui/button.tsx"
import {HiEmojiHappy, HiEmojiSad, HiOutlineEmojiHappy, HiOutlineEmojiSad, HiStar} from "react-icons/hi"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select.tsx"

import YouTubeLogo from "../../assets/youtube.png";
import RedditLogo from "../../assets/reddit.png";
import "./SentifyOptimus.css";
import {ResultItem} from "@/components/SentifyOptimus/components/ResultItem.tsx";


const pageOptions: { label: string, value: string }[] = [
    {

        label: "You Tube",
        value: YouTubeLogo
    },
    {

        label: "Reddit",
        value: RedditLogo
    }
]

const items = createListCollection({
    items: pageOptions
})

export const SentifyOptimus = () => {


    const {
        loading,
        analyze,
        inputRef,
        invalid,
        result,
        formVisible,
        setFormVisible,
        activeModel
    } = useAnalyze();


    return <Flex direction={"column"} alignItems={"center"}>


        <Flex direction={"column"} alignItems={"center"} id={"greet"} className={`${formVisible ? "hide" : ""}`}>
            <Text fontSize={48} fontWeight={"semibold"} color={"teal.400"} zIndex={10}>Sentify-Optimus</Text>
            <Text>Discover the mood behind the message.</Text>
            <Button mt={10} onClick={() => setFormVisible(true)}>
                Try Sentify-Optimus
            </Button>
        </Flex>



        <Flex id={"analyzer-form"} alignItems={"center"} direction={"column"} width={"30%"} gap={2} mt={20}
              className={`${formVisible ? "" : "hide"}`}>
            <Button variant={"ghost"} alignSelf={"start"} onClick={()=>setFormVisible(false)}>
                <RiArrowLeftLine/>
            </Button>

            <Field label={"URL"} helperText="Enter You Tube url to get comment sentiments!"
                   invalid={invalid} errorText={"URL field is required"}>
                <Input placeholder="Enter URL" ref={inputRef}/>
            </Field>

            <Button alignSelf={"center"} colorPalette={"teal"} mt={4} loading={loading} onClick={analyze}
                    loadingText={"Analyzing..."}>
                <RiSettings3Fill/>
                Sentiment analysis
            </Button>

        </Flex>

        {
            !result ? null :

                <Flex width={"30%"} gap={4} direction={"column"} mt={10} mb={"20vh"}>
                    <Text fontWeight={"medium"} fontSize={20}>Analysis result</Text>
                    <Separator/>
                    <Flex alignItems={"center"} gap={2}>
                        <Text fontSize={20}>Execution time: {result?.execution_time?.toFixed(2)}s</Text>
                        &middot;
                        <Badge colorPalette={"gray"} fontSize={20} p={2}>{result?.text_results?.length} comments
                            analyzed</Badge>
                        &middot;
                        <Badge colorPalette={"red"} fontSize={20} p={2}>
                            {result?.nn_count}
                            <HiEmojiSad/>
                        </Badge>
                        <Badge colorPalette={"orange"} fontSize={20} p={2}>
                            {result?.n_count}
                            <HiOutlineEmojiSad/>
                        </Badge>
                        <Badge colorPalette={"gray"} fontSize={20} p={2}>
                            {result?.neu_count}
                            <HiOutlineEmojiHappy/>
                        </Badge>
                        <Badge colorPalette={"teal"} fontSize={20} p={2}>
                            {result?.p_count}
                            <HiEmojiHappy/>
                        </Badge>
                        <Badge colorPalette={"green"} fontSize={20} p={2}>
                            {result?.pp_count}
                            <HiStar/>
                        </Badge>
                    </Flex>

                    {
                        result?.text_results?.map((e: any, index: number) => {
                            return <ResultItem key={e.text} data={e} index={index}/>
                        })
                    }

                </Flex>}

    </Flex>


}