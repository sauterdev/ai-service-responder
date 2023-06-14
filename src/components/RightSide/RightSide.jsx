/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

// eslint-disable-next-line no-undef
// const serviceKey = process.env.REACT_APP_SERVICE_KEY
// eslint-disable-next-line no-undef
// const templateKey = process.env.REACT_APP_TEMPLATE_KEY
// eslint-disable-next-line no-undef
// const publicKey = process.env.REACT_APP_PUBLIC_KEY

const RightSide = ({ openAiResponse, emailInfo, setEmailInfo }) => {
    const [displayedResponse, setDisplayedResponse] = useState('')

    //hook to control letter by letter display. Runs when AiResponse changes

    useEffect(() => {
        let interval

        setDisplayedResponse('')

        if (openAiResponse) {
            setDisplayedResponse(openAiResponse[0])
            let index = 0

            interval = setInterval(() => {
                if (index < openAiResponse.length - 1) {
                    setDisplayedResponse(
                        (prevResponse) => prevResponse + openAiResponse[index]
                    )
                    index++
                } else {
                    clearInterval(interval)
                }
            }, 30)
        }
        // cleanup function to clear timer when component unmounts or AiResponse value changes
        return () => {
            clearInterval(interval)
        }
    }, [openAiResponse])

    const sendEmail = (e) => {
        e.preventDefault()

        let aiAnswer = openAiResponse
        let updatedEmail = {
            response: `${aiAnswer}`,
        }
        setEmailInfo((emailInfo) => ({
            ...emailInfo,
            ...updatedEmail,
        }))
        console.log('Email Info ', emailInfo)
        let templateParams = { ...emailInfo }

        console.log('templateParams', templateParams)

        emailjs
            .send(
                'service_ancho0a',
                'template_g9zfiwn',
                templateParams,
                'whVBFd8aEimLmVumD'
            )
            .then(
                (result) => {
                    console.log('Success!', result.text, result.status)
                },
                (error) => {
                    console.log('Failed...', error.text)
                }
            )
    }

    return (
        <div className="flex-1 bg-slate-500 border-r-2 border-slate-700 p-4">
            <h1 className="text-center text-3xl underline pb-3">
                Generated Response:
            </h1>
            <div className="w-full max-w-xs m-auto max-h-full">
                <div className=" bg-slate-300 shadow-md px-8 pt-6 pb-4 rounded-b-none">
                    {displayedResponse}
                </div>
                <div className=" bg-slate-300 shadow-md rounded-t-none px-8 pt-3 pb-8 flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={sendEmail}
                    >
                        Send Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightSide
