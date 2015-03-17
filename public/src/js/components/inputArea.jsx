var InputArea = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},
	render: function () {
		return (
			<div className="input-area">
				<input className="input-area__input" placeholder="Expression"/>
			</div>
		);
	}
});

module.exports = InputArea;