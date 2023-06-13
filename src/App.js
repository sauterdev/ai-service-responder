import { useState } from 'react'
import './App.css'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'

const App = () => {
    const [openAiResponse, setOpenAiResponse] = useState('')
    console.log(openAiResponse)
    return (
        <div className="min-h-screen flex">
            <LeftSide setOpenAiResponse={setOpenAiResponse} />
            <RightSide openAiResponse={openAiResponse} />
        </div>
    )
}

export default App
