import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  console.log('reducer' + JSON.stringify(action.payload));
  switch (action.type) {
    case "UPLOAD":
        return {
          ...state,
          cards: [action.payload, ...state.cards]
        };

    case "LOGIN":
      return {
        ...state,
        user: [action.payload, ...state.user]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    user: [],
    cards: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    fetch('/products')
      .then(res => res.json())

      .then(cards => this.setState({ cards }));

    // fetch('/users')
    //   .then(res => res.json())
    //   .then(user => this.setState({ user }));

    // const res = await axios
    //   .post('http://localhost:3001/users/login')
    //   .then(res => this.setState({ user: res.data }));
    // console.log('componentDidMount' + JSON.stringify(res));

    // this.setState({ cards: res.cards });
    // this.setState({ user: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
