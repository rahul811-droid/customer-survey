import React, { useState } from 'react';
import Question from './Question';

const surveyQuestions = [
  { id: 1, question: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, question: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, question: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, question: "On a scale of 1-10 how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, question: "What could we do to improve our service?", type: "text" },
];

const Survey = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">
        Question {currentQuestionIndex + 1}/{surveyQuestions.length}
      </h2>
      <Question 
        question={surveyQuestions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
        answer={answers[surveyQuestions[currentQuestionIndex].id]} 
      />
      <div className="flex justify-between mt-6">
        <button 
          onClick={handlePrev} 
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button 
          onClick={handleSkip}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Skip
        </button>
        <button 
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Survey;
