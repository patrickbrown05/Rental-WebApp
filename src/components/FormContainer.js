import React, { Component } from 'react';
import { Consumer } from '../context';
import axios from 'axios';

/* Import Components */
// import CheckBox from '../components/productupload/CheckBox';
import Input from './productupload/Input';
import TextArea from './productupload/TextArea';
import Select from './productupload/Select';
import Button from './productupload/Button';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProduct: {
        product_category: "",
        product_name: "",
        product_description: "",
        username: "username",
        product_price: "",
        product_retail: "",

        user_id: "123-312-placeholder-user-id",
        product_picture: ""
        // product_id: '',
        // gender: '',
        // categories: [],
        // about: ''
      },

      genderOptions: ["Male", "Female", "Others"],
      categoryOptions: [
        "Hardware",
        "Powertools",
        "Appliances",
        "Equipment",
        "Other"
      ]
    };
    // this.handleUserID = this.handleUserID.bind(this);
    // this.handleUsername = this.handleUsername.bind(this);

    this.handleProductCategory = this.handleProductCategory.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
    this.handleProductDescription = this.handleProductDescription.bind(this);
    this.handleProductPrice = this.handleProductPrice.bind(this);
    this.handleProductRetail = this.handleProductRetail.bind(this);
    this.handleProductPicture = this.handleProductPicture.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleProductName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_name: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

  handleProductRetail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_retail: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }
  handleProductPrice(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_price: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

  handleProductDescription(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_description: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }
  handleProductPicture(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_picture: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

  //NEED TO UPDATE THIS WITH ANOTHER VALUE
  handleProductCategory(e) {
    let value = e.target.value;
    let product_category = e.target.product_category;
    this.setState(
      prevState => ({
        newProduct: {
          ...prevState.newProduct,
          product_category: value
        }
      }),
      () => console.log(this.state.newProduct)
    );
  }

  handleFormSubmit = async (dispatch, e) => {
    e.preventDefault();

    let userData = this.state.newProduct;

    fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        dispatch({ type: "UPLOAD", payload: userData });
      });
    });

    this.setState({
      newProduct: {
        product_name: "",
        product_category: "",
        product_price: "",
        product_retail: "",
        product_description: "",
        product_picture: ""
      }
    });

    this.props.history.push("/uploadcomplete");
  };

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newProduct: {
        product_name: "",
        product_category: "",
        product_price: "",
        product_retail: "",
        product_description: "",
        product_picture: ""
      }
    });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form
              className='container'
              onSubmit={this.handleFormSubmit.bind(this, dispatch)}
            >
              {/* product_name of the product */}
              <Input
                inputType={"text"}
                title={"Product Name"}
                name={"product_name"}
                value={this.state.newProduct.product_name}
                placeholder={"Enter your Product name"}
                handleChange={this.handleProductName}
              />{" "}
              {/* Price of the product */}
              <Input
                inputType={"text"}
                name={"product_price"}
                title={"Product Price"}
                value={this.state.newProduct.product_price}
                placeholder={"Enter your Price per day"}
                handleChange={this.handleProductPrice}
              />{" "}
              <Input
                inputType={"text"}
                name={"product_retail"}
                title={"Product Retail Value"}
                value={this.state.newProduct.product_retail}
                placeholder={"Enter your Products Retail Value"}
                handleChange={this.handleProductRetail}
              />{" "}
              <Input
                inputType={"text"}
                name={"product_picture"}
                title={"Product Picture"}
                value={this.state.newProduct.product_picture}
                placeholder={
                  "Upload your product picture || ex: /img/grill.jpg"
                }
                handleChange={this.handleProductPicture}
              />{" "}
              {/* Category of the product */}
              <Select
                title={"Categories"}
                name={"product_category"}
                options={this.state.categoryOptions}
                value={this.state.newProduct.product_category}
                placeholder={"Select Category"}
                handleChange={this.handleProductCategory}
              />{" "}
              {/* Product Description */}
              <TextArea
                title={"Product Description"}
                rows={5}
                value={this.state.newProduct.product_description}
                name={"product_description"}
                handleChange={this.handleProductDescription}
                placeholder={"Describe your Product."}
              />
              <Button
                action={this.handleFormSubmit.bind(this, dispatch)}
                type={"primary"}
                title={"Submit"}
                style={buttonStyle}
              />{" "}
              {/*Submit */}
              <Button
                action={this.handleClearForm}
                type={"secondary"}
                title={"Clear"}
                style={buttonStyle}
              />{" "}
              {/* Clear the form */}
            </form>
          );
        }}
      </Consumer>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

export default FormContainer;
