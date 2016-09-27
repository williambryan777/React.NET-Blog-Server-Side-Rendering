/**
 *  头像
 */

var React = require('react');

var Avatar = React.createClass({
	propTypes: {
		userId: React.propTypes.string.isRequired
	},
	render() {
		return (
			<div className='userimgbox'>
				<a href={this.getUserPageUrl(this.props.userId) } target="_blank">
					<img  src={this.getAvataUrl(this.props.userId) } className="imgShadow" alt="" />
				</a>
			</div>
			
		);
	},
	getAvataUrl(userId) {//头像地址
		return '/Avata/' + userId;
	},
	getUserPageUrl(userId) {//个人用户主页
		return '/UserPage/' + userId;
	}
});

module.exports = Avatar;

