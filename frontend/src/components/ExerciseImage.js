import React from 'react';

const ExerciseImage = ({ exerciseId }) => {
  const resolution = "180";
  const imageUrl = `https://exercise-fitness-backend.onrender.com/api/image/${exerciseId}?resolution=${resolution}`;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={imageUrl}
          alt="Exercise animation"
          width={resolution}
          style={{ borderRadius: "8px" }}
          loading="lazy"
        />
    </div>
  );
};

export default ExerciseImage;
