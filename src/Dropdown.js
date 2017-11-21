
import React, {Component} from 'react';

class Dropdown extends Component {

	constructor (props){
		super(props);
		this.state = {isOpened: false };
	}

	toggleState(){
		this.setState({isOpened:!this.state.isOpened});
	}


	render(){
		console.log('isOpened', this.state.isOpened);
		let dropdownText;
		if (this.state.isOpened) {
			dropdownText = <p> im Anna waaaaaaaaaaaaa , <br/>  no  just Anna</p>
		}

	return(
		<div onClick = {this.toggleState.bind(this)}> Click Me

		{dropdownText} 

		</div>
	)
	}
}

export default Dropdown;