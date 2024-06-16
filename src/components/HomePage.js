import React, { useState } from 'react';

const Home = ({ startQuiz }) => {
  const [selectedValue, setSelectedValue] = useState('SalesforceCertifiedAdministrator');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleStartQuiz = () => {
    startQuiz(selectedValue);
  };

  return (
    <div>
      <h1>Salesforce Certification TEST 24C2</h1>
      <h3>Version 24C1 Changes</h3>
      <p>Add a few more questions, Random sampling of questions, and Change button style.</p>
      <h3>Version 24C2 Changes</h3>
      <p>Add a Pull-Down to select the type of certification.</p>
      
      <div className='home-button-container'>
        <div className='slect-container'>
          <select value={selectedValue} onChange={handleChange}>
            <option value="SalesforceCertifiedAdministrator">Salesforce Certified Administrator</option>
            <option value="SalesforcePlatformAppBuilder">Salesforce Platform App Builder</option>
            <option value="SalesforcePlatformDeveloperI">Salesforce Platform Developer I</option>
          </select>
        </div>
        <button onClick={handleStartQuiz}><span>Start</span></button>
      </div>
      
    </div>
  );
};

export default Home;