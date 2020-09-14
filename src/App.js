import React from 'react';
import './App.css';
import Header from './components/header';
import CourseComp from './components/CoursesComponent';
function App() {
  return (
    <div className="App">
      <Header/>
      <CourseComp/>
    </div>
  );
}

export default App;
