import React, { Component } from 'react';
import {Footer} from './footer.js';


class Timer extends Component {
  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }
  ticker(){
    this.setState( {clock: new Date() - this.props.start} )
  }
  constructor(props){
    super(props);
    this.state = {
      clock:0,
    };
    this.ticker = this.ticker.bind(this);
  }
  render(){
    var clock = Math.round(this.state.clock / 1000);
    return(
      <div>
          <span id="clock">{clock}</span>
      </div>
    );
  }
}

export class Page extends Component {
	
	onClickEvent(){
		var h3 =  document.getElementById('h3');
		var newColor = h3.style.backgroundColor === 'green'? 'yellow':'green';
		h3.style.backgroundColor = newColor;
		h3.style.padding = '20px';
	}


render(){

	var element = <h3 id = 'h3'> hello  </h3>;

		return (<div >
				{element}
				<Timer start={ Date.now() } />
				<button onClick = {this.onClickEvent} > Click ME </button>
				<section> <Footer /> </section>
			</div>
		) ;
	}
}
