import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useUserContext } from "../ContextProvider";

const Card = () => {
  const {
    products,
    setProducts,
    cardAmount,
    setCardAmount,
    cardQuantity,
    setCardQuantity,
  } = useUserContext();
  const [overallTotal, setOverallTotal] = useState(0); // New state variable for overall total

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      const priceAfterDiscount = (
        product.price -
        product.price * (product.discountPercentage / 100)
      ).toFixed(2);
      total += parseFloat(priceAfterDiscount) * (product.quantity || 1);
    });
    setOverallTotal(total.toFixed(2));
  }, [products]);

  return (
    <div>
      {products.map((product, i) => {
        const priceAfterDiscount = (
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2);

        const [quantity, setQuantity] = useState(product.quantity || 1);
        const [subTotal, setSubTotal] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubTotal((priceAfterDiscount * quantity).toFixed(2));
        }, [quantity]);

        const handleQuantitySub = (priceAfterDiscount, quantity) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setCardQuantity(cardQuantity - 1);
            setCardAmount(cardAmount - parseFloat(priceAfterDiscount));
            setOverallTotal((prevTotal) =>
              (parseFloat(prevTotal) - parseFloat(priceAfterDiscount)).toFixed(
                2
              )
            );
          }
        };

        const handleQuantityAdd = (i, priceAfterDiscount, quantity) => {
          if (products[i].stock > quantity) {
            setQuantity(quantity + 1);
            setCardQuantity(cardQuantity + 1);
            setCardAmount(cardAmount + parseFloat(priceAfterDiscount));
            setOverallTotal((prevTotal) =>
              (parseFloat(prevTotal) + parseFloat(priceAfterDiscount)).toFixed(
                2
              )
            );
          }
        };

        const price = product.price;
        const DetailPrice = price * (product.discountPercentage / 100);

        const [TotalSub, setTotalSub] = useState(
          (priceAfterDiscount * quantity).toFixed(2)
        );

        return (
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            key={i}
          >
            <div
              className="card mb-3"
              style={{ width: "80%", borderRadius: "20px" }}
            >
              <div className="row g-0 ">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img
                    src={product.images}
                    className="img-fluid product-img"
                    alt="..."
                    style={{ borderRadius: "30px" }}
                  />
                </div>

                <div className="col-md-7 ">
                  <div className="row g-0">
                    <div className="col-md">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title">{product.title}</h5>
                          </div>
                          <div className="col">
                            <h5 className="card-title d-flex justify-content-end ">
                              ${product.price}
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">
                              <b>Brand : </b>
                              {product.brand}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <p className="card-text text-success ">
                              Discount Offer : {product.discountPercentage}%
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text">{product.description}</p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text text-danger">
                              In Stock : {product.stock}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>
                        <div className="row">
                          <div className="col d-flex align-items-center">
                            <h5 className="review-stat">
                              Rating: {product.rating}
                            </h5>
                          </div>
                          <div className="col d-flex align-items-center justify-content-end">
                            <div>
                              <button
                                className="btn btn-secondary"
                                onClick={() =>
                                  handleQuantitySub(
                                    priceAfterDiscount,
                                    quantity
                                  )
                                }
                              >
                                -
                              </button>
                              <span> {quantity} </span>
                              <button
                                className="btn btn-secondary"
                                onClick={() =>
                                  handleQuantityAdd(
                                    i,
                                    priceAfterDiscount,
                                    quantity
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="col"></div>
                        </div>
                        <div className="row">
                          <div className="col card-text d-flex align-items-center ">
                            <small className="text-muted d-flex align-items-center">
                              Last updated 3 mins ago
                            </small>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 p-4 ">
                    <div className="col pt-4 subtotal">
                      <div className="row">
                        <div className="card-title col ">
                          Original Price (1 item) :
                        </div>
                        <div className="card-title col text-end">${price}</div>
                      </div>
                      <div className="row">
                        <div className="card-title col text-success">
                          Discount Amount :
                        </div>
                        <div className="card-title col text-end text-success">
                          ${Math.round(price - (price - DetailPrice))}
                        </div>
                      </div>
                      <div className="row">
                        <div className="card-title col">
                          Final Price (Price - Discount) :
                        </div>
                        <div className="card-title col  text-end ">
                          ${priceAfterDiscount}
                        </div>
                      </div>
                      <div className="row">
                        <div className="card-title col d-flex align-items-center">
                          Sub-Total Amount (Final price * Quantity) :
                        </div>
                        <div className="card-title col text-end fs-4 fw-normal">
                          ${subTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="container mt-4 OverallPriceCss">
        <h3>Overall Total: ${overallTotal}</h3>
      </div>
    </div>
  );
};

export default Card;
