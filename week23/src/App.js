import React from "react";
import data from './data.js';
import Tariff from './components/Tariff';
import './App.css';
function App() {
  return (
    <section className="cards">
      {
        data.map ((item) =>
        <Tariff key={item.id} titleColor={item.titleColor} price={item.price} priceColor={item.priceColor} speed={item.speed} isSelected={item.isSelected}></Tariff>
        )
      }
    </section>
  );
}
export default App;