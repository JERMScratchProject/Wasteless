import React from 'react';

function EatenItem(props) {
  return (
    <div className="ItemComponent">
      <span className="items">
        {props.id}. {props.itemName}{' '}
      </span>{' '}
      <div className="outcomesListBtnContainer">
        {/* liked */}
        <button
          className="eatenListBtn"
          id="likedBtn"
          // onClick={() => {
          //   props.updateLiked(props.itemName);
          // }}
        >
          {' '}
          <i className="fa fa-thumbs-up" />
        </button>

        {/* disliked */}
        <button
          className="eatenListBtn"
          id="dislikedBtn"
          // onClick={() => {
          //   props.updateDisliked(props.itemName);
          // }}
        >
          {' '}
          <i className="fa fa-thumbs-down" />
        </button>
      </div>
    </div>
  );
}

export default EatenItem;
