import React from 'react';

function EatenItem(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="outcomesListBtnContainer" />
    </div>
  );
}

export default EatenItem;
