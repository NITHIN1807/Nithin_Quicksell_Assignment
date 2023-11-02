import React from 'react';
import './Card.css';

const Card = ({ id, title, tag, available, priority, name,status }) => {
  const statusClass = available ? 'cardContainer available' : 'cardContainer unavailable';

  // Define a symbol mapping based on priority
  const prioritySymbols = {
    0: '…',
    1: '▂',
    2: '▅',
    3: '▉',
    4: '⚠️'
  };

  const getInitials = (name) => {
    if (name) {
      const initials = name.slice(0, 2).toUpperCase();
      return initials;
    }
    return '';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "In progress":
        return '◐';
      case "Backlog":
        return '⦿';
      case "Todo":
        return '〇';
      default:
        return '❔';
    }
  };

  // Generate a random color based on the user's name
  const randomColor = getRandomColor(name);

  function getRandomColor(name) {
    // Seed a random color based on the user's name
    const seed = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const hue = (seed % 360).toString(); // Use the name's characters to generate a hue

    return `hsl(${hue}, 70%, 70%)`; // Generate an HSL color with the calculated hue
  }

  return (
    <div className={`cardContainer flex-gap-10 ${statusClass}`} style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: 'uppercase' }} className="color-grey">
          {id}
        </span>
        <div className="imageContainer relative" style={{ width: '30px', height: '30px' }}>
          <div className="noUserImage" style={{ backgroundColor: randomColor }}>
            {getInitials(name)}
          </div>
          <div className="showStatus"></div>
        </div>
      </div>
      
      <div className="cardTitle">
    <div className="statusIcon">{getStatusIcon(status)}</div>
    <p>{title}</p>
</div>
      
      <div className="cardTags">
        <div className="tags color-grey">{prioritySymbols[priority]}</div>
        {tag?.map((elem, index) => (
          <div key={index} className="tags color-grey">
            <span>•</span> {elem}
          </div>
        ))}
        
      
      </div>
    </div>
  );
};

export default Card;






