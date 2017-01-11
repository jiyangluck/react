import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			fruits : ["香蕉","苹果","鸭梨"]
		}
	}
	
	remove(){
		this.setState({
			fruits:this.state.fruits.splice(1,1)
		})
	}

	render(){
		return (
			<ul>
				{
					// this.state.fruits.map(function(val,ind){
					// 	console.log(this)
					// 	return (
					// 		<li key={ind}>{val} 
					// 			<button>x</button>
					// 		</li>
					// 	)
					// })
					this.state.fruits.map((val,ind)=>(
						<li key={ind}>
							{val}
							<button onClick={this.remove.bind(this)}>x</button>
						</li>
					))
				}
			</ul>
		)
	}
}

ReactDOM.render(
	<Hello />,
	document.querySelector("#app")
)