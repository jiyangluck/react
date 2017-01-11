import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			guest:'我的状态'
		}
	}

	render(){
		return (
			<h1>hello {this.state.guest}</h1>
		)
	}
}

ReactDOM.render(
	<Hello />,
	document.querySelector("#app")
)