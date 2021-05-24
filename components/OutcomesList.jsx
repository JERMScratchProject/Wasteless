import React, { useState, useEffect } from 'react';
import EatenItem from './EatenItem';
import DisposedItem from './DisposedItem';


function OutcomesList(props) {
    const [currState, setState] = useState(props.state);
    useEffect(() => {
      console.log('OutcomesList useEffect triggered')
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

        fetch('/api/disposed')
          .then((items) => {
              console.log('got to the second fetch in outcomes');
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
              listOfDisposedItems: returnedItems,
              listOfDisposedItemNames: returnedItemNames,
              });
          });
      }, []);
      

  const eatenListArray = [];
  for (let i = 0; i < currState?.listOfEatenItemNames.length; i++) {
    console.log('loop occured' + i);
    eatenListArray.push(
      <EatenItem
        itemName={currState?.listOfEatenItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfEatenItemNames[i]}
        setState={setState}
      />
    );
  }
  const disposedListArray = [];
  for (let i = 0; i < currState?.listOfDisposedItemNames.length; i++) {
    console.log('loop occured' + i);
    disposedListArray.push(
      <DisposedItem
        itemName={currState?.listOfDisposedItemNames[i]}
        key={i}
        id={i + 1}
        foodId={currState?.listOfDisposedItemNames[i]}
        setState={setState}
      />
    );
  }

  return (
    <div className="list">
      <h3>Outcomes List</h3>
      <p>Outcomes:</p>
      <div>
      {eatenListArray}
      </div>
      <div>
      {disposedListArray}
      </div>
    </div>
  );
}

export default OutcomesList;
