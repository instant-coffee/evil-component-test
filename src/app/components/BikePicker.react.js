import React from 'react';

export default class App extends React.Component {

  render() {
    const size = ['small', 'medium', 'large', 'x-large']
    const color = ['black', 'slime']
    const buildKit = ['FRAME ONLY', 'ST', 'XT-01']

    return (
      <div>
        <nav className="menu size">
          <span className="menu-heading">SIZE</span>
          <a className="menu-item">OP1</a>
          <a className="menu-item">OP2</a>
          <a className="menu-item">OP3</a>
        </nav>
        <nav className="menu color">
          <span className="menu-heading">COLOR</span>
          <a className="menu-item">OP1</a>
          <a className="menu-item">OP2</a>
          <a className="menu-item">OP3</a>  
        </nav>  
        <nav className="menu build-kit">
          <span className="menu-heading">BUILD</span>
          <a className="menu-item">OP1</a>
          <a className="menu-item">OP2</a>
          <a className="menu-item">OP3</a>  
        </nav>
      </div>  
    );
  }
}