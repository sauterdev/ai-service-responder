import { useState } from 'react'
import './App.css'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'

const App = () => {
    const [openAiResponse, setOpenAiResponse] = useState('')
    const [emailInfo, setEmailInfo] = useState({})
    return (
        <div className="min-h-screen flex">
            <LeftSide
                setOpenAiResponse={setOpenAiResponse}
                setEmailInfo={setEmailInfo}
                openAiResponse={openAiResponse}
            />
            <RightSide
                openAiResponse={openAiResponse}
                emailInfo={emailInfo}
                setEmailInfo={setEmailInfo}
            />
        </div>
    )
}

export default App
