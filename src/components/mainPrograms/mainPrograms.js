import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mainPrograms.css';

const MainPrograms = ({ data }) => {
  const language = localStorage.getItem('language')||'en'
  const navigate = useNavigate();

  const dataArray = Object.values(data);

  const handleClick = (redirect) => {
    navigate(redirect);
  };

  return (
    <div className="main-programs-grid">
      {dataArray.map((item, index) => (
        <div
          key={index}
          className="program-card"
          onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}
          onClick={() => handleClick(item.redirect)}
          style={{ '--bg-image': `url(${item.image})` }}
        >
          <div className="text">{language==='am'?item.titleAm:item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MainPrograms;