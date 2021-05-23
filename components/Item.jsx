import React from 'react';

function Item(props) {
  function deleteItem() {
    useEffect(() => {
      fetch('/food/:id', { method: 'DELETE' }).then(() => 
      
      );

      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  }
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
