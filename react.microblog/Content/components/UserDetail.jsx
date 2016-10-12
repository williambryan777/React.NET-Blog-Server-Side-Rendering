/**
 * 用户信息
 */
var React = require('react');
var UserDetail = React.createClass({
    propTypes: {
        accountRole: React.PropTypes.number.isRequired,
        userId: React.PropTypes.number.isRequired,
        userDisplayName:React.PropTypes.string.isRequired
    },
    getUserPageUrl(userId) {//个人用户主页
        return '/UserPage/' + this.props.userId;
    },
    render() {
        if (this.props.accountRole == 1) {
            return (
                <div className="user_msg_txt">
                    <a href={this.getUserPageUrl()} target="_blank" className="username">{this.props.userDisplayName}</a>
                    <span style={{verticalAlign: 'middle', marginLeft: '1px'}}>
                        <img src="/Themes/DefaultClean/images/certification.png" width="48" height="20" />
                    </span>
                </div>
            )
        }
        else if (this.props.accountRole == 2) {
            return (
                <div className="user_msg_txt">
                    <a href={this.getUserPageUrl() } target="_blank" className="username">{this.props.userDisplayName}</a>
                    <span style={{ verticalAlign: 'middle' }}>
                        <i className="icon v-official"></i>
                    </span>
                </div>
            )
        }
        else{
           return null;
        }
    }
})

module.exports = UserDetail;