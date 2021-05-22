import React from 'react';

function Item (props) {

 

  return (
    <div className="ItemComponent">
    <span>{ props.id }: { props.itemName } --- </span> <button> ✅ </button>
    <button> ❌ </button>
    </div>
  )
}

export default Item;