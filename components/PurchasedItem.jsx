import React from 'react';

function PurchasedItem(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="purchasedListBtnContainer">
        {/* eaten button */}
        <button
          className="purchasedListBtn"
          id="eatenBtn"
          onClick={() => {
            props.updateEaten(props.itemName);
          }}
        >
          {' '}
          <i className="fa fa-cutlery" />{' '}
        </button>

        {/* disposed button */}
        <button
          className="purchasedListBtn"
          id="disposedBtn"
          onClick={() => {
            props.updateDisposed(props.itemName);
          }}
        >
          {' '}
          <i className="fa fa-trash" />
        </button>

        {/* add info button */}
        <button className="purchasedListBtn" id="infoBtn">
          {' '}
          <i className="fa fa-info-circle" />
        </button>
      </div>
    </div>
  );
}

export default PurchasedItem;
