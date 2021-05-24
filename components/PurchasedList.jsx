import React, { useState, useEffect } from 'react';
import PurchasedItem from './PurchasedItem';

function PurchasedList(props) {
  const [currState, setState] = useState(props.state);
  useEffect(() => {
    console.log('use effect purchased started');
    fetch('/api/purchased')
      .then((items) => {
        const data = items.json();
        return data;
      })
      .then((data) => {
        const returnedItems = [];
        const returnedItemNames = [];
        for (const el of data) {
          returnedItems.push(el);
          returnedItemNames.push(el.item);
        }
        setState({
          ...currState,
          listOfPurchasedItems: returnedItems,
          listOfPurchasedItemNames: returnedItemNames,
        });
      });
  }, []);

  const purchasedListArray = [];
  for (let i = 0; i < currState?.listOfPurchasedItemNames.length; i++) {
    purchasedListArray.push(
      <PurchasedItem
        itemName={currState?.listOfPurchasedItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfPurchasedItemNames[i]}
        setState={setState}
      />
    );
  }

  return (
    <div className="list">
      <h3>Purchased List</h3>
      <p>Purchased:</p>
      {purchasedListArray}
 
    </div>
  );
}

export default PurchasedList;
