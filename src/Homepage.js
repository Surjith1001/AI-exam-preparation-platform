import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import './Homepage.css'; // Import CSS file



const Homepage = () => {
  const [selectedDuration, setSelectedDuration] = useState('6');

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="container">
        <h1>GateCrackAI</h1>
        <p>Prepare for your GATE exam with personalized study plans!</p>
        <select>
          <option value="GATE">GATE</option>
        </select>
        <select value={selectedDuration} onChange={handleDurationChange}>
          <option value="6">6 months</option>
          <option value="9">9 months</option>
          <option value="12">12 months</option>
        </select>
        <select>
          <option value="CS">CS</option>
          <option value="CH">CH</option>
          <option value="CE">CE</option>
          <option value="DA">DA</option>
          <option value="EE">EE</option>
          <option value="CY">CY</option>
        </select>
        <Link to={`/study-plan?duration=${selectedDuration}`}>
          <button>Proceed to Study Plan</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
