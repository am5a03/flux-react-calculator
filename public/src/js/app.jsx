var Header = require('./partials/header');
var HistoryBox = require('./partials/historyBox');

var Calculator = React.createClass({
	render: function () {
		return (
			<div className="app">
				<Header />
				<HistoryBox />
			</div>
		);
	}
});

React.render(<Calculator />, document.body);