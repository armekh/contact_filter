import React from 'react';

export class Navbar extends React.Component {
render(){
	const menuItems = ['Home','Services', 'Clients', 'Contact us'];

	const myMenu = menuItems.map((item, index) => {
		return (<li key={index}> <a href={'/'+item.replace(/\s/g,'-')}> { item } </a></li>	)
	});

		return <ul> {myMenu} </ul> ;
	}
}
