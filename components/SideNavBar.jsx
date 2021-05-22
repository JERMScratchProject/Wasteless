import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

function SideNavBar () {
    return (
        <div className='nav'>
            <h3>LISTS</h3>
            <Router>
            <NavLink to="/" className="link" activeClassName="active" exact> <p> - To Buy</p> </NavLink>
            <NavLink to="/purchased" className="link" activeClassName="active" exact><p> - Current Pantry Stock</p></NavLink>
            <NavLink to="/outcomes" className="link" activeClassName="active" exact><p> - Outcomes</p></NavLink>
            </Router>
        </div>
    )
}


export default SideNavBar;