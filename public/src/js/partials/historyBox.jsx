var InputArea = require('../components/inputArea');
var HistoryBox = React.createClass({
	getInitialState: function() {
		var histories = {
			'histories' : [

			]
		}
		return histories;
	},
	onInputAreaChange: function(e) {
		console.log(e);
	},
	onWriteHistory: function(history) {
		console.log(history);
	},
	render: function() {
		var histories = this.state.histories.map(function (history, index) {
			return (
				<li key={ history.id } className="historic-formula">
					{ history.formula }
				</li>
			);
		});

		return (
			<div className="history-box">
				<ul className="history-box__list">
					{ histories }
				</ul>
				<InputArea writeHistory={this.onWriteHistory} />
			</div>
		);
	}
});

module.exports = HistoryBox;