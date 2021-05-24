import React, { useState, useEffect } from 'react';
import EatenItem from './EatenItem';
import LikedItem from './LikedItem';
import DislikedItem from './DislikedItem';

function EatenList(props) {
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
        })
      });
  }, []);

  useEffect(() => {
    fetch('/api/liked')
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
          listOfLikedItems: returnedItems,
          listOfLikedItemNames: returnedItemNames,
        })
      });
  }, []);



  const eatenListArray = [];
  for (let i = 0; i < currState?.listOfEatenItemNames.length; i++) {
    console.log('eaten loop occured' + i);
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

  //  // updates item outcome to eaten and removes from purchased list
  //  function updateLiked(itemName) {
  //   fetch(`/api/food/eaten/liked/${itemName}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'Application/JSON' },
  //     body: JSON.stringify({ item: itemName }),
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  //   setState((prevState) => {
  //     const itemNamesSlice = prevState.listOfPurchasedItemNames?.slice();
  
  //       const filtered = itemNamesSlice?.filter((value) => value !== itemName);
  
  //       return { ...prevState, listOfPurchasedItemNames: filtered };
  //   });
  // }

  // updates item outcome to eaten and removes from purchased list
  // function updateDisliked(itemName) {
  //     fetch(`/api/food/eaten/disliked/${itemName}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'Application/JSON' },
  //       body: JSON.stringify({ item: itemName }),
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  
  //     setState((prevState) => {
  //       const itemNamesSlice = prevState.listOfDislikedItemNames?.slice();
  
  //       const filtered = itemNamesSlice?.filter((value) => value !== itemName);
  
  //       return { ...prevState, listOfDislikedItemNames: filtered };
  //     });
  //   }

  // const currLikedItems = currState.listOfEatenItems?.filter((value)=> value.preference == 'liked')

  const likedItemsArray = [];
  for (let i=0; i<currState?.listOfLikedItems.length; i++){
    likedItemsArray.push(<LikedItem 
      id={i+1} 
      itemName={currState?.listOfLikedItems[i].item}
      updateLiked={updateLiked}/>);
  }


  // const dislikedItemsArray = [];
  // for (let i=0; i<currState?.listOfDislikedItemNames.length; i++){
  //   dislikedItemsArray.push(<DislikedItem 
  //     id={i+1} 
  //     itemName={currState?.listOfDislikedItemNames[i].item}
  //     updateDisliked={updateDisliked}/>);
  // }


  return (
    <div className="list">
      <h3>Eaten List</h3>
      <div>
        {eatenListArray}
        <br/>
        {likedItemsArray}
        <br/>
        {/* {dislikedItemsArray} */}
      </div>
    </div>
  );
}

export default EatenList;
