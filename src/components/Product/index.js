import React from "react";
import "../../css/components/product.css";
import formatCurrency from "../../util";

export default function Product({ products }) {
  return ( 
    <div className="product">
      {products.map((product) => (
        <div className="product__item" key={product._id}>
          <div className="product__title">
            <a href={"#" + product._id}>
              <h3>{product.title}</h3>
              <img
                className="product__img"
                alt={product.title}
                src={process.env.PUBLIC_URL + product.img}
              />
            </a>
          </div>
          <div className="product__spec">
            <h3 className="product__spec-title">Specification</h3>
            <ul>
              <li>
                <span className="product__text">Release date: </span>
                {product.specification.date.year}, 
                {` ${product.specification.date.month}`}
                {product.specification.date.day === null ? ` ` : `, ${product.specification.date.day}`}
              </li>
              <li>
                <span className="product__text"> Dimension: </span>
                {`${product.specification.dimensions.height} x ${product.specification.dimensions.width} x ${product.specification.dimensions.length}`}
              </li>
              <li>
                <span className="product__text"> Weight: </span>
                {`${product.specification.weight} g`}
              </li>
              <li>
                <span className="product__text"> Screen: </span>
                {product.specification.screen}
              </li>
              <li>
                <span className="product__text"> Battery: </span>
                {`${product.specification.battery} mAh`}
              </li>
              <li>
                <span className="product__text"> Sensors: </span>
                {product.specification.sensors}
              </li>
            </ul>
          </div>
          <div className="product__bottom-block">
            <div className="product__price">
              <h4>Price</h4>
              <p>{formatCurrency(product.price)}</p>
            </div>
            <button className="product__btn">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
