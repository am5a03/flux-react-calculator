var InputArea = require('../components/inputArea');
var HistoryBox = React.createClass({
	histories: [],
	getInitialState: function() {
		var histories = {
			'histories' : []
		}
		return histories;
	},
	onWriteHistory: function(history) {
		this.histories.push(history);
		this.setState({'histories' : this.histories});
	},
	render: function() {
		var histories = this.state.histories.map(function (history, index) {
			return (
				<li key={ history.id } className="historic-formula">
					<div>{ history.expression } = { history.answer }</div>
				</li>
			);
		});

		return (
			<div className="history-box">
				<h3>History</h3>
				<ul className="history-box__list">
					{ histories }
				</ul>
				<InputArea writeHistory={this.onWriteHistory} />
			</div>
		);
	}
});

module.exports = HistoryBox;