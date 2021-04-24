
import React from 'react';
import ReactDOM from 'react-dom';
import './Rstyle.scss';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
		value: 16,
		color:'#F0F0F0'
	}
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
	/* this.state.color:'#B0E0E6'*/
 

    this.setState({
		value: event.target.value
		
	});
        
    
  }

  render() {
 
    return ([
	<b><font style={{color:'black',margin:'219px'}} size='5'>${this.state.value}</font></b>,
      <div>
        <label>
          <input 
	
            id="slider" 
            type="range" 
            min="0" max="99" 
            value={this.state.value} 
            onChange={this.handleChange}
            step="0"/>
        </label>
      </div>
	  
    ]);
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));


/*
You are now watching a React file
through our 'Show React' tool.
Click the tab to check out
the 'index.html' file as well.
*/

