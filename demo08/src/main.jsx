import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title:"hello world"
		}
	}

	change(){
		this.setState({
			title:'你好,世界'
		})
	}

	greet(){
		alert('你好')
	}

	render(){
		return (
			<div>	
				<h1 onClick={this.greet}>{this.state.title}</h1>
				<button onClick = {this.change.bind(this)}>修改标题</button>
			</div>
		)
	}
}

ReactDOM.render(
	<Hello />,
	document.querySelector("#app")
)