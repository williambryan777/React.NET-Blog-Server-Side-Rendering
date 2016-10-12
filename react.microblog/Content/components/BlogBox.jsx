
var React = require('react')
var Avatar = require('./Avatar');
var ShortBlog = require('./ShortBlog');
var UserDetail = require('./UserDetail');
var ImageList = require('./ImageList');
var Attention = require('./Attention');
var Blog = require('./Blog');

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
         var microBlogs = this.state.blogList.map(item => {
           return(
               <li className='weibo_block clearfix'>
                   <div className='left_box'>
                       <Avatar userId={item.MicroBlog.UserId} />
                       <Attention userId={item.MicroBlog.UserId} isAttention={item.IsAttention} isOwnerBlog={item.IsOwnerBlog} />
                   </div>
                   <div className='right_box'>
                       <UserDetail userId={item.MicroBlog.UserId} accountRole={item.AccountRole} userDisplayName={item.MicroBlog.UserDisplayName} />
                       <Blog blog={item} />
                   </div>
               </li>
           );
        })
        return (
            <div className="weibo_wrap weibo_detail_wrap">
                <ul className='weibo_detail_list'>{microBlogs}
                </ul>
            </div>
        )
    }
})

module.exports = BlogBox;

