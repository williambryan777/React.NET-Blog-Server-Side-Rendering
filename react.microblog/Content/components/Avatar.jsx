/**
 *  头像
 */

var React = require('react');

var Avatar = React.createClass({
	propTypes: {
	    userId: React.PropTypes.number.isRequired
	},
	render() {
		return (
			<div className='userimgbox'>
				<a href={this.getUserPageUrl()} target="_blank">
					<img src={this.getAvataUrl()} className="imgShadow" alt="" />
				</a>
			</div>

		);
	},
	getAvataUrl() {
		return 'http://www.followme.com/Avata/' + this.props.userId;
	},
	getUserPageUrl() {
		return 'http://www.followme.com/UserPage/' + this.props.userId;
	}
});

module.exports = Avatar;

