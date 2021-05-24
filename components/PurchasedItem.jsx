import React from 'react';

function PurchasedItem(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="purchasedListBtnContainer">
        {/* bought button */}
        <button className="purchasedListBtn" id="eatenBtn">
          {' '}
          Eaten
          <i className="fa fa-cutlery" />{' '}
        </button>

        {/* edit button */}
        <button className="purchasedListBtn" id="disposedBtn">
          {' '}
          Disposed
          <i className="fa fa-trash" />
        </button>
      </div>
    </div>
  );
}

export default PurchasedItem;
