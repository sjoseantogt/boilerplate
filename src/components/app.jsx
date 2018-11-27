import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './home';
import Pantalla2 from './pantalla2';


class SomeClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Container',

		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.concatW, false);
	}

	concatW = (event) => {
		const { value } = this.state;
		let newvalue = '';
		console.log(event.key);
		if (event.key === 'ArrowLeft') {
			newvalue = value.concat(' is a container');
			this.setState({ value: newvalue });
		}
	}

	render() {
		const { value } = this.state;
		console.log(value);
		return (
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/pantalla" exact component={Pantalla2} />
				</div>
			</Router>
		);
	}
}


export default SomeClass;
