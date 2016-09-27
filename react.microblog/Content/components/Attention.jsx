//关注某个人
var React = require('react')
var Attention = React.createClass({
    propTypes: {
        isAttention: React.propTypes.bool.isRequired,//是否关注
        isOwnerBlog: React.propTypes.bool.isRequired,//是否当前用户的微博
        userId: React.propTypes.number.isRequired//用户ID
    },
    getInitialState(){
        return {
            isAttention:this.props.isAttention
        }
    },
    AttentionUser(UserId) {
        var userId = this.props.userId;
        this.setState({isAttention:true})
    },
    render() {
        if (!this.props.IsOwnerBlog) {
            let setfollow = this.props.isAttention ? 'setfollow' : '';
            let cssClass = `normalFollowBtn btn ${setfollow} attr_${this.props.userId} `;//样式
            <div class="btnbox">
                <a href="javascript:void(0);"  className={cssClass} onClick={this.AttentionUser} title={this.state.isAttention ? '点击取消关注' : '点击添加关注'}>{ this.state.isAttention ? '已关注' : '关注' }</a>
            </div>
        }

    }
})

module.exports = Attention;