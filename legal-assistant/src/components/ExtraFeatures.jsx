"use client"

export default function ExtraFeatures({ onReset }) {
  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold flex items-center">
          <span className="text-green-500 mr-2">✅</span>
          Additional Resources
        </h2>
        <p className="text-gray-400 mt-2">More ways NyayaBot can help you</p>
      </div>
      <div className="p-6 space-y-4">
        <button className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors">
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
            className="mr-2 text-green-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          📚 See 3 similar cases in Karnataka
        </button>

        <button className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors">
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
            className="mr-2 text-green-500"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          🧑‍💼 Connect with a verified pro bono lawyer
        </button>

        <div className="p-3 bg-gray-800 rounded-md border border-gray-700">
          <div className="flex items-center mb-2">
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
              className="mr-2 text-green-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <p className="text-sm font-medium text-gray-300">Available in multiple languages</p>
          </div>
          <div className="flex gap-2">
            <button className="py-1 px-3 text-sm bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md">
              English
            </button>
            <button className="py-1 px-3 text-sm bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md">
              हिंदी
            </button>
            <button className="py-1 px-3 text-sm bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md">
              ಕನ್ನಡ
            </button>
          </div>
        </div>

        <button className="w-full justify-start py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center transition-colors">
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
            className="mr-2 text-green-500"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          💾 Save for future legal reference
        </button>
      </div>
      <div className="p-6 border-t border-gray-800 flex flex-col gap-2">
        <button
          className="w-full py-2 px-4 bg-green-900 hover:bg-green-800 text-white rounded-md flex items-center justify-center transition-colors"
          onClick={onReset}
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Return to Home
        </button>
        <p className="text-xs text-gray-500 text-center mt-2">
          NyayaBot - Making legal assistance accessible to everyone
        </p>
      </div>
    </div>
  )
}
