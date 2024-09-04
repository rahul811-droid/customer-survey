import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';

const Question = ({ question, onAnswer, answer }) => {
  const [rating, setRating] = useState(answer?.rating || 0);
  const [textFeedback, setTextFeedback] = useState(answer?.textFeedback || '');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (newRating > 3) {
      setTextFeedback(''); // Clear feedback if rating is higher than 3
    }
    onAnswer(question.id, { rating: newRating, textFeedback });
  };

  const handleTextChange = (e) => {
    const feedback = e.target.value;
    setTextFeedback(feedback);
    onAnswer(question.id, { rating, textFeedback: feedback });
  };

  useEffect(() => {
    // Store the answer in local storage
    localStorage.setItem(`question-${question.id}`, JSON.stringify({ rating, textFeedback }));
  }, [rating, textFeedback, question.id]);

  return (
    <div className="question mb-6">
      <p className="text-lg font-medium mb-4">{question.question}</p>
      {question.type === 'rating' && (
        <>
          <StarRating
            rating={rating}
            onRatingChange={handleRatingChange}
            scale={question.scale}
          />
          {/* Hide numeric input for rating */}
          {rating <= 3 && (
            <textarea 
              placeholder="Please provide additional feedback..."
              value={textFeedback} 
              onChange={handleTextChange} 
              className="w-full p-2 border rounded-lg mt-4"
            />
          )}
        </>
      )}
      {question.type === 'text' && (
        <textarea 
          value={textFeedback} 
          onChange={handleTextChange} 
          className="w-full p-2 border rounded-lg"
        />
      )}
    </div>
  );
};

export default Question;
