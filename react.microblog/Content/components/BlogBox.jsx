const ShortBlog = require("./ShortBlog");
const UserDetail = require("./UserDetail");
const ImageList = require("./ImageList");
const React = require('react');
const Avatar = require('./Avatar');
const Attention = require('./Attention')

var BlogBox = React.createClass({
    propTypes: {
        initBlogs: React.PropTypes.array.isRequired
    },
    getInitialState() {
        return {
            blogList: this.props.initBlogs,
            page: 1,
            hasMore: true,
            loadingMore: false
        }
    },
    render() {
        var originalBlogs = this.state.blogList.map(blog => {
            <li className='weibo_block clearfix'>
                <div className='left_box'>
                    // 头像
                    <Avatar userId={blog.MicroBlog.UserId} />
                    //状态
                    <Attention userId={blog.MicroBlog.UserId} isAttention={blog.IsAttention} isOwnerBlog={blog.IsOwnerBlog}/>
                </div>
                <div className='right_box'>
                    <UserDetail userId={blog.MicroBlog.UserId} accountRole={blog.AccountRole} userDisplayName={blog.MicroBlog.UserDisplayName}/>
                </div>
                
            </li>
        })
        return (
            <div className="weibo_wrap weibo_detail_wrap">
                <ul className='weibo_detail_list'>

                </ul>
            </div>
        )
    }
})

