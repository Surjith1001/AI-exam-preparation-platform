// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

// Import components
import Homepage from './Homepage';
import StudyPlan from './StudyPlan';
import PersonalizedStudyPlan from './PersonalizedStudyPlan';

// Define routing logic using React Router
const App = () => {
    return (
        <Router>
            <Routes> {/* Changed from Switch to Routes */}
                <Route path="/" element={<Homepage />} /> {/* Updated syntax for rendering components */}
                <Route path="/study-plan" element={<StudyPlan />} /> {/* Updated syntax for rendering components */}
                <Route path="/personalized-study-plan" element={<PersonalizedStudyPlan />} /> {/* Updated syntax for rendering components */}
            </Routes> {/* Changed from Switch to Routes */}
        </Router>
    );
}

createRoot(document.getElementById('root')).render(<App />); // Use createRoot from react-dom/client
