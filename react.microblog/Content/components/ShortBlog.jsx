/**
 * 短微博
 */
var React = require('react');
var ShortBlog = React.createClass({
    propTypes: {
        isTop: React.PropTypes.bool.isRequired,
        longBlogId: React.PropTypes.number.isRequired,
        blogBody: React.PropTypes.string.isRequired
    },
    render() {
        let classZD = this.props.isTop ? 'webo_zd819' : '';
        let cssClass = `weibo_content ${classZD}`;
        return (
            <div className={cssClass}   dangerouslySetInnerHTML={{ __html: this.props.blogBody }} >
            </div>
        );
    },
})

module.exports = ShortBlog;