import React, { useState, useEffect } from 'react';
import Item from './Item';

function PurchasedList() {
  return (
    <div className="list">
      <h3>Purchased List</h3>
      <p>Purchased:</p>
      <input type="text" id="newItemField" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={addItem} className="button">
        Add Item
      </button>
    </div>
  );
}

export default PurchasedList;
