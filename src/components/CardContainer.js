import React, { Component } from 'react';
import CardContent from './CardContent';
import { Consumer } from '../context';

class CardContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { cards } = value;
          return (
            <div className="row">
              {cards.map(cardContent => (
                <CardContent cardContent={cardContent} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default CardContainer;

// const domContainer = document.querySelector('#cardTest');
// ReactDOM.render(<CardContainer />, domContainer);
// price={cardContent.price}
// name={cardContent.name}
// category={cardContent.category}
// username={cardContent.username}
// distance={cardContent.distance}
// image={cardContent.image}
// cards: [
//   {
//     product_price: '2',
//     product_name: 'shovel',
//     product_category: 'hardware',
//     username: 'billy',
//     distance: '5',
//     image: '/img/shovel1.jpg'
//   },
//   {
//     product_price: '2',
//     product_name: 'shovel',
//     product_category: 'hardware',
//     username: 'billy',
//     distance: '5',
//     image: '/img/shovel1.jpg'
//   },
//   {
//     product_price: '2',
//     product_name: 'shovel',
//     product_category: 'hardware',
//     username: 'billy',
//     distance: '5',
//     image: '/img/shovel1.jpg'
//   },
//   {
//     product_price: '2',
//     product_name: 'shovel',
//     product_category: 'hardware',
//     username: 'billy',
//     distance: '5',
//     image: '/img/shovel1.jpg'
//   }
// ]
