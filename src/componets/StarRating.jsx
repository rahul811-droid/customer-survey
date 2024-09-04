import React from 'react';

const StarRating = ({ rating, onRatingChange, scale }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className="flex justify-center mb-4 space-x-2"> {/* Added space between stars */}
      {[...Array(scale)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          className={`cursor-pointer text-2xl ${
            index < rating 
              ? rating <= 3 
                ? 'text-red-500'   // Red color for 3 or below
                : 'text-green-500'  // Green color for 4 or 5
              : 'text-gray-300'     // Gray color for unselected stars
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
