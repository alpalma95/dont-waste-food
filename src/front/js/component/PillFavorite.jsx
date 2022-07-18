import React from "react";

const PillFavorite = ({ categoryName }) => {
  return (
    <div className="btn btn-primary w-50">
      {categoryName} <span className="badge">0</span>
    </div>
  );
};

export default PillFavorite;
