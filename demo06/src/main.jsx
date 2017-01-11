import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
	render(){
		return (
			<h1>hello {this.props.guest}</h1>
		)
	}
}

ReactDOM.render(
	<Hello guest="小明" />,
	document.querySelector("#app")
)