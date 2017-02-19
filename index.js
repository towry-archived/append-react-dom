var React = require('react');
var ReactDOM = require('react-dom');

module.exports = function appendReactDOM(Component, el, props, done) {
	if (typeof props === 'function') {
		done = props;
		props = null;
	}

	if (!props) {
		props = {};
	}

	if (el.length) {
		el = Array.prototype.slice.call(el);
	} else {
		el = [el];
	}

	el.forEach(function (dom) {
		let div = document.createElement('div');
		let r = ReactDOM.render(React.createElement(Component, props, null), div, function () {
			dom.appendChild(ReactDOM.findDOMNode(this));
			typeof done === 'function' && done();
		});
	});
}
