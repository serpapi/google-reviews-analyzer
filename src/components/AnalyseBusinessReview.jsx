import { useState, useEffect, useCallback } from "react"
import axios from "axios"

export default function AnalyseBusinessReview({ title, dataId, onDismiss }) {
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState("")

  const retrieveIntelligentAnswer = useCallback(async () => {
    if (!dataId) return
    
    setLoading(true)
    try {
      const { data } = await axios
        .get(`/intelligent-answer?dataId=${dataId}`)
      setAnswer(data.text)
    } catch(e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [dataId])

  useEffect(() => {
    if (!dataId) setAnswer("")
    else retrieveIntelligentAnswer()
  }, [dataId, retrieveIntelligentAnswer])
  
  return (
    dataId ? 
      <div className="fixed inset-0 bg-[#00000088]">
        <div className="absolute rounded shadow w-4/5 max-w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
          <div className="border-b border-b-gray-100 px-4 py-2">
            <h4 className="text-xl">{title}</h4>
          </div>
          <div className="p-4">
            {loading ? <div className="text-gray-400">Thinking...in the zone...</div> : <div dangerouslySetInnerHTML={{ __html: answer.replace(/\n/g, "<br />") }} />}
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white p-2 rounded shadow text-sm mt-8" onClick={onDismiss}>Done</button>
            </div>
          </div>
        </div>
      </div> 
      : null
  )
}