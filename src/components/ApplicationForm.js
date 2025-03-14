import React, { useState } from 'react';

function ApplicationForm({ vacancy, onSubmit }) {
    const [formData, setFormData] = useState({
        studentName: '',
        studentEmail: '',
        motivation: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, vacancyId: vacancy.id }); // Include vacancy ID
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Форма заявки на вакансию: {vacancy.title}</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="studentName">Имя студента="form-group"</label>
                        <label htmlFor="studentEmail">Email студента:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="studentEmail"
                            name="studentEmail"
                            value={formData.studentEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motivation">Мотивационное письмо:</label>
                        <textarea
                            className="form-control"
                            id="motivation"
                            name="motivation"
                            rows="3"
                            value={formData.motivation}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Отправить заявку</button>
                </form>
            </div>
        </div>
    );
}

export default ApplicationForm;