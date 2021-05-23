import React from 'react';

function Item(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="toBuyListBtnContainer">
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-check" />{' '}
        </button>
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-edit" />{' '}
        </button>
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-trash-o" />{' '}
        </button>
      </div>
    </div>
  );
}

export default Item;
