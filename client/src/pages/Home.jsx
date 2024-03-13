import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    let navigate = useNavigate()
    const [input, setInput] = useState("")

    const handleSubmitButton = () => {
        const videoId = input.split("v=")[1]
        let path = `transcript/${videoId}`
        // add count to local storage
        navigate(path)
    }

    return (
        <div className="flex flex-col justify-center items-center text-center gap-16 mt-40">
            <div>
                <div className="text-7xl font-bold mb-2">Save time on videos, <br></br> Get summaries instantly</div>
                <div className="text-3xl font-semibold">Powered by AI</div>
            </div>
            <div className="flex gap-4 w-3/4">
                <input onChange={(e) => setInput(e.target.value)} value={input} className="w-full px-4 py-1.5 text-xl border-4 border-blue-200 focus:border-blue-500 rounded-md" name="input" placeholder="URL of YouTube Video"/>
                <button onClick={() => handleSubmitButton()} className="py-2 px-6 rounded-md bg-black text-white text-xl font-semibold">SUBMIT</button>
            </div>
        </div>
    )
}
  
export default Home
