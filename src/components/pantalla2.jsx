import React from 'react';


class Pantalla2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Pantalla 2',

		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.concatW, false);
	}

	concatW = (event) => {
		const { value } = this.state;
		let newvalue = '';
		console.log(event.key);
		if (event.key === 'ArrowDown') {
			newvalue = value.concat(' is a second jsx');
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
			</div>
		);
	}
}


export default Pantalla2;
