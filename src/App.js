import React, { useState, useEffect } from 'react';
import VacancyList from './components/VacancyList';
import ApplicationForm from './components/ApplicationForm';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  const [vacancies, setVacancies] = useState([]);
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Mock vacancy data (замените на запрос к API)
  useEffect(() => {
    const mockVacancies = [
      {
        id: 1,
        title: 'Ассистент преподавателя',
        description: 'Помощь преподавателю в проведении занятий и проверке работ.',
        department: 'Математика',
        salary: 15.00,
      },
      {
        id: 2,
        title: 'Помощник в административном отделе',
        description: 'Обработка документов, помощь в организации мероприятий.',
        department: 'Администрация',
        salary: 18.00,
      },
      {
        id: 3,
        title: 'Стажировка в IT-отделе',
        description: 'Участие в разработке веб-приложений, тестирование.',
        department: 'IT',
        salary: 0.00, // Стажировка
      },
      {
        id: 4,
        title: 'Лаборант',
        description: 'Работа в лаборатории, проведение экспериментов, ведение документации.',
        department: 'Биология',
        salary: 20.00,
      },
      {
        id: 5,
        title: 'Разработчик (частичная занятость)',
        description: 'Разработка и поддержка веб-приложений на основе React.',
        department: 'IT',
        salary: 25.00,
      },
      {
        id: 6,
        title: 'Менеджер по работе со студентами',
        description: 'Консультирование студентов по вопросам карьеры и стажировок.',
        department: 'Центр Карьеры',
        salary: 22.00,
      },
    ];
    setVacancies(mockVacancies);
  }, []);

  const handleVacancyClick = (vacancy) => {
    setSelectedVacancy(vacancy);
    setShowApplicationForm(false); // Hide the application form
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = (formData) => {
    // Здесь должен быть запрос к API для отправки заявки
    console.log('Заявка отправлена:', formData);
    alert('Заявка успешно отправлена!');
    setShowApplicationForm(false); // Hide form after submit
    setSelectedVacancy(null); // Clear selected vacancy
  };

  return (
    <div className="container">
      <Navbar />
      <h1 className="mt-4 mb-4">Вакансии</h1>

      {selectedVacancy && !showApplicationForm && (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{selectedVacancy.title}</h5>
            <p className="card-text">{selectedVacancy.description}</p>
            <p className="card-text">
              <strong>Департамент:</strong> {selectedVacancy.department}
            </p>
            <p className="card-text">
              <strong>Зарплата:</strong> ${selectedVacancy.salary}
            </p>
            <button className="btn btn-primary" onClick={handleApplyClick}>
              Подать заявку
            </button>
          </div>
        </div>
      )}

      {showApplicationForm && selectedVacancy && (
        <ApplicationForm
          vacancy={selectedVacancy}
          onSubmit={handleApplicationSubmit}
        />
      )}

      {!selectedVacancy && !showApplicationForm && (
        <VacancyList vacancies={vacancies} onVacancyClick={handleVacancyClick} />
      )}
    </div>
  );
}

export default App;