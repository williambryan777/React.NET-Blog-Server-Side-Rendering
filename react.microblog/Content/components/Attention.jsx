//关注某个人
var React = require('react')
var Attention = React.createClass({
    propTypes: {
        isAttention: React.PropTypes.bool.isRequired,
        isOwnerBlog: React.PropTypes.bool.isRequired,
        userId: React.PropTypes.number.isRequired
    },
    getInitialState(){
        return {
           isAttention: this.props.isAttention
        }
    },
    AttentionUser(UserId) {
        var state=this.state.isAttention;
        console.log(this.props.userId)
        //TODO:关注userid
        this.setState({ isAttention: !state });
    },
    render() {
          if (!this.props.IsOwnerBlog) {
            let setfollow = this.props.isAttention ? 'setfollow' : '';
            let cssClass = `normalFollowBtn btn ${setfollow} attr_${this.props.userId} `;//样式
            return (
                <div className="btnbox">
                    <a href="javascript:void(0);" className={cssClass} onClick={this.AttentionUser} title={this.state.isAttention ? '点击取消关注' : '点击添加关注'}>{this.state.isAttention ? '已关注' : '关注'}</a>
                </div>
            )
        }else{
            return null;
        }

    }
})

module.exports = Attention;