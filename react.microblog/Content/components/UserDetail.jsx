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
        return '/UserPage/' + userId;
    },
    render() {
        let htmlVertical='';
        if (this.props.accountRole == 1) {
            htmlVertical=` <span style="vertical-align: middle;margin-left:1px;">
                <img src="/Themes/DefaultClean/images/certification.png" width="48" height="20" />
            </span>`
        }
        else if (this.props.accountRole == 2) {
            htmlVertical= `<span  style="vertical-align:middle">
                <i className="icon v-official"></i>
            </span>`
        }
        return (
            <div className="user_msg_txt">
                <a href={this.getUserPageUrl(this.props.userId) }  target="_blank" className="username" dangerouslySetInnerHTML={{ __html: this.props.UserDisplayName }} ></a>
                {htmlVertical}
            </div>
        );
    }
})

module.exports = UserDetail;