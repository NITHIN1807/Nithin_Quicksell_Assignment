import React from 'react';
import { useSelector } from 'react-redux';
import './DashView.css';
import Card from '../Card/Card';
import { AiOutlinePlus } from "react-icons/ai";

const getInitials = (name) => {
  if (name) {
    const initials = name.slice(0, 2).toUpperCase();
    return initials;
  }
  return '';
};

const getStatusSymbol = (status) => {
  switch (status) {
    case "In progress":
      return '◐';
    case "Backlog":
      return '⦿';
    case "Todo":
      return '〇';
    default:
      return '';
  }
};

const randomColor = (name) => {
  if (name) {
    const seed = name
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = (seed % 360).toString();
    return `hsl(${hue}, 70%, 70%)`;
  }
  // Return a default color or handle it as per your requirements when 'name' is undefined.
  return 'hsl(0, 0%, 70%)'; // Default gray color
};

const DashView = () => {
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);
  const allUser = useSelector((state) => state.DataReducer.allUser);
  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: 'space-evenly' }}>
        {selectedData.map((elem, index) => (
          <div key={index} className="dashCardContainer">
            <div className="dashCardHeading flex-sb">
              <div className="leftView">
                {user ? (
                  <div className="imageContainer relative" style={{ width: '20px', height: '20px', display: 'inline-block' }}>
                    <div className="noUserImage" style={{ backgroundColor: randomColor(allUser[index].name) }}>
                      {getInitials(allUser[index].name)}
                    </div>
                  </div>
                ) : (
                  "" /* Display something else if not a user view */
                )}
                <span>
                  {getStatusSymbol(elem[index]?.title)} {elem[index]?.title} {elem[index]?.value?.length}
                </span>
              </div>
              <div className="rightView">
                <AiOutlinePlus /> <span style={{ letterSpacing: '2px' }}>...</span>
              </div>
            </div>
            <div className="dashList flex-gap-10">
              {elem[index]?.value?.map((elem, ind) => (
                <Card key={ind} id={elem.id} title={elem.title} tag={elem.tag} status={elem.status} priority={elem.priority} available={allUser.find((user) => user.id === elem.userId)?.available} name={allUser.find((user) => user.id === elem.userId)?.name}  />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default DashView;
