import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props){
    super(props);
    

    this.state = {
      uid: props.uid,
      username: props.username,
      user_desc: props.user_desc,
      first_name: props.first_name,
      rating: props.rating,
      profile_pic: props.profile_pic
    };
  }
  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
  }
  render() {
    // const {username1} = this.props;
    const {
      uid,
      username,
      user_desc,
      first_name,
      last_name,
      rating,
      profile_pic
    } = this.props.profileContent[0];

    return (
      <div>
        <div id='card-reveal' className='container'>
          <div className='row'>
            <div className='col s4 m4 l4'>
              <div className='card'>
                <div className='card-image waves-effect waves-block waves-light'>
                  <img
                    className='activator'
                    src={profile_pic}
                    alt='office'
                  />
                </div>
                <div className='card-content'>
                  <span className='card-title activator grey-text text-darken-4'>
                    {username}
                    <i className='mdi-navigation-more-vert right' />
                  </span>
                  <p>
                    <a href='#'>View reviews</a>
                  </p>
                </div>
                <div className='card-reveal'>
                  <span className='card-title grey-text text-darken-4'>
                    <i className='material-icons'>
                      star star star star star_border
                    </i>
                    <i className='mdi-navigation-close right' />
                  </span>
                  <span className='border'>Easel - Like New</span>
                  <p>
                    "Easel is great. Absolutely wonderful!" I will let my
                    mum know about this, she could really make use of more
                    of your items!"
                    <br />- Dianemarie J.
                  </p>
                  <span className='card-title grey-text text-darken-4'>
                    <i className='material-icons'>
                      star star star star star
                    </i>
                    <i className='mdi-navigation-close right' />
                  </span>
                  <span className='border'>Picnic Table - Like New</span>
                  <p>
                    "I would like to personally thank you for your
                    outstanding help!"
                    <br />- Brian K.
                  </p>
                </div>
              </div>
            </div>
            {/* profile information */}
            <div className='col s5 m5 l5'>
              <p>{user_desc}</p>
            </div>
            <h1>{username}</h1>
            <Link to={'/UploadProduct'} className="btn btn-primary">
              <a>UploadProduct</a>
  </Link>
          </div>
        </div>
        <div>
          <h2>Welcome {first_name} {last_name}</h2>
        </div>
        <div className='container'>
          <div className='invoice-lable'>
            <div className='row'>
              <div className='col s12 m12 l12 cyan'>
                <h4 className='white-text invoice-text center'>RENTALS</h4>
              </div>
              <div className='invoice-table'>
                <div className='row'>
                  <div className='col s12 m12 l12'>
                    <table className='striped'>
                      <thead>
                        <tr>
                          <th data-field='no'>No</th>
                          <th data-field='item'>Item</th>
                          <th data-field='uprice'>Days</th>
                          <th data-field='price'>Daily Price</th>
                          <th data-field='price'>WhyBuy</th>
                          <th data-field='price'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>MacBook Pro</td>
                          <td>4</td>
                          <td>$ 19.99</td>
                          <td>$ 1.99</td>
                          <td>$ 79.96</td>
                        </tr>

                        <tr>
                          <td colSpan={4} className='white' />
                          <td className='cyan white-text'>Grand Total</td>
                          <td className='cyan strong white-text'>
                            $ 102.96
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Profile.defaultProps = {
//   uid: '',
//   username: '',
//   user_desc: '',
//   first_name: '',
//   rating: '',
//   profile_pic: ''
// };
export default Profile;
