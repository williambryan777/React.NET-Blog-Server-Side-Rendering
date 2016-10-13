
var React = require('react')
var LongBlog = React.createClass({

    propTypes: {
        initlongBlog: React.PropTypes.object.isRequired,
        isTop: React.PropTypes.bool
    },
    getInitialState() {
        return {
            isTop: this.props.isTop,
            id: this.props.initlongBlog.Id,
            longBlogId: this.props.initlongBlog.longBlogId,
            blogBody: this.props.initlongBlog.LongBlogBody,
            longBlogImg: this.props.initlongBlog.LongBlogImg,
            longBlogTitle: this.props.initlongBlog.LongBlogTitle.slice(0, 36),
            longBlogIntro: this.props.initlongBlog.LongBlogIntro.slice(0, 80),
            scroll_pos: 0
        }
    },
    getBlogDetail() {
        return '/Social/BlogDetail/Index/' + this.state.id
    },

    unfoldBlog() {//展开微博
        let id = this.state.id;
        
    },
    collapseBlog() {//收缩微博
        let id = this.state.id;
        let scroll_pos = this.state.scroll_pos;
        console.log(id)
       
    },
     render () {
        let classZD = this.state.isTop ? 'webo_zd819' : '';
        let cssClass = `weibo_content ${classZD}`;
        
        return (
            <div>
                <div  className={cssClass} >
                    <span style={{ color: '#ff6200' }}>[长微博]</span>{this.state.longBlogTitle}
                </div>
                <div className="cwb_mediasmallBox" style={{
                    display: 'block'}}>
                    <a  href={this.getBlogDetail()} target="_blank">
                        {(()=>{
                        if (this.state.longBlogImg != null) {//有图片
                            return (<img src={this.state.longBlogImg} className="left_msgimg" width="80" height="80" alt="followme" />)
                        } else {//没有图片的话给一个默认的图片
                            return (<img src="/Themes/DefaultClean/images/cwb_default_img.jpg" className="left_msgimg" width="80" height="80" alt="" />)
                        }
                        })()}
                     </a>
                    <div className="right_txtintrobox">
                        <h3 className="title">
                            <a href={this.getBlogDetail() } target="_blank">{this.state.longBlogTitle}</a>
                        </h3>
                        <p className="jstxt" dangerouslySetInnerHTML={{ __html: this.state.longBlogIntro }}></p>
                    </div>
                    <a href={'/Social/BlogDetail/LongBlogDetail/' + this.state.id} target="_blank"  className="readallbtn" id={'js_readallbtn' + this.state.id}>阅读</a>
                </div>
            </div>
        )
    }


});


module.exports = LongBlog