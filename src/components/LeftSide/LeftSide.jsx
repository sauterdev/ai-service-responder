/* eslint-disable react/prop-types */
import React from 'react'
import FormField from './FormField'

const LeftSide = ({ setOpenAiResponse }) => {
    return (
        <div className="flex-1 bg-slate-500 border-r-2 border-slate-700 p-4">
            <h1 className="text-center text-3xl underline pb-3">
                Service Request
            </h1>
            <FormField setOpenAiResponse={setOpenAiResponse} />
        </div>
    )
}

export default LeftSide
