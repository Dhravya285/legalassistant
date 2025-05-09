"use client"

export default function AIAnalysis({ analysis, onContinue }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-yellow-500"
          >
            <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
          AI Understanding Your Issue
        </h2>
        <p className="text-gray-400 mt-2">NyayaBot is analyzing your legal situation</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-center my-4">
          <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500 animate-pulse"
            >
              <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-gray-800 rounded-md border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Legal domain:</p>
            <p className="font-medium text-yellow-500">{analysis.domain}</p>
          </div>

          <div className="p-3 bg-gray-800 rounded-md border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Intent:</p>
            <p className="font-medium text-yellow-500">{analysis.intent}</p>
          </div>

          <div className="p-3 bg-gray-800 rounded-md border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Urgency:</p>
            <p className="font-medium text-yellow-500">{analysis.urgency}</p>
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-gray-800">
        <button
          className="w-full py-2 px-4 bg-yellow-900 hover:bg-yellow-800 text-white rounded-md transition-colors"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
