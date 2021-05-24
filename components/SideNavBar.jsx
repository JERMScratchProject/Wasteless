import React from 'react';
import { NavLink } from 'react-router-dom';

function SideNavBar() {
  return (
    <div className="nav">
      <h3>Navigation</h3>
      <NavLink to="/" className="link" activeClassName="active" exact>
        {' '}
        <p> To Buy</p>{' '}
      </NavLink>
      <NavLink to="/purchased" className="link" activeClassName="active" exact>
        <p> Current Pantry Stock</p>
      </NavLink>
      <NavLink to="/eaten" className="link" activeClassName="active">
        <p> Eaten</p>
      </NavLink>
      <NavLink to="/disposed" className="link" activeClassName="active">
        <p> Disposed</p>
      </NavLink>
    </div>
  );
}

export default SideNavBar;
