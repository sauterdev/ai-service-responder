/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const RightSide = ({ openAiResponse }) => {
    const [displayedResponse, setDisplayedResponse] = useState('')

    //hook to control letter by letter display. Runs when AiResponse changes
    useEffect(() => {
        let timer
        let index = 0 //keeps track of the current AiResponse string being displayed

        const displayedLetters = () => {
            //updates displayed response one letter at at time
            setDisplayedResponse(
                (prevResponse) => prevResponse + openAiResponse[index]
            )

            if (index < openAiResponse.length - 1) {
                //sets a timer for next letter
                index++
                timer = setTimeout(displayedLetters, 30)
            }
        }

        setDisplayedResponse('')
        //start displaying letters if Airesponse exists
        if (openAiResponse) {
            displayedLetters()
        }

        //cleanup function to clear timer when component unmounts or AiResponse value changes
        return () => {
            clearTimeout(timer)
        }
    }, [openAiResponse])

    return (
        <div className="flex-1 bg-slate-500 border-r-2 border-slate-700 p-4">
            <h1 className="text-center text-3xl underline pb-3">
                Generated Response:
            </h1>
            <div>{displayedResponse}</div>
        </div>
    )
}

export default RightSide
