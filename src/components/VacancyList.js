import React from 'react';
import VacancyCard from './VacancyCard';

function VacancyList({ vacancies, onVacancyClick }) {
  return (
    <div className="row">
      {vacancies.map((vacancy) => (
        <div key={vacancy.id} className="col-md-4 mb-3">
          <VacancyCard vacancy={vacancy} onVacancyClick={onVacancyClick} />
        </div>
      ))}
    </div>
  );
}

export default VacancyList;