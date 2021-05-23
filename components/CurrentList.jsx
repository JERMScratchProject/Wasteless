import React, { useState, useEffect } from 'react';
import Item from './Item';

function CurrentList({ food, setFood }) {
  const state = {
    listOfItems: [], // <-- this will be intitialized w/ the data from get request
    login: true,
  };

  const [currState, setState] = useState(state);

  useEffect(() => {
    fetch('/api/')
      .then((items) => {
        const data = items.json();
        return data;
      })
      .then((data) => {
        const returnedItemNames = [];
        for (const el of data) {
          returnedItemNames.push(el.item);
        }
        console.log(`NAMES: ${returnedItemNames}`);
        setState({ ...currState, listOfItems: returnedItemNames });
      });
  }, []);

  const { listOfItems } = currState;

  let newItem;

  function addItem() {
    // Does nothing if input field is empty
    if (!document.getElementById('newItemField').value) {
      return;
    }

    // generate a fetch request by passing in the newItem as item key in body
    fetch('/api/food', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ item: newItem[0] }),
    })
      .then(() => {
        console.log(newItem);
      })
      .catch((err) => {
        console.log('there was an error:', err);
      });

    document.getElementById('newItemField').value = '';
    setState((prevState) => {
      const newList = prevState.listOfItems.concat(newItem);
      console.log(`new list is ${newList}`);
      // TBD: Trigger post request to let DB know about new item?
      return { ...prevState, listOfItems: newList };
    });
  }

  // TBD: Mark as Bought functionality (update itemStatus property to 'bought' & remove from current render)
  function markAsBought() {}

  // TBD: Delete item function??
  function deleteItem() {}

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
  for (let i = 0; i < currState.listOfItems.length; i++) {
    listArray.push(<Item itemName={currState.listOfItems[i]} key={i} id={i + 1} />);
  }

  return (
    <div className="list">
      <h3>Current List</h3>
      <p>To Buy:</p>
      {listArray}
      <div className="addItemContainer">
        <input
          type="text"
          className="addItemText"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addItem} className="addItemBtn">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default CurrentList;
