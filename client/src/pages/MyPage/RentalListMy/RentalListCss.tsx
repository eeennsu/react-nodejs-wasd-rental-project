import React from 'react';
import type { FC } from 'react';

const RentalListCss: FC = () => {
  const outerBoxStyle: React.CSSProperties = {
    width: '300px',
    height: '300px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  };

  const innerBoxStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  };

  const listItemStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
  };

  const listItems = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div style={outerBoxStyle}>
      <div style={innerBoxStyle}>
        {listItems.map((item) => (
          <div key={item} style={listItemStyle}>
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalListCss;