import React from 'react';
import Item from './item'

function CurrentList () {
    return (
        <div className='currentList'>
            <h3>CURRENT LIST</h3>
            <p>item 1</p>
            <p>item 2</p>
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default CurrentList;
// const arrayOfItems = ['1', '2', '3'];
// for loop to create <Item> for each item on res.body of request