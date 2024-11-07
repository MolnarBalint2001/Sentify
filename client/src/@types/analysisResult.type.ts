



export type AnalysisResultType = {

    nn_count:number,
    n_count:number,
    neu_count:number,
    p_count:number,
    pp_count:number
    execution_time:number,
    text_results:TextResultType[]
}



export type TextResultType = {
    text:string,
    sentiment:Sentiment

}

export enum Sentiment {
    NONE = 0,
    NEGATIVE_PLUS = 1,
    NEGATIVE = 2,
    NEUTRAL = 3,
    POSITIVE = 4,
    POSITIVE_PLUS = 5

}

export const sentiments:{[key:string]:{label:string, color:string}} = {
    "NONE" : {
        label:"None",
        color:"gray"
    } ,
    "NEGATIVE_PLUS" : {
        label: "Very negative",
        color:"red",
    },
    "NEGATIVE" : {
        label: "Negative",
        color:"orange"
    },
    "NEUTRAL" : {
        label: "Neutral",
        color: "blue"
    },

    "POSITIVE" : {
        label: "Positive",
        color:"teal"
    } ,

    "POSITIVE_PLUS" : {
        label: "Very positive",
        color:"green"
    }
}