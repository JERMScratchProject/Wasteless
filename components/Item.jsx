import React, { useState, useEffect } from 'react';

function Item(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="toBuyListBtnContainer">
        {/* bought button */}
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-check" />{' '}
        </button>

        {/* edit button */}
        <button className="toBuyListBtn">
          {' '}
          <i className="fa fa-edit" />{' '}
        </button>

        {/* delete button */}
        <button
          className="toBuyListBtn"
          id="deleteBtn"
          onClick={() => {
            props.deleteItem(props.itemName);
          }}
        >
          {' '}
          <i className="fa fa-trash-o" />{' '}
        </button>
      </div>
    </div>
  );
}

export default Item;
