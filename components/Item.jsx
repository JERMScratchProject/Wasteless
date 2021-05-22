import React from 'react';

function Item (props) {
  return (
    <div>
    <span>{ props.id }: { props.itemName } | </span> <button>Mark as bought</button>
    </div>
  )
}

export default Item;