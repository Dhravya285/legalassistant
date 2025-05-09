"use client"

export default function WelcomeScreen({ onInputTypeSelect }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 text-center border-b border-gray-800">
        <h2 className="text-2xl font-bold">
          <span className="text-3xl mr-2">🧑‍⚖️</span>
          Welcome to NyayaBot
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          Your personal legal assistant. Tell me your legal issue, and I&apos;ll guide you.
        </p>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-center text-gray-300 mb-6">Choose input:</p>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="h-24 flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 transition-colors"
            onClick={() => onInputTypeSelect("voice")}
          >
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
            <span className="text-sm">🎙️ Voice</span>
            <span className="text-xs text-gray-400">(Hindi/Kannada/English)</span>
          </button>

          <button
            className="h-24 flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 transition-colors"
            onClick={() => onInputTypeSelect("text")}
          >
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-sm">📲 Text</span>
          </button>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-center text-sm text-gray-500 border-t border-gray-800">
        <p>Secure & confidential legal assistance</p>
      </div>
    </div>
  )
}
