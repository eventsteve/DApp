import React, { Component } from 'react';
import UploadFile from 'components/form/UploadFile';

class HomeComponent extends Component {
  render() {
    return (
        <div>
          <h1>Home Component</h1>
          <UploadFile />
        </div>
    );
  }
}

export default HomeComponent;