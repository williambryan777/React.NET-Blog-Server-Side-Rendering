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
				<a href={this.getUserPageUrl } target="_blank">
					<img  src={this.getAvataUrl } className="imgShadow" alt="" />
				</a>
			</div>
			
		);
	},
	getAvataUrl() {//头像地址
		return '/Avata/' + this.props.userId;
	},
	getUserPageUrl() {//个人用户主页
		return '/UserPage/' + this.props.userId;
	}
});

module.exports = Avatar;

