import React from 'react';
import Item from './Item';
import { useState } from 'react';

function CurrentList () {

const state = {
    listOfItems: ['a', 'b', 'c', 'd'], // <-- this will be intitialized w/ the data from get request
    login: true
}


const [ currState, setState ] = useState(state);
const listOfItems = currState.listOfItems;

let newItem;
function handleChange(e){
    newItem = [e.target.value];
}

function addItem() {
    document.getElementById('newItemField').value = "";
    setState((prevState) => {
        const newList = prevState.listOfItems.concat(newItem);
        console.log("new list is " + newList);
        return { ...prevState, listOfItems: newList }
    })

}

const listArray = [];
for (let i=0; i<currState.listOfItems.length;i++){
    listArray.push(<Item itemName={currState.listOfItems[i]} key={i} id={i +1}/>)
}

//delete item function??

    return (
        <div className='currentList'>
            <h3>CURRENT LIST</h3>
            <p>Hard coded item</p>
            {listArray}
            <input type='text' id="newItemField" onChange={handleChange}/>
            <button onClick={addItem} >click meeeeee</button>
        </div>
    )
}

export default CurrentList;