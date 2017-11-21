
import React, {Component} from 'react';
// import PropTypes from 'prop-types';

const CONTACTS = [
		{
			id:1,
			name:'Violetta',
			tel:'455445',
			img:'https://placeimg.com/100/100/people'
		},
		{
			id:2,
			name:'Syuzanna',
			tel:'123311',
			img:'https://placeimg.com/100/100/animals'
		},
		{
			id:3,
			name:'Marina',
			tel:'3456789',
			img:'https://placeimg.com/100/100/nature'
		},
		{
			id:4,
			name:'Rita',
			tel:'33229870',
			img:'https://placeimg.com/100/100/any'
		}
		];

class Contact extends Component{
	render(){
		return(			
				<li >
					<img src={this.props.img} alt ={this.props.name} width='100' />
					<p>{this.props.name}<br/>
					{this.props.tel}</p>
				</li>
				)}
			};


class ContactList extends Component {

constructor(props) {
    super(props);
    this.state = {displayedContacts:CONTACTS };
    this.handleSerch = this.handleSerch.bind(this);
  }

	handleSerch(event){
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function(el){
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery)!==-1;
		});

		this.setState({
			displayedContacts:displayedContacts
		});

	}

	render(){
		return(<div > 

			<form>
				<input 
				id='searchField'
				type= 'text'
				// value = ' '
				placeholder='Search Contact'
				onChange = {this.handleSerch}
				></input>

				<ul className='contacts'>

							{this.state.displayedContacts.map((el)=> 
							<Contact 
							key={el.id} 
							name={el.name} 
							tel={el.tel} 
							img={el.img}/>
										)}

				</ul>
			</form>

			</div> )
	}
}

export default ContactList;