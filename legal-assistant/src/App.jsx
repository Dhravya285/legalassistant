import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import WelcomeScreen from "./components/WelcomeScreen"
import UserInput from "./components/UserInput"
import AIAnalysis from "./components/AIAnalysis"
import AIResponse from "./components/ai-response"
import UserOptions from "./components/UserOptions"
import DocumentGenerator from "./components/DocumentGenerator"
import ExtraFeatures from "./components/ExtraFeatures"
import "./components/globals.css"

// Layout wrapper with header and footer
function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-950 text-gray-100">
      <div className="w-full max-w-md mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">
            <span className="text-3xl mr-2">🧑‍⚖️</span> NyayaBot
          </h1>
          <p className="text-gray-400">Your AI Legal Assistant</p>
        </header>
        
        {children}
        
        <footer className="mt-8 text-center text-xs text-gray-500">
          <p>© 2023 NyayaBot - Making legal assistance accessible to everyone</p>
          <p className="mt-1">Available in English, हिंदी, and ಕನ್ನಡ</p>
        </footer>
      </div>
    </main>
  )
}

// Progress bar component
function ProgressBar({ step }) {
  const totalSteps = 7
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-xs text-gray-500">Welcome</span>
        <span className="text-xs text-gray-500">Legal Document</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

// App context provider
function AppProvider() {
  const navigate = useNavigate()
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

  const [currentStep, setCurrentStep] = useState(1)

  // Update user data
  const updateUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }))
  }

  // Navigate to next step
  const nextStep = () => {
    const newStep = currentStep + 1
    setCurrentStep(newStep)
    navigateToStep(newStep)
  }

  // Navigate to specific step
  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber)
    navigateToStep(stepNumber)
  }

  // Map step number to route
  const navigateToStep = (step) => {
    switch (step) {
      case 1:
        navigate("/")
        break
      case 2:
        navigate("/input")
        break
      case 3:
        navigate("/analysis")
        break
      case 4:
        navigate("/response")
        break
      case 5:
        navigate("/options")
        break
      case 6:
        navigate("/document")
        break
      case 7:
        navigate("/features")
        break
      default:
        navigate("/")
    }
  }

  // Analyze user input
  const analyzeInput = (problem) => {
    // In a real app, this would call your AI backend
    setAnalysis({
      domain: "Landlord-Tenant",
      intent: "Unlawful eviction",
      urgency: "High",
    })
    nextStep()
  }

  // Reset application
  const resetApp = () => {
    setCurrentStep(1)
    setUserData({
      inputType: null,
      problem: "",
      userName: "",
      landlordName: "",
      address: "",
      durationOfStay: "",
    })
    navigate("/")
  }

  return (
    <Layout>
      <ProgressBar step={currentStep} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <WelcomeScreen
              onInputTypeSelect={(type) => {
                updateUserData({ inputType: type })
                nextStep()
              }}
            />
          } 
        />
        
        <Route 
          path="/input" 
          element={
            <UserInput
              inputType={userData.inputType}
              onSubmit={(problem) => {
                updateUserData({ problem })
                analyzeInput(problem)
              }}
            />
          } 
        />
        
        <Route 
          path="/analysis" 
          element={
            <AIAnalysis 
              analysis={analysis} 
              onContinue={nextStep} 
            />
          } 
        />
        
        <Route 
          path="/response" 
          element={
            <AIResponse 
              problem={userData.problem} 
              analysis={analysis} 
              onContinue={nextStep} 
            />
          } 
        />
        
        <Route 
          path="/options" 
          element={
            <UserOptions
              onOptionSelect={(option) => {
                if (option === "document") {
                  goToStep(6)
                } else if (option === "info") {
                  goToStep(7)
                } else {
                  // For demo purposes, other options also go to extra features
                  goToStep(7)
                }
              }}
            />
          } 
        />
        
        <Route 
          path="/document" 
          element={
            <DocumentGenerator 
              userData={userData} 
              updateUserData={updateUserData} 
              onComplete={() => goToStep(7)} 
            />
          } 
        />
        
        <Route 
          path="/features" 
          element={
            <ExtraFeatures
              onReset={resetApp}
            />
          } 
        />
        
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

// Main App component
export default function App() {
  return (
    <Router>
      <AppProvider />
    </Router>
  )
}