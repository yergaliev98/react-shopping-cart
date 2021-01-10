import React, { useState } from "react";
import "./css/components/app.css";
import Product from "./components/Product";
import data from "./data.json";
import Filter from "./components/Filter";
  //-----------Global variable-------//
  const DATA = data.products;
export default function App() {
  //-----------Local States----------//
  const [products, setProducts] = useState(DATA);
  const [date,setDate] = useState("");
  const [sort, setSort] = useState("");


  //-----------Event Handlers--------//
  const sortProducts = (e) => {
     const sort = e.target.value;
     console.log(e.target.value) ;
     setSort(sort);
     setProducts(products.slice().sort((a,b) => 
       sort === "lowest" ?
       a.price > b.price 
          ? 1
          : -1 
      : sort === "highest" ?
      a.price < b.price 
          ? 1
          : -1 
      : a._id > b._id 
          ? 1
          : -1
     ))
  }

  const filterProducts = (e) => {
    console.log(e.target.value)
    setDate(e.target.value);
    (e.target.value === "all") ? (setProducts(DATA)) :  (setProducts(DATA.filter(product => {
      return product.specification.date.year === Number(e.target.value);
      }
     )
    ));
  }

  return (
    <div className="grid__container">
      {/* Header */}
      <header className="header">
        React Shopping Cart
      </header>
      {/* Main */}
      <main className="content">
        <div className="main">
          <div className="main__content">
            <Filter 
              count={products.length}
              date={date}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Product products={products} />
          </div> 
        </div>
        <div className="sidebar">
            Cart item
        </div>
      </main>
       {/* Footer */}
      <footer className="footer">
        All rights is reserved
      </footer>
    </div>
  );
}