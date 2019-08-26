import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardContent extends React.Component {
  //this was to test
  onShowClick = (user, e) => {
    console.log(user, e.target);
  };
  state = {};

  render() {
    const {
      product_name,
      product_price,
      product_category,
      username,
      product_picture,
      product_retail
    } = this.props.cardContent;
    return (
      <div className="col s12 m4">
        <div className="card z-depth-4">
          <div className="card-image">
            <img src={product_picture} alt="" />
            <span className="card-title strokeme">{product_name}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <Link
                id="Checkout-link"
                to={{
                  pathname: "/checkout",
                  state: {
                    product_picture: product_picture,
                    product_name: product_name,
                    product_price: product_price
                  }
                }}
                className="material-icons"
              >
                add
              </Link>
            </a>
          </div>
          <div className="card-content">
            <div className="costDesc left">
              <p id="itemCost">${product_price}</p>
              <p id="itemDescription">{product_category}</p>
            </div>
            <div className="userDist right">
              <p className="right" id="item_username">
                {username}
              </p>
              <br />
              <p className="right" id="distanceAway">
                ${product_retail} retail value!
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

CardContent.defaultProps = {
  product_name: '',
  product_price: '',
  product_category: '',
  username: '',
  product_picture: '',
  product_retail: ''
};
export default CardContent;
// const domContainer = document.querySelector('#cardTest');
// ReactDOM.render(<CardContent name="Get FOOKED" category="badassery" username="aprilsfools" distance="2332" price="2222.50"/>, domContainer);
