import React from 'react';
import Immutable from 'seamless-immutable';
import pureRender from '../../../decorators/pureRender';
import BikePicker from '../../../components/BikePicker.react.js';

@pureRender
export default class Home extends React.Component {

  render() {
    return(
      <div id="home">
        <h1>EVIL</h1>
        <h3>Component Test</h3>
        <BikePicker />
      </div>
    );
  }
}