import React, { useState, useEffect } from 'react';
import DisposedItem from './DisposedItem';


function DisposedList(props) {
    const [currState, setState] = useState(props.state);
    useEffect(() => {
        fetch('/api/disposed')
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
                    listOfDisposedItems: returnedItems,
                    listOfDisposedItemNames: returnedItemNames,
                })
            });
    }, []);


    const disposedListArray = [];
    for (let i = 0; i < currState?.listOfDisposedItemNames.length; i++) {
        console.log('dispoed loop occured' + i);
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
            <h3>Disposed List</h3>
            <p>Disposed:</p>
            <div>
                {disposedListArray}
            </div>
        </div>
    );
}

export default DisposedList;
