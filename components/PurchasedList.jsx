import React, { useState, useEffect } from 'react';
import PurchasedItem from './PurchasedItem';

function PurchasedList(props) {
  const [currState, setState] = useState(props.state);
  useEffect(() => {
    console.log('PurchasedList useEffect triggered')
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

    // updates item outcome to eaten and removes from purchased list
    function updateEaten(itemName) {
      fetch(`/api/food/eaten/${itemName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify({ item: itemName }),
      }).catch((err) => {
        console.log(err);
      });
  
      setState((prevState) => {
        const itemNamesSlice = prevState.listOfPurchasedItemNames?.slice();
  
        const filtered = itemNamesSlice?.filter((value) => value !== itemName);
  
        return { ...prevState, listOfPurchasedItemNames: filtered };
      });
    }

    // updates item outcome to eaten and removes from purchased list
    function updateDisposed(itemName) {
        fetch(`/api/food/disposed/${itemName}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'Application/JSON' },
          body: JSON.stringify({ item: itemName }),
        }).catch((err) => {
          console.log(err);
        });
    
        setState((prevState) => {
          const itemNamesSlice = prevState.listOfPurchasedItemNames?.slice();
    
          const filtered = itemNamesSlice?.filter((value) => value !== itemName);
    
          return { ...prevState, listOfPurchasedItemNames: filtered };
        });
      }
  
  const purchasedListArray = [];
  for (let i = 0; i < currState?.listOfPurchasedItemNames.length; i++) {
    purchasedListArray.push(
      <PurchasedItem
        itemName={currState?.listOfPurchasedItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfPurchasedItemNames[i]}
        setState={setState}
        updateEaten={updateEaten}
        updateDisposed={updateDisposed}
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
