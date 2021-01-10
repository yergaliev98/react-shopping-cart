import React from 'react'
import "../../css/components/filter.css"

function Filter(props) {
  const { count, date, sort, sortProducts, filterProducts } = props;
  return (
    <div className="filter"> 
          <div className="filter__item filter__item--result">
            {count} Products
          </div>
          <div className="filter__item filter__item--sort">
            Order {" "}
            <select onChange={sortProducts} value={sort}>
              <option>Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
          <div className="filter__item filter__item--size">
            Filter {" "}
            <select value={date} onChange={filterProducts}>
              <option value="all">All</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
    </div>
  )
}

export default Filter
