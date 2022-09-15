import React, { useState } from 'react';
import Menu from './Menu'; 
import Categories from './Categories';

import items from './data';


// get unique categories from list use new set for that
const allCategories = ['all',... new Set(items.map((item)=> item.category))];
  console.log(allCategories)


function App() {

  const [menuItems,setMenuItems] = useState(items)// getting items from data.js
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category) => {

    if(category === 'all'){
      setMenuItems(items)
      return;
    }

    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  };

  return (
    <>
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Awesome Menu</h2>
          <div className="underline"></div>
        </div>

        {/* categories and menu component */}
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
    </>
  );
}

export default App;
