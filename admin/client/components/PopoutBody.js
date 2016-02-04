import React from 'react';
import blacklist from 'blacklist';
import classnames from 'classnames';

var PopoutBody = React.createClass({
	displayName: 'PopoutBody',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		scrollable: React.PropTypes.bool,
	},
	render () {
		let className = classnames('Popout__body', {
			'Popout__scrollable-area': this.props.scrollable,
		}, this.props.className);
		let props = blacklist(this.props, 'className', 'scrollable');
		return <div className={className} {...props} />;
	},
});

module.exports = PopoutBody;
