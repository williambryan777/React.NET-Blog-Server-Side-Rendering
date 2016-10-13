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
        const {isTop, blogBody} = this.props;
        let classZD = isTop ? 'webo_zd819' : '';
        let cssClass = `weibo_content ${classZD}`;
        return (
            <div className={cssClass} dangerouslySetInnerHTML={{ __html: blogBody }} >
            </div>
        );
    },
})

module.exports = ShortBlog;