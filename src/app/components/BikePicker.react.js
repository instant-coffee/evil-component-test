import React from 'react';

export default class App extends React.Component {

  render() {
    const size = ['small', 'medium', 'large', 'x-large']
    const color = ['black', 'slime']
    const buildKit = ['FRAME ONLY', 'ST', 'XT-01']

    return (
      <form>
        <dl className="form-group">
          <dt><label>SIZE</label></dt>
          <dd>
          <select className="form-select">
            <option>SMALL</option>
            <option>OP2</option>
            <option>OP3</option>
          </select>
          </dd>
        </dl>
        <dl className="form-group">
          <dt><label>COLOR</label></dt>
          <dd>
          <select className="form-select">
            <option>BLACK</option>
            <option>OP2</option>
            <option>OP3</option>
          </select>
          </dd>
        </dl>

      
        <dl className="form-group">
          <dt><label>BUILD KIT</label></dt>
          <dd>
          <select className="form-select">
            <option>FRAME ONLY</option>
            <option>OP2</option>
            <option>OP3</option>
          </select>
          </dd>
        </dl>

      </form>  
    );
  }
}