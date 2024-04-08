// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import StudyPlan from './StudyPlan';
import PersonalizedStudyPlan from './PersonalizedStudyPlan';
import Login from './Login';



const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/study-plan" component={StudyPlan} />
        <Route path="/personalized-study-plan" component={PersonalizedStudyPlan} />
        <Route path="/login" component={Login} /> 
      </Switch>
    </Router>
  );
};

export default App;