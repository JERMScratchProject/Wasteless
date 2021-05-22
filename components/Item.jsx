import React from 'react';

function Item (props) {
  return (
    <div>
    <span>{ props.id }: { props.itemName } --- </span> <button>Mark as Bought</button><button>Delete</button>
    </div>
  )
}

export default Item;