/**
 * 微博相片列表
 */
var React = require('react');
var ImageList = React.createClass({
    propTypes: {
        initialImgUrlList: React.PropTypes.array.isRequired,
        initiallongBlogId: React.PropTypes.number.isRequired,
    },
    getInitialState() {
        return {
            imgUrlList: this.props.initialImgUrlList,
            longBlogId: this.props.initiallongBlogId
        }
    },

    render() {
        let imgList = this.props.imgUrlList;
        let liNodes = imgList.map(imgUrl => {
            <li className='f1 mr5'>
                <img src={imgUrl} width="80" height="80"/>
            </li>
        });
        // let htmlImg = '';
        // if (this.state.imgUrlList > 0 && this.state.longBlogId > 0) {
        //     htmlImg = <div className="clearfix" >
        //         <ul className="line-content-pic mt10 imgList">
        //             {liNodes}
        //         </ul>
        //     </div>;
        // }
        const isShow = this.state.imgUrlList > 0 && this.state.longBlogId > 0
        return (
            {
                if(isShow) {
                    <div className="clearfix" >
                        <ul className="line-content-pic mt10 imgList">
                            {liNodes}
                        </ul>
                    </div>
                }
            }

        );

    }
})

module.exports = ImageList;