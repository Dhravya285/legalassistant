"use client"

export default function AIResponse({ problem, analysis, onContinue }) {
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
            className="mr-2 text-orange-500"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Legal Analysis
        </h2>
        <p className="text-gray-400 mt-2">Here&apos;s what you need to know</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="p-4 bg-gray-800 rounded-md border border-gray-700">
          <div className="flex items-start mb-3">
            <div className="bg-orange-900/30 p-2 rounded-full mr-3">
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
                className="text-orange-500"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <p className="text-gray-300 text-sm">
              Your landlord cannot evict you without a 30-day written notice under the Rent Control Act (Karnataka). If
              you have a valid rent agreement and no misconduct, this eviction is illegal.
            </p>
          </div>

          <div className="pl-10 text-xs text-gray-500">
            Based on: {analysis.domain} / {analysis.intent}
          </div>
        </div>

        <div className="p-3 bg-gray-800/50 rounded-md border border-gray-800">
          <p className="text-sm text-gray-400">Your issue:</p>
          <p className="text-gray-300 text-sm mt-1">{problem}</p>
        </div>
      </div>
      <div className="p-6 border-t border-gray-800">
        <button
          className="w-full py-2 px-4 bg-orange-900 hover:bg-orange-800 text-white rounded-md transition-colors"
          onClick={onContinue}
        >
          See My Options
        </button>
      </div>
    </div>
  )
}
