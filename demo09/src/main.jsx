import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			number:0
		}
	}

	add(){
		this.setState({
			number:++this.state.number
		})
	}

	sub(){
		this.setState({
			number:--this.state.number
		})
	}

	render(){
		return (
			<div>
				<button onClick={this.add.bind(this)}>+</button>
				<span>{this.state.number}</span>
				<button onClick={this.sub.bind(this)}>-</button>
			</div>
		)
	}
}

// ReactDOM.render(
// 	<Hello />,
// 	document.querySelector("#app")
// )
ReactDOM.render(
	<div>
		<Hello />
		<Hello />
		<Hello />
		<Hello />
		<Hello />
	</div>,
	document.querySelector('#app')
)