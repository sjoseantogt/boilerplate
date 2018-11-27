import React from 'react';
import ReactDOM from 'react-dom';
import SomeClass from './components/app';

const divRoot = document.createElement('div');
divRoot.setAttribute('id', 'root');
document.body.append(divRoot);

ReactDOM.render(
	<SomeClass />, document.getElementById('root'),
);
