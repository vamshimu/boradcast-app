import React from 'react';

function Settings({ setLanguage }) {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select">Choose a language:</label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
}

export default Settings;
