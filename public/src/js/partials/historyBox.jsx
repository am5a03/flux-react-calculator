var InputArea = require('../components/inputArea');
var HistoryBox = React.createClass({
	render: function() {
		return (
			<div className="history-box">
				<InputArea />
			</div>
		);
	}
});

module.exports = HistoryBox;