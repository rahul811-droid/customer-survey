import React, { useState } from 'react';
import WelcomeScreen from './componets/WelcomeScreen';
import Survey from './componets/Survey';
import ThankYouScreen from './componets/ThankYouScreen';

function App() {
  const [step, setStep] = useState('welcome');
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const handleStart = () => {
    setStep('survey');
  };

  const handleCompletion = () => {
    setSurveyCompleted(true);
    setStep('thankyou');
    setTimeout(() => setStep('welcome'), 5000);
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {step === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {step === 'survey' && <Survey onComplete={handleCompletion} />}
      {step === 'thankyou' && <ThankYouScreen />}
    </div>
  );
}

export default App;
