import React from 'react';

function DisposedItem(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="outcomesListBtnContainer" />
    </div>
  );
}

export default DisposedItem;
