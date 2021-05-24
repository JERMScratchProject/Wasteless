import React, { useState, useEffect } from 'react';
import Item from './Item';

function CurrentList() {
  const state = {
    listOfItems: [], // array to hold db objects
    listOfItemNames: [], // array to hold names extracted from db objects
    listOfPurchasedItems: [],
    listOfPurchasedItemNames: [],
    listOfEatenItems: [],
    listOfEatenItemNames: [],
    listOfDisposedItems: [],
    listOfDisposedItemNames: [],
  };

  const [currState, setState] = useState(state);

  useEffect(() => {
    fetch('/api/')
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
        setState({ ...currState, listOfItems: returnedItems, listOfItemNames: returnedItemNames });
      });
  }, []);

  // const { listOfItemNames } = currState;

  let newItem;

  function addItem() {
    // Does nothing if input field is empty
    if (!document.getElementById('addItemText').value) {
      return;
    }

    // generate a fetch request by passing in the newItem as item key in body
    fetch('/api/food', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: newItem[0] }),
    }).catch((err) => {
      console.log('there was an error:', err);
    });

    document.getElementById('addItemText').value = '';
    setState((prevState) => {
      const newList = prevState.listOfItemNames.concat(newItem);
      //   const newList = prevState.listOfItem.concat(newItem);
      console.log(`new list is ${newList}`);
      // TBD: Trigger post request to let DB know about new item?
      return { ...prevState, listOfItemNames: newList };
    });
  }

  function deleteItem(itemName) {
    console.log('delete started');
    fetch(`/api/food/${itemName}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: itemName }),
    }).catch((err) => {
      console.log(err);
    });

    setState((prevState) => {
      const itemNamesSlice = prevState.listOfItemNames.slice();

      const filtered = itemNamesSlice.filter((value) => value !== itemName);

      return { ...prevState, listOfItemNames: filtered };
    });
  }

  // update food name
  function updateName(itemName, updatedName) {
    fetch(`/api/food/${itemName}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: itemName }),
    }).catch((err) => {
      console.log(err);
    });
    setState(currState.listOfItemNames.map((item) => (item === itemName ? updatedName : item)));
  }

  // updates item status and removes from to buy list
  function updateItemStatus(itemName) {
    fetch(`/api/food/purchased/${itemName}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: itemName }),
    }).catch((err) => {
      console.log(err);
    });

    setState((prevState) => {
      const itemNamesSlice = prevState.listOfItemNames.slice();

      const filtered = itemNamesSlice.filter((value) => value !== itemName);

      return { ...prevState, listOfItemNames: filtered };
    });
  }

  // Selects user input when change is detected
  function handleChange(e) {
    newItem = [e.target.value];
  }

  // handleKeyDown checks if 'enter' triggered onKeyDown(line 53) and calls addItem if true
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  }

  const listArray = [];
  for (let i = 0; i < currState.listOfItemNames.length; i++) {
    console.log(`got to here ${i} plzzzzz `);
    listArray.push(
      <Item
        itemName={currState.listOfItemNames[i]} // <-- user input string
        key={i}
        id={i + 1}
        foodId={currState.listOfItemNames[i]} // <-- mongo ID: 1298uvBAH8hjakskr$^%
        currState={currState}
        setState={setState}
        deleteItem={deleteItem}
        updateName={updateName}
        updateItemStatus={updateItemStatus}
      />
    );
  }

  return (
    <div className="list">
      <h3>To Buy List</h3>
      {listArray}
      <div className="addItemContainer">
        <input type="text" id="addItemText" onChange={handleChange} onKeyDown={handleKeyDown} />
        <button onClick={addItem} className="addItemBtn">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default CurrentList;
