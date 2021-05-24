import React, { useState, useEffect } from 'react';
import EatenItem from './EatenItem';

function OutcomesList(props) {
    const [currState, setState] = useState(props.state);
    useEffect(() => {
        fetch('/api/eaten')
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
              listOfEatenItems: returnedItems,
              listOfEatenItemNames: returnedItemNames,
              });
          });
      }, []);

  const eatenListArray = [];
  for (let i = 0; i < currState?.listOfEatenItemNames.length; i++) {
    eatenListArray.push(
      <OutcomesItem
        itemName={currState?.listOfEatenItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfEatenItemNames[i]}
        setState={setState}
      />
    );
  }
  return (
    <div className="list">
      <h3>Outcomes List</h3>
      <p>Outcomes:</p>
      {eatenListArray}
    </div>
  );
}

export default OutcomesList;
