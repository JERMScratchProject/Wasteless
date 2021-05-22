import React from 'react';
import AddItem from './AddItem';

function SideNavBar () {
    return (
        <div className='nav'>
            <p>To Buy</p>
            <p>Current Pantry Stock</p>
            <p>Outcomes</p>
            <AddItem/>
        </div>
    )
}


export default SideNavBar;