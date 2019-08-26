import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class UploadComplete extends Component {
  render() {
    return (
      <div>
        <h1>You have successfully uploaded your Product!</h1>
        <h2>
          <Link to="/">Return home</Link>
        </h2>
      </div>
    );
  }
}
export default UploadComplete;
