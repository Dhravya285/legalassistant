"use client"

export default function UserOptions({ onOptionSelect }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-purple-500 mr-2">📝</span>
          What would you like to do?
        </h2>
        <p className="text-gray-400 mt-2">Choose your next steps</p>
      </div>
      <div className="p-6 space-y-3">
        <button
          className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors"
          onClick={() => onOptionSelect("document")}
        >
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
            className="mr-2 text-purple-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          Generate a legal notice to send to your landlord
        </button>

        <button
          className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors"
          onClick={() => onOptionSelect("cases")}
        >
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
            className="mr-2 text-purple-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          View similar real cases
        </button>

        <button
          className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors"
          onClick={() => onOptionSelect("lawyer")}
        >
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
            className="mr-2 text-purple-500"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Talk to a legal NGO or lawyer near you
        </button>

        <button
          className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors"
          onClick={() => onOptionSelect("info")}
        >
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
            className="mr-2 text-purple-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Just wanted info ✅
        </button>
      </div>
      <div className="px-6 py-4 text-xs text-gray-500 border-t border-gray-800 text-center">
        <p>All options are free and confidential</p>
      </div>
    </div>
  )
}
