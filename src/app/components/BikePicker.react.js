import React from 'react';

export default class App extends React.Component {


  constructor(){
    super();
    this.state = { size: [] }
  }

  componentWillMount() {
    let size = ['small', 'medium', 'large', 'x-large']
      // size: ['small', 'medium', 'large', 'x-large'],
      // color: ['black', 'slime'],
      // buildKit: ['FRAME ONLY', 'ST', 'XT-01']
    
    this.setState({size});
  } 
  render() {
    let size = this.state.size
    console.log(size);
    return (
      <form>
        <dl className="form-group">
          <dt><label>SIZE</label></dt>
          <dd>
          <select className="form-select">
            {size.map(s => <Size size={s}/> )} 
          </select>
          </dd>
        </dl>

        {/*<dl className="form-group">
          <dt><label>COLOR</label></dt>
          <dd>
          <select className="form-select">
            {bikeOptions.color.map(size => 
              <option key={bikeOptions.color}>{bikeOptions.color}</option>
            )}
          </select>
          </dd>
        </dl>

        <dl className="form-group">
          <dt><label>BUILD KIT</label></dt>
          <dd>
          <select className="form-select">
            {bikeOptions.buildKit.map(size => 
              <option key={bikeOptions.buildKit}>{bikeOptions.buildKit}</option>
            )}
          </select>
          </dd>
        </dl>*/}

      </form>  
    );
  }
}

const Size = (props) => <option>{props.size}</option>