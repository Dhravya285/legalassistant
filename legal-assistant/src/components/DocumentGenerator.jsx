"use client"

import { useState } from "react"

export default function DocumentGenerator({ userData, updateUserData, onComplete }) {
  const [documentGenerated, setDocumentGenerated] = useState(false)

  const handleGenerateDocument = () => {
    // In a real app, this would call your backend to generate the document
    setDocumentGenerated(true)
  }

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
            className="mr-2 text-blue-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          Generate Legal Notice
        </h2>
        <p className="text-gray-400 mt-2">
          {documentGenerated ? "Your legal notice is ready" : "Please provide the following details"}
        </p>
      </div>
      <div className="p-6 space-y-4">
        {!documentGenerated ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-300">
                Your Full Name
              </label>
              <input
                id="userName"
                placeholder="Enter your full name"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userData.userName}
                onChange={(e) => updateUserData({ userName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="landlordName" className="block text-sm font-medium text-gray-300">
                Landlord's Name (if known)
              </label>
              <input
                id="landlordName"
                placeholder="Enter landlord's name"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userData.landlordName}
                onChange={(e) => updateUserData({ landlordName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                Property Address
              </label>
              <input
                id="address"
                placeholder="Enter property address"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userData.address}
                onChange={(e) => updateUserData({ address: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="durationOfStay" className="block text-sm font-medium text-gray-300">
                Duration of Stay
              </label>
              <input
                id="durationOfStay"
                placeholder="How long have you lived there?"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userData.durationOfStay}
                onChange={(e) => updateUserData({ durationOfStay: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-md border border-gray-700 max-h-60 overflow-y-auto">
              <p className="text-sm text-gray-300 mb-3">
                <strong>LEGAL NOTICE</strong>
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Date:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>To:</strong> {userData.landlordName || "The Landlord/Owner"}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>From:</strong> {userData.userName}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Subject:</strong> Notice Against Illegal Eviction
              </p>
              <p className="text-sm text-gray-300 mb-3">
                This letter serves as notice that your attempt to evict me without due legal process is in violation of
                the Karnataka Rent Control Act. As a tenant who has occupied the premises at {userData.address} for{" "}
                {userData.durationOfStay}, I am entitled to a minimum 30-day written notice period before any eviction
                proceedings can be initiated.
              </p>
              <p className="text-sm text-gray-300 mb-3">
                Your demand that I vacate the premises within 2 days is unlawful and constitutes harassment under
                Section 45 of the Karnataka Rent Control Act. I request that you immediately cease all eviction attempts
                that do not follow proper legal procedure.
              </p>
              <p className="text-sm text-gray-300 mb-3">
                Should you wish to proceed with an eviction, please provide a formal written notice stating valid
                grounds as per the Act. Failure to comply with legal requirements may result in legal action against
                you.
              </p>
              <p className="text-sm text-gray-300">
                Sincerely,
                <br />
                {userData.userName}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center justify-center transition-colors">
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </button>
              <button className="flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center justify-center transition-colors">
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
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print
              </button>
              <button className="flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md flex items-center justify-center transition-colors">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 border-t border-gray-800">
        {!documentGenerated ? (
          <button
            className="w-full py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleGenerateDocument}
            disabled={!userData.userName || !userData.address}
          >
            Generate Legal Notice
          </button>
        ) : (
          <button
            className="w-full py-2 px-4 bg-green-900 hover:bg-green-800 text-white rounded-md transition-colors"
            onClick={onComplete}
          >
            Continue to More Options
          </button>
        )}
      </div>
    </div>
  )
}
