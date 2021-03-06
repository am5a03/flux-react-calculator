var InputArea = React.createClass({
	id: 0,
	getInitialState: function() {
		return {
			value: ''
		};
	},
	onKeyDown: function(e) {
		if (e.keyCode == 13) {
			var currentExpression = e.currentTarget.value;			
			try {
				var answer = eval(currentExpression);
				this.props.writeHistory({ 'expression' : currentExpression, 'answer' : answer, 'id' : ++this.id});
			} catch (ex) {

			} finally {
				this.setState({value : ''});
			}
		}
	},
	onChange: function(e) {
		this.setState({
			value : e.target.value
		});
	},
	render: function () {
		return (
			<div className="input-area">
				<input className="input-area__input" placeholder="Expression" onChange={ this.onChange } onKeyDown={ this.onKeyDown } value={this.state.value} />
			</div>
		);
	}
});

module.exports = InputArea;