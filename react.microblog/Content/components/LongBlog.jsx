
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
        let smallImg='';
        if (this.state.longBlogImg != null){
            smallImg=(
                <img  src={this.state.longBlogImg} className="left_msgimg" width="80" height="80" alt="followme" />
            )
                }else{
            smallImg=(
                <img  src="/Themes/DefaultClean/images/cwb_default_img.jpg" className="left_msgimg" width="80" height="80" alt="" />
            )
}
        return (
            <div>
                <div  className={cssClass} >
                    <span style={{ color: '#ff6200' }}>[长微博]</span>{this.state.longBlogTitle}
                </div>
                <div className="cwb_mediasmallBox" style={{
                        display: 'block'}}>
                        <a  href={this.getBlogDetail()} target="_blank">
                            {smallImg}
                         </a>
                        <div className="right_txtintrobox">
                            <h3 className="title">
                                <a href={this.getBlogDetail() } target="_blank">{this.state.longBlogTitle}</a>
                            </h3>
                            <p className="jstxt" dangerouslySetInnerHTML={{ __html: this.state.longBlogIntro }}></p>
                        </div>
                        <a href={'/Social/BlogDetail/LongBlogDetail/' + this.state.id} target="_blank" onClick={this.unfoldBlog} className="readallbtn" id={'js_readallbtn' + this.state.id} >阅读</a>
                 </div>
                 <div class="cwb_detailbox_wrap" style={{display:'none'}} >
                    <div className="cwb_detailbox">
                        <div className="tabtitle">
                            <a href="javascript:void(0)" onClick={this.collapseBlog}  ><i className="shouqi_icon"></i>收起</a>
                        </div>
                        <div className="content">
                            <h3 className="cwb_title">{this.state.longBlogTitle}</h3>
                            <div className="cwb_dy_box">
                                <div className="cwb_dy_box_cont">导语：{this.state.longBlogIntro}</div>
                            </div>
                            <div id={'BlogBody_'+this.state.id}>
                                {this.state.LongBlogBody}
                            </div>
                        </div>
                        <div class="tabtitle">
                            <a href="javascript:void(0)" onClick={this.collapseBlog} ><i className={'shouqi_icon'+this.state.id}></i>收起</a>
                        </div>
                    </div>
                 </div>

            </div>
    )
}


});
    

module.exports=LongBlog