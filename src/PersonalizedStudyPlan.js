import React, { useState } from 'react';
import axios from 'axios';
import './PersonalizedStudyPlan.css';

const PersonalizedStudyPlan = () => {
    const [mockTestScore, setMockTestScore] = useState('');
    const [studyPlan, setStudyPlan] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an API call to fetch personalized study plan based on mock test score
            const response = await axios.post('/api/generateStudyPlan', { mockTestScore });
            setStudyPlan(response.data.studyPlan);
        } catch (error) {
            console.error('Error fetching study plan:', error);
            // Handle error
        }
    };

    return (
        <div>
            <h2>Personalized Study Plan</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mockTestScore">Mock test score:</label>
                <input
                    type="text"
                    id="mockTestScore"
                    value={mockTestScore}
                    onChange={(e) => setMockTestScore(e.target.value)}
                    required
                />
                <button type="submit">Generate Study Plan</button>
            </form>
            {studyPlan && (
                <div>
                    <h3>Recommended Study Plan:</h3>
                    <p>{studyPlan}</p>
                </div>
            )}
        </div>
    );
};

export default PersonalizedStudyPlan;
