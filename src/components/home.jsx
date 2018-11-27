import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Home',

		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.concatW, false);
	}

	concatW = (event) => {
		const { value } = this.state;
		let newvalue = '';
		console.log(event.key);
		if (event.key === 'ArrowUp') {
			newvalue = value.concat(' is Home');
			this.setState({ value: newvalue });
		}
	}

	render() {
		const { value } = this.state;
		return (
			<div>
				<h1>
					{ value }
				</h1>
				<button type="button">
					<Link to="/pantalla/">Pantalla</Link>
				</button>
			</div>
		);
	}
}


export default Home;
/*
<Link to="/pantalla/">
	<button type="button">Ir a Pantalla</button>
</Link>
 */
