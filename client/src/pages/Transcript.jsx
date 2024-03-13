import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Transcript = () => {
    const [button, setButton] = useState("SUMMARY")
    const { v } = useParams()
    const [title, setTitle] = useState("")
    const [channel, setChannel] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [summary, setSummary] = useState("")
    const [captions, setCaptions] = useState("")
    const [stamps, setStamps] = useState("")

    useEffect(() => {
        console.log('HERE')
        getSummary()
        getMetadata()
        getTimeStamps()
        getCaptions()
    }, [])

    const getMetadata = async () => {
        const response = await fetch(`http://127.0.0.1:5000/metadata/?v=${v}`)
        const data = await response.json()
        setTitle(data.title)
        setChannel(data.channelTitle)
        setThumbnail(data.thumbnail)
    }

    const getSummary = async () => {
        const response = await fetch(`http://127.0.0.1:5000/summary/?v=${v}`)
        const data = await response.json()
        setSummary(data.summary)
    }

    const getCaptions = async () => {
        const response = await fetch(`http://127.0.0.1:5000/subtitles/?v=${v}`)
        const data = await response.json()
        setCaptions(data.captions)
    }

    const getTimeStamps = async () => {
        const response = await fetch(`http://127.0.0.1:5000/timestamps/?v=${v}`)
        const data = await response.json()
        setStamps(data)
    }

    const getData = () => {
        if (button == "SUMMARY") {
            if (!summary) {
                return <div>Loading ...</div>
            }
            return (<div className="p-2">{summary}</div>)
        }
        else if (button == "CAPTIONS") {
            return (<div className="p-2">{captions}</div>)
        }
        else if (button == "TIMESTAMPS") {
            if (!stamps) {
                return <div>Loading ...</div>
            }
            return (
                <div className="flex flex-col gap-6">
                    {stamps.map((stamp, index) => (
                        <div className="flex flex-col gap-1"key={index}>
                            <div className="text-blue-600 flex gap-2">{stamp.start} <div className="text-black">{stamp.summary}</div></div>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="my-14 flex flex-col items-center">
            <div className="w-1/2 flex flex-col items-center gap-2 text-md">
                <a className="underline text-blue-600" href={`https://www.youtube.com/watch?v=${v}`}>Link to original video by {channel}</a>
                <div className="text-3xl font-bold text-center mb-4">{title}</div>
                {/*==<img className="w-full" src={thumbnail}></img>*/}
                <div className="flex gap-6 mb-4">
                    <button onClick={() => setButton("SUMMARY")} className="py-1 px-2 rounded-lg border border-gray-300 text-gray-800">Summary</button>
                    <button onClick={() => setButton("TIMESTAMPS")} className="py-1 px-2 rounded-md border border-gray-300 text-gray-800">Timestamps</button>
                    <button onClick={() => setButton("CAPTIONS")} className="py-1 px-2 rounded-md border border-gray-300 text-gray-800">Captions</button>
                </div>
                {getData()}
            </div>
        </div>
    )
}
  
export default Transcript
