/**
 * 短微博
 */
var React = require('react');
var ShortBlog = React.createClass({
    propTypes: {
        isTop: React.PropTypes.bool,
        blogBody: React.PropTypes.string.isRequired
    },
    getInitialState(){
        return {
            isTop:this.props.isTop
        }
    },
    render() {
        let classZD = this.state.isTop ? 'webo_zd819' : '';
        let cssClass = `weibo_content ${classZD}`;
        let blogBody=this.props.blogBody;
        return (
            <div className={cssClass} dangerouslySetInnerHTML={{ __html: blogBody }}>
            </div>
        );
    },
})

module.exports = ShortBlog;