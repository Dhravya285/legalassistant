"use client"

import { useState } from "react"
import WelcomeScreen from "./WelcomeScreen"
import UserInput from "./UserInput"
import AIAnalysis from "./AIAnalysis"
import AIResponse from "./AIResponse"
import UserOptions from "./UserOptions"
import DocumentGenerator from "./DocumentGenerator"
import ExtraFeatures from "./ExtraFeatures"

export default function Page() {
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState({
    inputType: null,
    problem: "",
    userName: "",
    landlordName: "",
    address: "",
    durationOfStay: "",
  })

  const [analysis, setAnalysis] = useState({
    domain: "",
    intent: "",
    urgency: "",
  })

  const updateUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const goToStep = (stepNumber) => {
    setStep(stepNumber)
  }

  // Mock function to simulate AI analysis
  const analyzeInput = (problem) => {
    // In a real app, this would call your AI backend
    setAnalysis({
      domain: "Landlord-Tenant",
      intent: "Unlawful eviction",
      urgency: "High",
    })
    nextStep()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-950 text-gray-100">
      <div className="w-full max-w-md mx-auto">
        {step === 1 && (
          <WelcomeScreen
            onInputTypeSelect={(type) => {
              updateUserData({ inputType: type })
              nextStep()
            }}
          />
        )}

        {step === 2 && (
          <UserInput
            inputType={userData.inputType}
            onSubmit={(problem) => {
              updateUserData({ problem })
              analyzeInput(problem)
            }}
          />
        )}

        {step === 3 && <AIAnalysis analysis={analysis} onContinue={nextStep} />}

        {step === 4 && <AIResponse problem={userData.problem} analysis={analysis} onContinue={nextStep} />}

        {step === 5 && (
          <UserOptions
            onOptionSelect={(option) => {
              if (option === "document") {
                goToStep(6)
              } else if (option === "info") {
                goToStep(7)
              }
            }}
          />
        )}

        {step === 6 && (
          <DocumentGenerator userData={userData} updateUserData={updateUserData} onComplete={() => goToStep(7)} />
        )}

        {step === 7 && (
          <ExtraFeatures
            onReset={() => {
              setStep(1)
              setUserData({
                inputType: null,
                problem: "",
                userName: "",
                landlordName: "",
                address: "",
                durationOfStay: "",
              })
            }}
          />
        )}
      </div>
    </main>
  )
}
