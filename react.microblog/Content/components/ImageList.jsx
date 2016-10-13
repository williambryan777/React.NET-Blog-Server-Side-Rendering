/**
 * 微博图片列表
 */
var React = require('react');
var ImageZoom = require('react-medium-image-zoom');
var $ = require("jquery");
var ImageList = React.createClass({
    propTypes: {
        imgUrlList: React.PropTypes.array,
        longBlogId: React.PropTypes.number.isRequired,
    },
    render() {
        const {imgUrlList, longBlogId} = this.props;
        const isShow = imgUrlList && imgUrlList.length > 0 && longBlogId <= 0;
        if (isShow) {
            return (
                <div className="clearfix" >
                    <ul className="line-content-pic mt10 imgList" onClick={this.handleImg}>
                        {
                            imgUrlList.map((imgUrl, i) => {
                                return (
                                    <li className='f1 mr5' key={i}>
                                        <img src={imgUrl} width="80" height="80" />
                                   </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
})

module.exports = ImageList;