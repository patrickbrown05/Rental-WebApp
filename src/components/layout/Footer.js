import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = props => {
  const { branding } = props;
  return (
    <div>
      {/* Footer */}
      <footer className="section teal darken-2 white-text center">
        <p className="flow-text">WhyBuy © 2018</p>
      </footer>
    </div>
  );
};

export default Footer;
