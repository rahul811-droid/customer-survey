import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Our Shop!</h1>
      <button 
        onClick={onStart}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Survey
      </button>
    </div>
  );
};

export default WelcomeScreen;
