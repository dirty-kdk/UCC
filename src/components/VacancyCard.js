import React from 'react';

function VacancyCard({ vacancy, onVacancyClick }) {
  return (
    <div className="card" onClick={() => onVacancyClick(vacancy)} style={{ cursor: 'pointer' }}>
      <div className="card-body">
        <h5 className="card-title">{vacancy.title}</h5>
        <p className="card-text">{vacancy.description.substring(0, 100)}...</p>
        <p className="card-text"><strong>Департамент:</strong> {vacancy.department}</p>
      </div>
    </div>
  );
}

export default VacancyCard;