import React from 'react';
import AddItem from './AddItem';

function SideNavBar () {
    return (
        <div className='nav'>
            <h3>CURRENT LIST</h3>
            <p>To Buy</p>
            <p>Current Pantry Stock</p>
            <p>Outcomes</p>
            <AddItem/>
        </div>
    )
}


export default SideNavBar;