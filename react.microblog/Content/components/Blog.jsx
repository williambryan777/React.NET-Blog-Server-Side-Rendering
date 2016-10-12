var React = require('react')
var ShortBlog=require('./ShortBlog');
var ImageList=require('./ImageList');
var LongBlog=require('./LongBlog');

var Blog=React.createClass({

    propTypes:{
        blog: React.PropTypes.object
    },
    getInitialState() {
        return {
            microBlog: this.props.blog.MicroBlog,
            originalId: this.props.blog.MicroBlog.OriginalId,
            isTop: this.props.blog.IsTop,
            imgUrlList: this.props.blog.ImgUrlList,
            originalBlog: this.props.blog.OriginalBlog
        }
    },
    render() {
        let longBlogId = this.props.blog.MicroBlog.longBlogId;
        let blogBody = this.props.blog.MicroBlog.BlogBody;
        let imgUrlList = this.state.imgUrlList;//图像列表
        let originalBlog = this.state.originalBlog;
        if (originalBlog == null || this.state.originalId == 0) {//原创的微博
            if(longBlogId<=0){//短微博
                return (
                    <div>
                        <ShortBlog  isTop={this.state.isTop} longBlogId={longBlogId} blogBody={blogBody} />
                        <ImageList imgUrlList={imgUrlList} longBlogId={longBlogId}/>
                    </div>
                    )
            }else{//长微博
                return (<LongBlog initlongBlog={this.state.microBlog}/>)
            }
     }else{//转发的微博
        let cssZD=this.state.isTop ? 'webo_zd819':'';
        let cssClass = `weibo_content  ${cssZD} `;//样式
        let forwardContent=(//转发发表的内容
            <div className={cssClass} dangerouslySetInnerHTML={{ __html: blogBody }} ></div>
                    )
        let original_longblogId = originalBlog.MicroBlog.longBlogId;//原微博
        let original_blogbody = originalBlog.MicroBlog.BlogBody;//原微博内容
        let original_imgUrlList = originalBlog.ImgUrlList;//原微博内容
        let userId = originalBlog.MicroBlog.UserId;
        let userDisplayName = originalBlog.MicroBlog.UserDisplayName;
            
        if (original_longblogId <= 0) {//短微博
            return (
               <div>
                    {forwardContent}
                    <div className="forward_cont_box">
                        <p>
                            <a href={'/UserPage/' + userId} target="_blank" className="color3 person-card" userid={userId}><strong style={{ color: '#ff6200'}}>@{userDisplayName}：</strong></a>
                        </p>
                        <div>
                            <ShortBlog  blogBody={original_blogbody} />
                            <ImageList imgUrlList={original_imgUrlList} longBlogId={original_longblogId} />
                        </div>
                    </div>
               </div>
                        )
        } else {//长微博
                return (
                    <div>
                        {forwardContent}
                        <div className="forward_cont_box">
                            <p>
                                <a href={'/UserPage/' + userId} target="_blank" className="color3 person-card" userid={userId}>
                                    <strong style={{ color: '#ff6200' }}>@{userDisplayName}：</strong>
                                </a>
                            </p>
                            <LongBlog initlongBlog={originalBlog.MicroBlog} />
                        </div>
                    </div>
                )
            }
        }

    }

});
    

module.exports=Blog