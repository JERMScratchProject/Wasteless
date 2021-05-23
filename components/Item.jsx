import React, { useState, useEffect } from 'react';

function Item(props) {
  // const [currState, setState] = useState(props.state);
  console.log(props.currState);
  function deleteItem() {
    fetch(`/api/food/${props.foodId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ id: props.foodId }),
    }).catch((err) => {
      console.log(err);
    });
  }

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
        <button className="toBuyListBtn" id="deleteBtn" onClick={deleteItem}>
          {' '}
          <i className="fa fa-trash-o" />{' '}
        </button>
      </div>
    </div>
  );
}

export default Item;
