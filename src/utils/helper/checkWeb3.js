import * as React from 'react';

export default class CheckWeb3 extends React.Component {

  render() {
    // not install metamask
    var a = getModuleName();
    if (!1) {
      window.location.href = `/auth.html`;
      return null;
    }

    return this.props.children;
  }
}
