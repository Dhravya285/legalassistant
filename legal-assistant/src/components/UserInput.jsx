"use client"

import { useState } from "react"

export default function UserInput({ inputType, onSubmit }) {
  const [problem, setProblem] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleVoiceInput = () => {
    // In a real app, this would activate speech recognition
    setIsRecording(!isRecording)
    if (isRecording) {
      // Simulate voice recognition result
      setTimeout(() => {
        setProblem("My landlord is forcing me to leave in 2 days, and I haven't done anything wrong.")
        setIsRecording(false)
      }, 2000)
    }
  }

  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold">
          {inputType === "voice" ? "🎙️ Speak your legal issue" : "📲 Type your legal issue"}
        </h2>
        <p className="text-gray-400 mt-2">Describe your situation in detail for better assistance</p>
      </div>
      <div className="p-6 space-y-4">
        {inputType === "text" ? (
          <textarea
            placeholder="Example: My landlord is forcing me to leave in 2 days, and I haven't done anything wrong."
            className="w-full min-h-32 p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
        ) : (
          <div className="space-y-4">
            <button
              className={`w-full py-8 flex items-center justify-center gap-2 rounded-md border border-gray-700 transition-colors ${isRecording ? "bg-red-900 hover:bg-red-800" : "bg-gray-800 hover:bg-gray-700"}`}
              onClick={handleVoiceInput}
            >
              {isRecording ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400"
                  >
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                  <span>Stop Recording</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                  <span>Start Speaking</span>
                </>
              )}
            </button>

            {isRecording && (
              <p className="text-center text-sm text-gray-400 animate-pulse">Listening... (Hindi/Kannada/English)</p>
            )}

            {problem && (
              <div className="p-3 bg-gray-800 rounded-md border border-gray-700">
                <p className="text-gray-300">{problem}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-6 border-t border-gray-800">
        <button
          className="w-full py-2 px-4 bg-purple-900 hover:bg-purple-800 text-white rounded-md flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => onSubmit(problem)}
          disabled={!problem.trim()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Submit
        </button>
      </div>
    </div>
  )
}
